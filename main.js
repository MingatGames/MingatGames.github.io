/**
 * MINGAT GAMES — Official Organization Showcase
 * Client-side Controller & Interactive Portal Shell
 */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundParticles();
  initCategoryFilters();
  initGameSearch();
  initGamePlayerModal();
});

/* ==========================================================================
   1. AMBIENT PARTICLES CANVAS
   ========================================================================== */
function initBackgroundParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const count = Math.min(Math.floor((width * height) / 18000), 75);
  const particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.6 + 0.2,
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(165, 180, 252, ${p.alpha})`;
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dist / 110) * 0.15})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. CATEGORY FILTERS
   ========================================================================== */
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('#category-filters .filter-pill');
  const cards = document.querySelectorAll('.game-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      applyFilters(filter, document.getElementById('game-search')?.value || '');
    });
  });
}

/* ==========================================================================
   3. GAME SEARCH
   ========================================================================== */
function initGameSearch() {
  const searchInput = document.getElementById('game-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activeFilterBtn = document.querySelector('#category-filters .filter-pill.active');
    const currentCategory = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    applyFilters(currentCategory, e.target.value.trim().toLowerCase());
  });
}

function applyFilters(category, query) {
  const cards = document.querySelectorAll('.game-card');
  const searchTerms = query.toLowerCase();

  cards.forEach((card) => {
    const cardCategories = (card.getAttribute('data-category') || '').toLowerCase();
    const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
    const cardText = card.textContent.toLowerCase();

    const matchesCategory = category === 'all' || cardCategories.includes(category);
    const matchesSearch = !searchTerms || cardTitle.includes(searchTerms) || cardText.includes(searchTerms);

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.3s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ==========================================================================
   4. IN-BROWSER GAME PLAYER MODAL
   ========================================================================== */
function initGamePlayerModal() {
  const modal = document.getElementById('game-player-modal');
  const iframe = document.getElementById('game-iframe');
  const titleEl = document.getElementById('player-active-title');
  const btnClose = document.getElementById('btn-close-player');
  const btnReload = document.getElementById('btn-reload-player');
  const btnFullscreen = document.getElementById('btn-fullscreen-player');
  const btnNewTab = document.getElementById('btn-newtab-player');

  if (!modal || !iframe) return;

  function openGame(url, title) {
    titleEl.textContent = title || 'Playing Game';
    const separator = url.includes('?') ? '&' : '?';
    const freshUrl = `${url}${separator}t=${Date.now()}`;
    iframe.src = freshUrl;
    if (btnNewTab) btnNewTab.href = freshUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeGame() {
    modal.classList.remove('active');
    iframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  // Bind all play buttons
  document.querySelectorAll('[data-play-url]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const playUrl = btn.getAttribute('data-play-url');
      const gameTitle = btn.getAttribute('data-game-title');
      if (playUrl) {
        openGame(playUrl, gameTitle);
      }
    });
  });

  if (btnClose) {
    btnClose.addEventListener('click', closeGame);
  }

  if (btnReload) {
    btnReload.addEventListener('click', () => {
      const current = iframe.src;
      if (current && current !== 'about:blank') {
        const base = current.split('?')[0];
        iframe.src = `${base}?t=${Date.now()}`;
      }
    });
  }

  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        modal.requestFullscreen().catch((err) => {
          console.warn('Fullscreen request failed:', err);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        closeGame();
      }
    }
  });
}
