/**
 * Fix standalone server.js path resolution issue
 *
 * Problem: The generated server.js uses `dir = path.join(__dirname)`
 * which points to the standalone/ directory. But .next/static/ is at
 * the project root. This script changes it to point to the parent
 * directory so that distDir: "./.next" resolves correctly.
 */

const fs = require("fs");
const path = require("path");

// Get the project root (two levels up from scripts/ directory)
const projectRoot = path.join(__dirname, '..');
const standaloneDir = path.join(projectRoot, ".next", "standalone");
const serverPath = path.join(standaloneDir, "server.js");

if (fs.existsSync(serverPath)) {
  let content = fs.readFileSync(serverPath, "utf-8");

  // Fix 1: Change dir to point to project root instead of standalone/ directory
  // __dirname is .../.next/standalone/, so two levels up gives the project root
  const oldLine = "const dir = path.join(__dirname)";
  const newLine = "const dir = path.join(__dirname, '..', '..')";

  // Fix 2: Change chdir(__dirname) to chdir(dir) to use project root as CWD
  content = content.replace(
    "process.chdir(__dirname)",
    "process.chdir(dir)"
  );

  if (content.includes(oldLine)) {
    content = content.replace(oldLine, newLine);
    fs.writeFileSync(serverPath, content);
    console.log("Fixed standalone server.js: dir now points to project root");
  } else if (content.includes(newLine)) {
    console.log("standalone server.js already fixed");
  } else {
    console.error("Could not find expected pattern in server.js");
    process.exit(1);
  }
} else {
  console.error("standalone server.js not found at:", serverPath);
  process.exit(1);
}
