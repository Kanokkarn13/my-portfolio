
// Project detail renderer
function byId(id){return document.getElementById(id)}
function qs(sel){return document.querySelector(sel)}
function getParam(name){return new URLSearchParams(window.location.search).get(name)}

const projId = getParam('id');
const container = byId('projectDetail');

function pill(tag){return `<span class="meta-pill">${tag}</span>`}

if (container) {
  const p = PROJECTS.find(x => x.id === projId) || PROJECTS[0];
  container.innerHTML = `
    <article>
      <figure class="project-cover">
        <img src="${p.cover}" alt="${p.title} cover" onerror="this.src='https://picsum.photos/seed/${p.id}/1200/800';" style="width:100%;display:block;"/>
      </figure>
      <header style="margin-top:1rem">
        <div class="eyebrow">${p.year} • ${p.role}</div>
        <h1 class="section-title" style="margin:.2rem 0 0">${p.title}</h1>
        <div class="project-meta">${(p.tags||[]).map(pill).join('')}</div>
      </header>
      <section class="prose">
        ${(p.body||[]).map(par => `<p>${par}</p>`).join('')}
      </section>
      <div class="link-row">
        ${(p.links||[]).map(l => `<a class="btn" target="_blank" rel="noopener" href="${l.href}">${l.label}</a>`).join('')}
        <a class="btn primary" href="index.html">← Back</a>
      </div>
    </article>
  `;
}
