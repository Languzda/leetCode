const fs = require("fs");
const path = require("path");

function removeProblem() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log("Usage: npm run remove-problem <number>");
    console.log("Example: npm run remove-problem 121");
    return;
  }

  const problemNumber = args[0];
  const problemsDir = path.join(__dirname, "..", "TS", "problems");

  // Znajdź folder problemu
  const folders = fs.readdirSync(problemsDir).filter((folder) => {
    const fullPath = path.join(problemsDir, folder);
    return (
      fs.statSync(fullPath).isDirectory() &&
      folder.startsWith(problemNumber.padStart(4, "0"))
    );
  });

  if (folders.length === 0) {
    console.log(`❌ Problem ${problemNumber} nie został znaleziony!`);
    return;
  }

  if (folders.length > 1) {
    console.log(`⚠️  Znaleziono wiele problemów z numerem ${problemNumber}:`);
    folders.forEach((folder) => console.log(`   - ${folder}`));
    console.log("Proszę podać pełną nazwę folderu.");
    return;
  }

  const folderToRemove = folders[0];
  const fullPath = path.join(problemsDir, folderToRemove);

  // Potwierdź usunięcie
  console.log(`🗑️  Czy na pewno chcesz usunąć problem: ${folderToRemove}?`);
  console.log(`📁 Ścieżka: ${fullPath}`);
  console.log("⚠️  Ta operacja jest nieodwracalna!");
  console.log("\nUruchom ponownie z flagą --confirm aby potwierdzić:");
  console.log(`node scripts/remove-problem.js ${problemNumber} --confirm`);

  if (!args.includes("--confirm")) {
    return;
  }

  try {
    // Rekurencyjne usunięcie folderu
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`✅ Problem ${folderToRemove} został usunięty!`);
    console.log("\n💡 Pamiętaj o zaktualizowaniu README:");
    console.log("npm run update-readme");
  } catch (error) {
    console.error(`❌ Błąd podczas usuwania:`, error.message);
  }
}

removeProblem();
