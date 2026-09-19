# AGENTS.md — Developer & Coding Agent Guide for Mingat Games

This document serves as the operational guide for AI coding agents and developers maintaining and updating the **Mingat Games** ecosystem and its official GitHub Pages portal (`https://mingatgames.github.io`).

---

## 1. Project Ecosystem Overview

The `MingatGames` organization develops indie web games, 3D simulations, and educational applications. The workspace at `/home/dalai/dev/MingatGames/` contains individual game repositories alongside the central GitHub Pages portal repository.

### Directory Structure

```text
/home/dalai/dev/MingatGames/
├── AGENTS.md                     # This operational guide for agents
├── cozy-cafe/                    # ☕ Cozy Cafe 3D: Latte the Latte (Three.js, Web Audio)
├── sparkle-academy/              # 🌟 Sparkle Academy: Math & Match (Canvas 2D, Web Audio)
├── wolf-sheep/                   # 🐺 Shepherd's Guard: Action defense (Three.js, TypeScript)
├── nomad-life/                   # 🐎 Nomad Life: Steppe pastoral simulation (Three.js, Boids)
├── kids-game-arcade/             # 🎮 Kids Game Arcade: Central portal & Express server
├── pet-daycare/                  # 🐶 Pet Daycare: Upcoming pet simulation
└── MingatGames.github.io/        # 🌐 Official GitHub Pages portal repository
    ├── index.html                # Showcase frontend, game grid & in-browser player
    ├── styles.css                # Dark obsidian glassmorphic theme & responsive UI
    ├── main.js                   # Filter, search, particle background & player controller
    ├── package.json              # Maintenance scripts (deploy:game, start)
    ├── .nojekyll                 # Bypasses Jekyll for fast static asset serving
    ├── assets/
    │   └── img/                  # Logos, screenshots, and vector banners
    ├── games/                    # Standalone playable web distributions
    │   ├── cozy-cafe/            # Live build of Cozy Cafe 3D
    │   ├── sparkle-academy/      # Live build of Sparkle Academy
    │   ├── wolf-sheep/           # Live build of Shepherd's Guard
    │   └── nomad-life/           # Live build of Nomad Life
    └── scripts/
        └── deploy-game.js        # Automated build, copy & asset path patching tool
```

---

## 2. Architecture of `MingatGames.github.io`

The portal hosted at `https://mingatgames.github.io` serves two key functions:
1. **Studio Showcase**: Displays game cards with screenshots, tech badges, features, and links to GitHub repositories.
2. **Interactive In-Browser Player**: Visitors can click **"Play in Browser"** on any card to launch an embedded iframe overlay (`#game-player-modal`) that plays the game immediately without leaving the site.

### Key Rules for In-Browser Games:
- All games in `games/<game-id>/` must use **relative asset paths** (`./assets/...`, not `/assets/...`).
- Games must run inside an `<iframe>` with `allow="autoplay; fullscreen; keyboard"`.
- Keep builds lightweight (only compiled bundles in `dist/`, never `node_modules/`).
- The `.nojekyll` file in the root of `MingatGames.github.io` must always be preserved.

---

## 3. Maintenance Workflows for Agents

### Scenario A: Updating an Existing Game

When you make improvements, bug fixes, or new features in an existing game (e.g. `cozy-cafe` or `sparkle-academy`):

1. **Commit Game Changes**:
   ```bash
   cd /home/dalai/dev/MingatGames/<game-folder>
   npm test               # If tests exist
   git add .
   git commit -m "feat: description of changes"
   git push origin main
   ```

2. **Sync the Build to the Portal**:
   Run the automated deployment script from `MingatGames.github.io`:
   ```bash
   cd /home/dalai/dev/MingatGames/MingatGames.github.io
   node scripts/deploy-game.js <game-folder>
   # Or using npm:
   npm run deploy:game -- <game-folder>
   ```
   *What this script does automatically:*
   - Runs `npm run build` in the game directory (if `package.json` contains a build script).
   - Copies the distribution to `MingatGames.github.io/games/<game-id>/`.
   - Patches absolute paths (`/assets/` $\to$ `./assets/`) in `index.html` and `.js` bundles.
   - Copies required extra assets (such as 3D `.glb` models) if located outside `dist/`.

3. **Update Showcase Metadata (if applicable)**:
   - If game features or screenshots changed, update the corresponding card in `MingatGames.github.io/index.html`.
   - If a new banner was created, place it in `MingatGames.github.io/assets/img/`.

4. **Verify Locally**:
   ```bash
   cd /home/dalai/dev/MingatGames/MingatGames.github.io
   python3 -m http.server 8000
   # Open http://localhost:8000 and test the game in the in-browser player modal
   ```

5. **Commit and Push the Portal**:
   ```bash
   cd /home/dalai/dev/MingatGames/MingatGames.github.io
   git add .
   git commit -m "feat: sync latest build of <game-id>"
   git push origin main
   ```

---

### Scenario B: Introducing a New Game

When a new game repository is added to the `MingatGames` organization:

1. **Set Up the Game Repository**:
   - Ensure the game directory exists at `/home/dalai/dev/MingatGames/<new-game-id>`.
   - Ensure `package.json` has a standard `build` script (e.g. `"build": "vite build"`) producing a `dist/` folder, or that the game is a self-contained static HTML5/JS app.

2. **Deploy to the Showcase Portal**:
   ```bash
   cd /home/dalai/dev/MingatGames/MingatGames.github.io
   node scripts/deploy-game.js ../<new-game-id>
   ```

3. **Create Banner / Screenshot**:
   - Save a representative screenshot or SVG banner to `MingatGames.github.io/assets/img/<new-game-id>-banner.png` (or `.svg`).
   - Recommended dimensions: ~800x450 (16:9 ratio).

4. **Add Game Card to `index.html`**:
   In `MingatGames.github.io/index.html`, add a new card inside `#games-grid`:
   ```html
   <div class="game-card" data-category="<category-slugs>" data-title="<Game Title>">
     <div class="card-media">
       <img src="assets/img/<new-game-id>-banner.png" alt="<Game Title>" class="card-img" loading="lazy">
       <span class="card-badge play-badge">✨ Live Playable</span>
       <div class="card-overlay">
         <button class="btn-play-quick" data-play-url="games/<new-game-id>/" data-game-title="<Game Title>">
           <span class="play-icon">▶</span> Play in Browser
         </button>
       </div>
     </div>
     <div class="card-body">
       <div class="card-tags">
         <span class="tag tag-genre"><Genre></span>
         <span class="tag tag-tech"><Tech 1></span>
         <span class="tag tag-tech"><Tech 2></span>
       </div>
       <h3 class="card-title"><Game Title> <Emoji></h3>
       <p class="card-desc"><1-2 sentence description of gameplay>.</p>
       <div class="card-highlights">
         <span>✨ <Feature 1></span>
         <span>🎮 <Feature 2></span>
         <span>🌟 <Feature 3></span>
       </div>
       <div class="card-footer">
         <button class="btn btn-card-play" data-play-url="games/<new-game-id>/" data-game-title="<Game Title>">
           ▶ Play Now
         </button>
         <a href="https://github.com/MingatGames/<new-game-id>" target="_blank" rel="noopener noreferrer" class="btn btn-card-github" title="View Repository on GitHub">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 0C5.37 0 0 5.37 0 12..."/>
           </svg>
           <span>Code</span>
         </a>
       </div>
     </div>
   </div>
   ```

5. **Update Category Filters & Stats**:
   - If the new game introduces a new genre/category, add a `<button class="filter-pill" data-filter="<new-cat>">` in `#category-filters`.
   - Update the numbers in `.stats-row` (e.g. `6+` repos, `4` playable).

6. **Verify and Deploy**:
   ```bash
   cd /home/dalai/dev/MingatGames/MingatGames.github.io
   git add .
   git commit -m "feat: add <Game Title> to showcase and playable games"
   git push origin main
   ```

---

## 4. Technical Constraints & Pitfalls

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **White screen / 404 on assets** | Vite/Webpack built with root-relative paths (`/assets/`) | Always run `deploy-game.js` which converts `/assets/` to `./assets/`. Or set `base: './'` in `vite.config.js`. |
| **Jekyll build failure / missing files** | GitHub Pages defaults to Jekyll, which skips files with underscores (`_`) | Ensure `.nojekyll` exists in the root of `MingatGames.github.io`. |
| **Audio doesn't play** | Web Audio API requires a user interaction gesture | Ensure the game has a "Click to Play" / "Start Game" overlay to initialize `AudioContext`. |
| **WebGL context loss** | Multiple heavy 3D canvases running concurrently | When the modal player is closed, `main.js` resets `iframe.src = 'about:blank'` to release memory and GPU resources. |
| **Touch controls on mobile/iPad** | Default browser pinch-to-zoom / swipe navigation interfering | Games must use `touch-action: manipulation` or `touch-action: none` on canvases. |

---

## 5. Verification Commands for Agents

Run these checks after any modification:

```bash
# 1. Check HTTP response codes locally
cd /home/dalai/dev/MingatGames/MingatGames.github.io
python3 -m http.server 8123 &
PID=$!
curl -sI http://localhost:8123/index.html | head -n 1
curl -sI http://localhost:8123/games/<game-id>/index.html | head -n 1
kill $PID

# 2. Check GitHub Pages deployment status remotely
gh api repos/MingatGames/MingatGames.github.io/pages

# 3. Check live website response
curl -sI https://mingatgames.github.io/ | head -n 1
curl -sI https://mingatgames.github.io/games/<game-id>/ | head -n 1
```

---
*Maintained by the Mingat Games Team & AI Assistants.*
