const fs = require("fs");
const path = require("path");

// Mapa trudności z emoji
const difficultyEmoji = {
  Easy: "🟢",
  Medium: "🟡",
  Hard: "🔴",
};

// Funkcja do parsowania pliku solution.ts i wyciągania metadanych
function extractProblemMetadata(solutionPath) {
  try {
    const content = fs.readFileSync(solutionPath, "utf8");
    const lines = content.split("\n");

    let title = "";
    let difficulty = "";
    let tags = "";
    let number = "";

    for (const line of lines) {
      if (line.includes("* Problem ")) {
        const match = line.match(/Problem (\d+): (.+)/);
        if (match) {
          number = match[1];
          title = match[2];
        }
      } else if (line.includes("* Difficulty:")) {
        difficulty = line
          .split("Difficulty:")[1]
          .trim()
          .replace("*/", "")
          .trim();
      } else if (line.includes("* Tags:")) {
        tags = line.split("Tags:")[1].trim().replace("*/", "").trim();
      }
    }

    return { number, title, difficulty, tags };
  } catch (error) {
    console.error(`Error reading ${solutionPath}:`, error.message);
    return null;
  }
}

// Funkcja do generowania URL do LeetCode
function generateLeetCodeUrl(title) {
  return `https://leetcode.com/problems/${title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")}/`;
}

// Funkcja do formatowania tagów
function formatTags(tags) {
  if (!tags) return "";
  return tags
    .split(",")
    .map((tag) => `\`${tag.trim()}\``)
    .join(", ");
}

// Funkcja do wyciągania aktualnie istniejących problemów z README
function extractCurrentProblemsFromReadme(readmePath) {
  const currentProblems = [];

  try {
    if (!fs.existsSync(readmePath)) {
      return currentProblems;
    }

    const content = fs.readFileSync(readmePath, "utf8");
    const lines = content.split("\n");

    // Znajdź linie tabeli (zaczynające się od | i zawierające cyfry)
    for (const line of lines) {
      const match = line.match(/^\|\s*(\d+)\s*\|\s*\[([^\]]+)\]/);
      if (match) {
        const number = parseInt(match[1]);
        const title = match[2];
        currentProblems.push({ number, title });
      }
    }
  } catch (error) {
    console.error("Error reading current README:", error.message);
  }

  return currentProblems;
}

// Funkcja do porównania problemów i wykrycia zmian
function compareProblems(currentProblems, newProblems) {
  const currentNumbers = new Set(currentProblems.map((p) => p.number));
  const newNumbers = new Set(newProblems.map((p) => p.number));

  const added = newProblems.filter((p) => !currentNumbers.has(p.number));
  const removed = currentProblems.filter((p) => !newNumbers.has(p.number));

  return { added, removed };
}

// Funkcja do aktualizacji README
function updateReadme() {
  const problemsDir = path.join(__dirname, "..", "TS", "problems");
  const readmePath = path.join(__dirname, "..", "README.md");

  if (!fs.existsSync(problemsDir)) {
    console.error("Problems directory not found!");
    return;
  }

  // Wyciągnij aktualnie istniejące problemy z README
  const currentProblems = extractCurrentProblemsFromReadme(readmePath);

  // Znajdź wszystkie foldery problemów
  const problemFolders = fs
    .readdirSync(problemsDir)
    .filter((item) => {
      const fullPath = path.join(problemsDir, item);
      return fs.statSync(fullPath).isDirectory() && /^\d{4}-/.test(item);
    })
    .sort();

  const problems = [];
  const stats = { easy: 0, medium: 0, hard: 0 };

  // Przetwórz każdy problem
  for (const folder of problemFolders) {
    const solutionPath = path.join(problemsDir, folder, "solution.ts");

    if (fs.existsSync(solutionPath)) {
      const metadata = extractProblemMetadata(solutionPath);

      if (metadata && metadata.title) {
        const leetcodeUrl = generateLeetCodeUrl(metadata.title);
        const solutionUrl = `TS/problems/${folder}/solution.ts`;
        const testUrl = `TS/problems/${folder}/solution.test.ts`;
        const difficultyLower = metadata.difficulty.toLowerCase();

        // Aktualizuj statystyki
        if (stats.hasOwnProperty(difficultyLower)) {
          stats[difficultyLower]++;
        }

        problems.push({
          number: parseInt(metadata.number),
          title: metadata.title,
          difficulty: metadata.difficulty,
          tags: formatTags(metadata.tags),
          leetcodeUrl,
          solutionUrl,
          testUrl,
        });
      }
    }
  }

  // Sortuj według numeru problemu
  problems.sort((a, b) => a.number - b.number);

  // Generuj tabelę
  let tableRows = problems
    .map((problem) => {
      const emoji = difficultyEmoji[problem.difficulty] || "";
      return `| ${problem.number} | [${problem.title}](${problem.leetcodeUrl}) | ${emoji} ${problem.difficulty} | ${problem.tags} | [📄](${problem.solutionUrl}) | [🧪](${problem.testUrl}) |`;
    })
    .join("\n");

  // Przeczytaj aktualny README
  let readmeContent = "";
  if (fs.existsSync(readmePath)) {
    readmeContent = fs.readFileSync(readmePath, "utf8");
  }

  // Zastąp sekcję statystyk
  const totalProblems = problems.length;
  const statsSection = `- **Rozwiązane problemy**: ${totalProblems}
- **Easy**: ${stats.easy}
- **Medium**: ${stats.medium}
- **Hard**: ${stats.hard}`;

  // Zastąp tabelę
  const tableHeader = `| # | Problem | Difficulty | Tags | Solution | Tests |
|---|---------|------------|------|----------|-------|`;
  const newTable = tableHeader + "\n" + tableRows;

  // Aktualizuj content
  if (readmeContent) {
    // Zastąp statystyki
    const statsRegex =
      /- \*\*Rozwiązane problemy\*\*: \d+\s*\n- \*\*Easy\*\*: \d+\s*\n- \*\*Medium\*\*: \d+\s*\n- \*\*Hard\*\*: \d+/;
    readmeContent = readmeContent.replace(statsRegex, statsSection);

    // Zastąp tabelę - znajdź nagłówek i wszystko do następnej sekcji ##
    const tablePattern =
      /\| #[^|]*\| Problem[^|]*\| Difficulty[^|]*\| Tags[^|]*\| Solution[^|]*\| Tests[^|]*\|\s*\n\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|\s*\n[\s\S]*?(?=\n## )/;

    if (tablePattern.test(readmeContent)) {
      readmeContent = readmeContent.replace(tablePattern, newTable + "\n\n");
    } else {
      // Fallback - znajdź tylko nagłówek tabeli i zastąp od niego
      const headerPattern =
        /(\| #[^|]*\| Problem[^|]*\| Difficulty[^|]*\| Tags[^|]*\| Solution[^|]*\| Tests[^|]*\|\s*\n\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|\s*\n)/;
      readmeContent = readmeContent.replace(headerPattern, newTable + "\n\n");
    }
  }

  // Zapisz README
  fs.writeFileSync(readmePath, readmeContent);

  // Porównaj zmiany
  const changes = compareProblems(currentProblems, problems);

  console.log(
    `✅ README zaktualizowany! Znaleziono ${totalProblems} problemów.`
  );
  console.log(
    `📊 Statystyki: Easy: ${stats.easy}, Medium: ${stats.medium}, Hard: ${stats.hard}`
  );

  // Raportuj zmiany
  if (changes.added.length > 0) {
    console.log(`➕ Nowe problemy:`);
    changes.added.forEach((p) =>
      console.log(`   + ${p.number}: ${p.title} (${p.difficulty})`)
    );
  }

  if (changes.removed.length > 0) {
    console.log(`➖ Usunięte problemy:`);
    changes.removed.forEach((p) => console.log(`   - ${p.number}: ${p.title}`));
  }

  if (changes.added.length === 0 && changes.removed.length === 0) {
    console.log(`🔄 Brak zmian w problemach`);
  }

  // Debug info
  if (problems.length > 0) {
    console.log(`🔍 Wszystkie problemy:`);
    problems.forEach((p) =>
      console.log(`   - ${p.number}: ${p.title} (${p.difficulty})`)
    );
  }
}

// Uruchom jeśli wywoływany bezpośrednio
if (require.main === module) {
  updateReadme();
}

module.exports = { updateReadme };
