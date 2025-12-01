
// Render project tiles on the homepage
const grid = document.getElementById('projectGrid');
if (grid && Array.isArray(PROJECTS)) {
  grid.innerHTML = PROJECTS.map(p => `
    <a class="tile" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="${p.title}">
      <img src="${p.cover}" alt="${p.title} cover" onerror="this.src='https://picsum.photos/seed/${p.id}/800/600';"/>
      <div class="tile-body">
        <div class="eyebrow">${p.year} • ${p.role}</div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="cta">Read more →</div>
      </div>
    </a>
  `).join('');
}
