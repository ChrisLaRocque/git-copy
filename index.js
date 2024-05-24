const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

async function cloneRepo(repoUrl, destination) {
  // Extract repo name from URL
  const repoName = repoUrl.split("/").pop().replace(".git", "");

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Clone repository
  try {
    execSync(`git clone --depth=1 ${repoUrl} ${destination}/${repoName}`, {
      stdio: "inherit",
    });
  } catch (err) {
    console.error("Error cloning repository:", err);
    return;
  }

  // Remove .git directory
  const gitDir = path.join(destination, repoName, ".git");
  try {
    fs.rmdirSync(gitDir, { recursive: true });
    console.log("Repository cloned successfully without git information.");
  } catch (err) {
    console.error("Error removing .git directory:", err);
  }
}

module.exports = { cloneRepo };
