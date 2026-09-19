#!/usr/bin/env node

/**
 * Automated Game Deployment & Sync Script for MingatGames.github.io
 * 
 * Usage:
 *   node scripts/deploy-game.js <game-folder-name>
 * 
 * Example:
 *   node scripts/deploy-game.js cozy-cafe
 *   node scripts/deploy-game.js ../sparkle-academy
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const portalRoot = path.resolve(__dirname, '..');
const gamesDir = path.join(portalRoot, 'games');

// Ensure destination games folder exists
if (!fs.existsSync(gamesDir)) {
  fs.mkdirSync(gamesDir, { recursive: true });
}

function resolveGameDir(inputPath) {
  // Check exact path
  if (fs.existsSync(inputPath)) return path.resolve(inputPath);

  // Check sibling in parent directory (workspace root)
  const sibling = path.resolve(portalRoot, '..', inputPath);
  if (fs.existsSync(sibling)) return sibling;

  // Check direct child in portal root
  const directChild = path.resolve(portalRoot, inputPath);
  if (fs.existsSync(directChild)) return directChild;

  return null;
}

function deploy(gameInput) {
  if (!gameInput) {
    console.error('❌ Error: Please specify a game directory name or path.');
    console.log('Usage: node scripts/deploy-game.js <game-directory>');
    process.exit(1);
  }

  const sourceDir = resolveGameDir(gameInput);
  if (!sourceDir) {
    console.error(`❌ Error: Could not locate game directory for "${gameInput}".`);
    process.exit(1);
  }

  const gameId = path.basename(sourceDir).toLowerCase().replace(/[^a-z0-9_-]/g, '-');
  const targetDir = path.join(gamesDir, gameId);

  console.log(`\n==================================================`);
  console.log(`🎮 Deploying Game: ${gameId}`);
  console.log(`   Source: ${sourceDir}`);
  console.log(`   Target: ${targetDir}`);
  console.log(`==================================================`);

  // Check package.json for build step
  const pkgPath = path.join(sourceDir, 'package.json');
  let buildOutDir = sourceDir;

  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      if (pkg.scripts && pkg.scripts.build) {
        const nodeModules = path.join(sourceDir, 'node_modules');
        if (!fs.existsSync(nodeModules)) {
          console.log(`📦 Installing dependencies in ${sourceDir}...`);
          execSync('npm install', { cwd: sourceDir, stdio: 'inherit' });
        }
        console.log(`🔨 Running build step: npm run build...`);
        execSync('npm run build', { cwd: sourceDir, stdio: 'inherit' });

        const potentialDist = path.join(sourceDir, 'dist');
        if (fs.existsSync(potentialDist)) {
          buildOutDir = potentialDist;
          console.log(`✨ Found built distribution at: ${buildOutDir}`);
        }
      }
    } catch (e) {
      console.warn(`⚠️ Build failed or skipped: ${e.message}`);
      const potentialDist = path.join(sourceDir, 'dist');
      if (fs.existsSync(potentialDist)) {
        console.log(`⚠️ Falling back to existing pre-built dist at: ${potentialDist}`);
        buildOutDir = potentialDist;
      }
    }
  }

  // Clean target directory
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
  fs.mkdirSync(targetDir, { recursive: true });

  // Copy files
  console.log(`📂 Copying assets to ${targetDir}...`);
  fs.cpSync(buildOutDir, targetDir, {
    recursive: true,
    filter: (src) => {
      const base = path.basename(src);
      return base !== 'node_modules' && base !== '.git' && base !== '.vscode';
    }
  });

  // If source has an 'assets' folder with 3D models outside dist, copy if missing
  const extraAssetsDir = path.join(sourceDir, 'assets');
  const targetAssetsDir = path.join(targetDir, 'assets');
  if (fs.existsSync(extraAssetsDir) && buildOutDir !== sourceDir) {
    if (!fs.existsSync(targetAssetsDir)) {
      fs.mkdirSync(targetAssetsDir, { recursive: true });
    }
    fs.cpSync(extraAssetsDir, targetAssetsDir, { recursive: true });
  }

  // Patch relative paths in index.html and JS files
  const targetIndex = path.join(targetDir, 'index.html');
  if (fs.existsSync(targetIndex)) {
    let htmlContent = fs.readFileSync(targetIndex, 'utf8');
    let patched = false;

    if (htmlContent.includes('href="/assets/')) {
      htmlContent = htmlContent.replaceAll('href="/assets/', 'href="./assets/');
      patched = true;
    }
    if (htmlContent.includes('src="/assets/')) {
      htmlContent = htmlContent.replaceAll('src="/assets/', 'src="./assets/');
      patched = true;
    }
    if (htmlContent.includes('src="/src/')) {
      htmlContent = htmlContent.replaceAll('src="/src/', 'src="./src/');
      patched = true;
    }

    if (patched) {
      fs.writeFileSync(targetIndex, htmlContent, 'utf8');
      console.log(`🔧 Patched index.html asset references to relative paths.`);
    }
  } else {
    console.warn(`⚠️ Warning: No index.html found at ${targetIndex}!`);
  }

  // Patch JS bundles with /assets/
  if (fs.existsSync(targetAssetsDir)) {
    const jsFiles = fs.readdirSync(targetAssetsDir).filter(f => f.endsWith('.js'));
    jsFiles.forEach(jsFile => {
      const fullPath = path.join(targetAssetsDir, jsFile);
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("'/assets/")) {
        content = content.replaceAll("'/assets/", "'./assets/");
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`🔧 Patched asset references in ${jsFile}.`);
      }
      if (content.includes('"/assets/')) {
        content = content.replaceAll('"/assets/', '"./assets/');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`🔧 Patched asset references in ${jsFile}.`);
      }
    });
  }

  console.log(`\n✅ Game "${gameId}" deployed successfully to:`);
  console.log(`   games/${gameId}/index.html`);
  console.log(`👉 In-browser play URL: games/${gameId}/\n`);
}

const target = process.argv[2];
deploy(target);
