#!/usr/bin/env node

const { cloneRepo } = require("../index");

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Usage: clone-repo <repo_url>");
  process.exit(1);
}

const repoUrl = args[0];
const destination = process.cwd(); // Clone into current directory

console.log(`Cloning repository from ${repoUrl} to ${destination}...`);

cloneRepo(repoUrl, destination);
