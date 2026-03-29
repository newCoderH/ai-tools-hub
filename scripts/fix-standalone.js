/**
 * Fix standalone server.js working directory issue
 *
 * Problem: The generated server.js uses `process.chdir(__dirname)`
 * which sets the working directory to standalone/ directory.
 * We change it to `process.chdir(dir)` to ensure CWD is consistent.
 *
 * Note: Static files are in project_root/.next/static/ but Next.js looks
 * in standalone/.next/static/. The CI workflow creates a symlink to fix this.
 */

const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, '..');
const standaloneDir = path.join(projectRoot, ".next", "standalone");
const serverPath = path.join(standaloneDir, "server.js");

if (fs.existsSync(serverPath)) {
  let content = fs.readFileSync(serverPath, "utf-8");

  // Fix: Change chdir(__dirname) to chdir(dir)
  // This ensures the working directory matches 'dir' for consistent path resolution
  if (content.includes("process.chdir(__dirname)")) {
    content = content.replace(
      "process.chdir(__dirname)",
      "process.chdir(dir)"
    );
    fs.writeFileSync(serverPath, content);
    console.log("Fixed standalone server.js: chdir now uses dir");
  } else if (content.includes("process.chdir(dir)")) {
    console.log("standalone server.js already fixed");
  } else {
    console.error("Could not find expected pattern in server.js");
    process.exit(1);
  }
} else {
  console.error("standalone server.js not found at:", serverPath);
  process.exit(1);
}
