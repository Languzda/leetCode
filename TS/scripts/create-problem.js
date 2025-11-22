const fs = require("fs");
const path = require("path");

function createProblem() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log("Usage: npm run new-problem <number> <name>");
    console.log("Example: npm run new-problem 1 two-sum");
    return;
  }

  const [number, name] = args;
  const folderName = `${number.padStart(4, "0")}-${name}`;
  const problemDir = path.join(__dirname, "..", "problems", folderName);

  // Create directory
  if (!fs.existsSync(problemDir)) {
    fs.mkdirSync(problemDir, { recursive: true });
  }

  // Create solution file
  const solutionContent = `/**
 * Problem ${number}: ${name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")}
 * 
 * Difficulty: 
 * Tags: 
 * 
 * Description:
 * 
 */

export function solution() {
    // Your solution here
    return null;
}

// Run only when executed directly
if (require.main === module) {
    console.log('Running solution...');
    console.log(solution());
}
`;

  // Create test file
  const testContent = `import { solution } from './solution';

describe('Problem ${number}: ${name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")}', () => {
  test('Example 1', () => {
    // Add your test cases here
    const result = solution();
    expect(result).toBeDefined();
  });
  
  test('Example 2', () => {
    // Add more test cases here
    const result = solution();
    expect(result).toBeDefined();
  });
});
`;

  // Create README
  const readmeContent = `# Problem ${number}: ${name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")}

## Description

[Add problem description here]

## Examples

### Example 1:
\`\`\`
Input: 
Output: 
Explanation: 
\`\`\`

## Constraints

- 

## Solution Approach

[Explain your approach here]

## Time Complexity: 
## Space Complexity: 

## How to run:

\`\`\`bash
# Run the solution
npm run dev problems/${folderName}/solution.ts

# Run tests
npm test -- problems/${folderName}
\`\`\`
`;

  // Write files
  fs.writeFileSync(path.join(problemDir, "solution.ts"), solutionContent);
  fs.writeFileSync(path.join(problemDir, "solution.test.ts"), testContent);
  fs.writeFileSync(path.join(problemDir, "README.md"), readmeContent);

  console.log(`✅ Created problem structure in: problems/${folderName}`);
  console.log(`
To get started:
1. Edit problems/${folderName}/solution.ts
2. Add test cases in problems/${folderName}/solution.test.ts
3. Run: npm run dev problems/${folderName}/solution.ts
4. Test: npm test -- problems/${folderName}
  `);
}

createProblem();
