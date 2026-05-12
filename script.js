/* ============================================================
   ENTRE RIOS – script.js
   Módulos: Dados, Acessibilidade, Navbar, Scroll Reveal,
            Carrossel, Tabs, Acordeão, Timeline, Partículas
   ============================================================ */

'use strict';

/* ============================================================
   1. DADOS – Arrays de objetos (edite aqui para mudar conteúdo)
   ============================================================ */

const STATS_DATA = [
  { number: '6.000',  label: 'habitantes' },
  { number: '6',      label: 'colônias' },
  { number: '1951',   label: 'ano de fundação' },
  { number: '70+',    label: 'anos de história' },
];

const CARDS_DATA = [
  {
    icon: '🌱',
    title: 'Plantio Direto',
    text: 'A AGRÁRIA foi pioneira no Brasil na adoção do sistema plantio direto, que conserva o solo, reduz a erosão e sequestra carbono.',
    tag: 'Solo',
  },
  {
    icon: '💧',
    title: 'Gestão de Recursos Hídricos',
    text: 'Corredores de vegetação nativa protegem nascentes e rios. O uso racional da água é monitorado em toda a cadeia produtiva.',
    tag: 'Água',
  },
  {
    icon: '☀️',
    title: 'Energia Renovável',
    text: 'Painéis solares e biodigestores transformam resíduos agrícolas em energia limpa, reduzindo a pegada de carbono das operações.',
    tag: 'Energia',
  },
  {
    icon: '🌾',
    title: 'Agricultura de Precisão',
    text: 'Tecnologia de sensoriamento remoto e drones orientam a aplicação de insumos, evitando desperdício e aumentando a eficiência.',
    tag: 'Tecnologia',
  },
  {
    icon: '🌳',
    title: 'Reflorestamento',
    text: 'Mais de 3.000 hectares de matas nativas foram restaurados ao longo dos afluentes do Rio Jordão, preservando a biodiversidade.',
    tag: 'Biodiversidade',
  },
  {
    icon: '🤝',
    title: 'Economia Solidária',
    text: 'A cooperativa distribui resultados entre os associados, investe em educação e mantém serviços de saúde para toda a comunidade.',
    tag: 'Comunidade',
  },
];

const CAROUSEL_DATA = [
  {
    icon: '🌅',
    bg: 'linear-gradient(135deg,#c8973a,#8a6835)',
    title: 'Colheita do Trigo',
    caption: 'Julho – Colônia Vitória · As colheitadeiras atravessam hectares de ouro.',
  },
  {
    icon: '🏘️',
    bg: 'linear-gradient(135deg,#3a5c3e,#6b9c6f)',
    title: 'Arquitetura Suábia',
    caption: 'Casas enxaimel preservam a identidade arquitetônica dos imigrantes.',
  },
  {
    icon: '🎶',
    bg: 'linear-gradient(135deg,#4a3520,#7a5c44)',
    title: 'Festival Cultural',
    caption: 'Outubro Fest – danças, gastronomia e música trazem a Suábia ao Paraná.',
  },
  {
    icon: '🏭',
    bg: 'linear-gradient(135deg,#2e4a3e,#3a5c3e)',
    title: 'Moagem AGRÁRIA',
    caption: 'Farinha de trigo produzida na região abastece o Sul do Brasil.',
  },
  {
    icon: '🌲',
    bg: 'linear-gradient(135deg,#1a3a1e,#3a5c3e)',
    title: 'Reserva de Mata Ciliar',
    caption: 'Corredores ecológicos conectam fragmentos de Floresta com Araucária.',
  },
];

const PILLARS_DATA = [
  {
    id: 'pilar-1',
    label: '🌾 Agricultura',
    icon: '🌾',
    title: 'Excelência Agrícola',
    text: 'Entre Rios é uma das maiores produtoras de trigo do Brasil. A AGRÁRIA introduziu variedades adaptadas ao clima subtropical, combinando genética avançada com o respeito à rotação de culturas e à saúde do solo.',
  },
  {
    id: 'pilar-2',
    label: '🏫 Educação',
    icon: '🏫',
    title: 'Educação de Qualidade',
    text: 'A Fundação Educacional de Entre Rios (FUNDETEC) opera escolas de ensino fundamental ao técnico, formando jovens agricultores com visão de mundo global e raízes locais.',
  },
  {
    id: 'pilar-3',
    label: '🌿 Meio Ambiente',
    icon: '🌿',
    title: 'Compromisso Ambiental',
    text: 'Desde a década de 1970, Entre Rios investe em preservação ambiental. Hoje, mais de 30% de sua área é coberta por vegetação nativa, superando exigências do Código Florestal.',
  },
  {
    id: 'pilar-4',
    label: '🎭 Cultura',
    icon: '🎭',
    title: 'Identidade Cultural',
    text: 'As festas tradicionais, a gastronomia suábia, a arquitetura enxaimel e o dialeto dos mais velhos mantêm viva a memória de um povo que reconstruiu sua vida em terras paranaenses.',
  },
];

const TIMELINE_DATA = [
  {
    year: '1945–1950',
    title: 'A diáspora suábia',
    text: 'Com o fim da Segunda Guerra, cerca de 4.500 famílias suábias são expulsas do leste europeu. Após anos em campos de refugiados na Alemanha Ocidental, negociam com o governo brasileiro a vinda ao Paraná.',
  },
  {
    year: '1951',
    title: 'Chegada e fundação',
    text: 'Em 26 de março, os primeiros colonos chegam à região de Guarapuava. Encontram mata fechada e precisam abrir caminhos, construir casas e preparar a terra antes do inverno.',
  },
  {
    year: '1959',
    title: 'Criação da AGRÁRIA',
    text: 'A Cooperativa Agrária Mista Entre Rios Ltda. é fundada para organizar a produção, comercialização e beneficiamento dos produtos agrícolas, especialmente o trigo.',
  },
  {
    year: '1970s',
    title: 'Revolução do plantio direto',
    text: 'Técnicos da AGRÁRIA e agricultores locais pioneiram o sistema plantio direto no Brasil, técnica que hoje está presente em 35 milhões de hectares no país.',
  },
  {
    year: '1990s',
    title: 'Diversificação produtiva',
    text: 'A cooperativa expande para cevada (abastecendo cervejarias), malte, aves e suínos, consolidando Entre Rios como polo agroindustrial completo.',
  },
  {
    year: '2000s–hoje',
    title: 'Era da sustentabilidade',
    text: 'Certificações internacionais, energia renovável, agricultura de precisão e programas de educação ambiental posicionam Entre Rios como referência global em agropecuária sustentável.',
  },
];

const ACCORDION_DATA = [
  {
    id: 'acc-1',
    title: '🏠 Arquitetura enxaimel',
    content: 'As casas de enxaimel (Fachwerkhaus) trazidas da Europa central distinguem as colônias de Entre Rios. Com estruturas de madeira expostas preenchidas por tijolos, o estilo sobreviveu e se adapta ao clima paranaense, sendo hoje patrimônio arquitetônico da região.',
  },
  {
    id: 'acc-2',
    title: '🥘 Gastronomia suábia',
    content: 'Pratos como Schnitzel, Maultaschen (espécie de ravióli), Sauerkraut (chucrute artesanal) e Strudel convivem com a culinária paranaense, criando uma fusão única. Nos festivais, vinhos artesanais e cervejas produzidas localmente completam a mesa.',
  },
  {
    id: 'acc-3',
    title: '🎵 Música e dança',
    content: 'Os grupos de dança folclórica mantêm vivos os Ländler e as Polkas suábias. Instrumentos como o acordeão e o tuba integram bandas comunitárias que se apresentam nos festivais culturais anuais.',
  },
  {
    id: 'acc-4',
    title: '📚 Idioma e memória',
    content: 'O "Donauschwäbisch" (dialeto suábio do Danúbio) ainda é falado pelas gerações mais antigas. Projetos de salvaguarda documentam esse patrimônio linguístico imaterial, com publicações bilíngues e acervos de história oral.',
  },
];

const TECH_CARDS_DATA = [
  { icon: '📄', title: 'HTML5 Semântico', text: 'Tags semânticas e atributos ARIA para máxima acessibilidade e SEO.', tag: 'Estrutura' },
  { icon: '🎨', title: 'CSS3 Moderno', text: 'Variables, Grid, Flexbox, animações, mobile-first e alto contraste.', tag: 'Design' },
  { icon: '⚙️', title: 'JavaScript ES6+', text: 'Módulos, array methods, DOM dinâmico, Intersection Observer API.', tag: 'Lógica' },
  { icon: '♿', title: 'Acessibilidade WCAG', text: 'Foco visível, ARIA roles, labels e controles de fonte e contraste.', tag: 'A11y' },
  { icon: '📱', title: 'Design Responsivo', text: 'Layout adaptável a mobile, tablet e desktop com breakpoints claros.', tag: 'UX' },
  { icon: '🚀', title: 'Zero dependências', text: 'Sem frameworks externos – HTML, CSS e JS puros para máxima performance.', tag: 'Performance' },
];

/* ============================================================
   2. UTILITÁRIOS
   ============================================================ */

/** Cria elemento com atributos e innerHTML opcionais */
function createElement(tag, attrs = {}, innerHTML = '') {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

/** Seleciona elemento, retorna null sem erro */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   3. ACESSIBILIDADE – Tamanho de fonte e alto contraste
   ============================================================ */
(function initA11y() {
  // Estado salvo no localStorage para persistir entre páginas
  const FONT_KEY    = 'er_fontSize';
  const CONTRAST_KEY = 'er_contrast';

  let fontLevel = parseInt(localStorage.getItem(FONT_KEY) || '0', 10);
  const FONT_STEP  = 2;    // px por clique
  const FONT_MIN   = -4;   // -4px do padrão
  const FONT_MAX   = 8;    // +8px do padrão
  const BASE_SIZE  = 16;   // px base do :root

  function applyFont() {
    document.documentElement.style.fontSize = (BASE_SIZE + fontLevel) + 'px';
    localStorage.setItem(FONT_KEY, fontLevel);
  }

  function applyContrast() {
    const on = localStorage.getItem(CONTRAST_KEY) === '1';
    document.body.classList.toggle('high-contrast', on);
  }

  applyFont();
  applyContrast();

  // Botões
  const btnInc = $('#btn-font-inc');
  const btnDec = $('#btn-font-dec');
  const btnCon = $('#btn-contrast');

  btnInc && btnInc.addEventListener('click', () => {
    if (fontLevel < FONT_MAX) { fontLevel += FONT_STEP; applyFont(); }
  });

  btnDec && btnDec.addEventListener('click', () => {
    if (fontLevel > FONT_MIN) { fontLevel -= FONT_STEP; applyFont(); }
  });

  btnCon && btnCon.addEventListener('click', () => {
    const on = document.body.classList.toggle('high-contrast');
    localStorage.setItem(CONTRAST_KEY, on ? '1' : '0');
  });
})();

/* ============================================================
   4. NAVBAR – Toggle mobile + scroll shadow
   ============================================================ */
(function initNavbar() {
  const toggle = $('#nav-toggle');
  const nav    = $('#nav-menu');
  const navbar = $('.navbar');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });

    // Fecha menu ao clicar em link
    $$('.nav__link', nav).forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });

    // Fecha com ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        toggle.focus();
      }
    });
  }

  // Sombra na navbar ao rolar
  if (navbar) {
    const observer = new IntersectionObserver(
      ([entry]) => navbar.classList.toggle('scrolled', !entry.isIntersecting),
      { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
    );
    const sentinel = createElement('div', { style: 'height:1px;position:absolute;top:0;left:0;right:0;' });
    document.body.prepend(sentinel);
    observer.observe(sentinel);
  }
})();

/* ============================================================
   5. SCROLL REVEAL – Intersection Observer
   ============================================================ */
(function initScrollReveal() {
  const reveals = $$('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // só anima uma vez
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

  reveals.forEach(el => observer.observe(el));
})();

/* ============================================================
   6. PARTÍCULAS DE TRIGO (hero)
   ============================================================ */
(function initParticles() {
  const container = $('#hero-particles');
  if (!container) return;

  const EMOJIS = ['🌾', '✦', '·'];
  const COUNT  = 18;

  for (let i = 0; i < COUNT; i++) {
    const p = createElement('span', { class: 'wheat-particle', 'aria-hidden': 'true' });
    p.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    p.style.setProperty('--dur',   `${6 + Math.random() * 8}s`);
    p.style.setProperty('--delay', `${Math.random() * 12}s`);
    p.style.left  = `${Math.random() * 100}%`;
    p.style.bottom = `${Math.random() * 20}%`;
    container.appendChild(p);
  }
})();

/* ============================================================
   7. STATS – Renderização dinâmica
   ============================================================ */
(function renderStats() {
  const container = $('#stats-container');
  if (!container) return;

  STATS_DATA.forEach(stat => {
    const item = createElement('div', { class: 'stat-item', role: 'listitem' });
    item.innerHTML = `
      <span class="stat-number" aria-label="${stat.number} ${stat.label}">${stat.number}</span>
      <span class="stat-label" aria-hidden="true">${stat.label}</span>
    `;
    container.appendChild(item);
  });
})();

/* ============================================================
   8. CARDS DE SUSTENTABILIDADE – Renderização dinâmica
   ============================================================ */
(function renderCards() {
  // index.html – cards de sustentabilidade
  const sustContainer = $('#cards-container');
  if (sustContainer) {
    CARDS_DATA.forEach(card => {
      sustContainer.appendChild(buildCard(card));
    });
  }

  // autor.html – cards de tecnologias
  const techContainer = $('#tech-cards');
  if (techContainer) {
    TECH_CARDS_DATA.forEach(card => {
      techContainer.appendChild(buildCard(card));
    });
  }

  function buildCard({ icon, title, text, tag }) {
    const el = createElement('article', { class: 'card', role: 'listitem' });
    el.innerHTML = `
      <div class="card__icon" aria-hidden="true">${icon}</div>
      <h3 class="card__title">${title}</h3>
      <p class="card__text">${text}</p>
      <span class="card__tag">${tag}</span>
    `;
    return el;
  }
})();

/* ============================================================
   9. TABS (Pilares) – index.html
   ============================================================ */
(function initTabs() {
  const btnContainer   = $('#tab-buttons');
  const panelContainer = $('#tab-panels');
  if (!btnContainer || !panelContainer) return;

  // Renderiza botões e painéis a partir dos dados
  PILLARS_DATA.forEach((pilar, i) => {
    // Botão
    const btn = createElement('button', {
      class:           `tab-btn${i === 0 ? ' active' : ''}`,
      role:            'tab',
      'aria-selected': i === 0 ? 'true' : 'false',
      'aria-controls': pilar.id,
      id:              `${pilar.id}-tab`,
    }, pilar.label);
    btnContainer.appendChild(btn);

    // Painel
    const panel = createElement('div', {
      id:               pilar.id,
      class:            `tab-panel${i === 0 ? ' active' : ''}`,
      role:             'tabpanel',
      'aria-labelledby': `${pilar.id}-tab`,
      tabindex:         '0',
    });
    panel.innerHTML = `
      <div class="tab-panel__inner">
        <div class="tab-panel__icon" aria-hidden="true">${pilar.icon}</div>
        <div>
          <h3 class="tab-panel__title">${pilar.title}</h3>
          <p class="tab-panel__text">${pilar.text}</p>
        </div>
      </div>
    `;
    panelContainer.appendChild(panel);
  });

  // Interatividade
  const buttons = $$('.tab-btn', btnContainer);

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => activateTab(i));

    // Navegação por teclado (setas)
    btn.addEventListener('keydown', e => {
      let target = -1;
      if (e.key === 'ArrowRight') target = (i + 1) % buttons.length;
      if (e.key === 'ArrowLeft')  target = (i - 1 + buttons.length) % buttons.length;
      if (target >= 0) { buttons[target].focus(); activateTab(target); }
    });
  });

  function activateTab(index) {
    buttons.forEach((b, i) => {
      b.classList.toggle('active', i === index);
      b.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    $$('.tab-panel', panelContainer).forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
  }
})();

/* ============================================================
   10. CARROSSEL
   ============================================================ */
(function initCarousel() {
  const track      = $('#carousel-track');
  const dotsEl     = $('#carousel-dots');
  const prevBtn    = $('#carousel-prev');
  const nextBtn    = $('#carousel-next');
  if (!track) return;

  let current  = 0;
  let autoTimer = null;
  const VISIBLE = getVisibleCount(); // slides visíveis por vez

  // Renderiza slides
  CAROUSEL_DATA.forEach((slide, i) => {
    const el = createElement('div', {
      class: 'carousel__slide',
      role:  'group',
      'aria-label': `Slide ${i + 1} de ${CAROUSEL_DATA.length}: ${slide.title}`,
      'aria-roledescription': 'slide',
    });
    el.innerHTML = `
      <div class="carousel__img-wrap">
        <div class="carousel__img-placeholder" style="background:${slide.bg}" role="img" aria-label="${slide.title}">
          <span style="font-size:4rem" aria-hidden="true">${slide.icon}</span>
          <span style="font-family:var(--font-display);color:#fff;font-size:1.2rem;font-weight:600;">${slide.title}</span>
        </div>
      </div>
      <p class="carousel__caption">${slide.caption}</p>
    `;
    track.appendChild(el);
  });

  // Renderiza dots
  CAROUSEL_DATA.forEach((_, i) => {
    const dot = createElement('button', {
      class: `carousel__dot${i === 0 ? ' active' : ''}`,
      role:  'tab',
      'aria-label': `Ir para slide ${i + 1}`,
      'aria-selected': i === 0 ? 'true' : 'false',
    });
    dot.addEventListener('click', () => goTo(i));
    dotsEl && dotsEl.appendChild(dot);
  });

  function getVisibleCount() {
    return window.innerWidth >= 960 ? 3 : 1;
  }

  function goTo(index) {
    const max = CAROUSEL_DATA.length - getVisibleCount();
    current = Math.max(0, Math.min(index, max));
    track.style.transform = `translateX(-${current * (100 / getVisibleCount())}%)`;
    updateDots();
    updateAriaLive();
  }

  function updateDots() {
    const dots = $$('.carousel__dot', dotsEl);
    dots.forEach((d, i) => {
      const active = i === current;
      d.classList.toggle('active', active);
      d.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function updateAriaLive() {
    const region = $('.carousel');
    if (region) region.setAttribute('aria-label', `Carrossel – slide ${current + 1} de ${CAROUSEL_DATA.length}`);
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo((current + 1) % CAROUSEL_DATA.length), 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  prevBtn && prevBtn.addEventListener('click', () => { goTo(current - 1); stopAuto(); });
  nextBtn && nextBtn.addEventListener('click', () => { goTo(current + 1); stopAuto(); });

  // Pausa no hover
  const carousel = $('.carousel');
  carousel && carousel.addEventListener('mouseenter', stopAuto);
  carousel && carousel.addEventListener('mouseleave', startAuto);

  // Swipe (touch)
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goTo(current + 1) : goTo(current - 1);
    stopAuto();
  });

  // Responsividade
  window.addEventListener('resize', () => goTo(current));

  startAuto();
})();

/* ============================================================
   11. ACORDEÃO – historia.html
   ============================================================ */
(function initAccordion() {
  const container = $('#accordion-container');
  if (!container) return;

  ACCORDION_DATA.forEach((item, i) => {
    const el = createElement('div', { class: 'accordion__item reveal', role: 'listitem' });
    el.innerHTML = `
      <button
        class="accordion__trigger"
        id="${item.id}-btn"
        aria-expanded="${i === 0 ? 'true' : 'false'}"
        aria-controls="${item.id}-panel"
      >
        ${item.title}
        <em class="accordion__icon" aria-hidden="true">+</em>
      </button>
      <div
        id="${item.id}-panel"
        class="accordion__panel"
        role="region"
        aria-labelledby="${item.id}-btn"
        aria-hidden="${i === 0 ? 'false' : 'true'}"
      >
        ${item.content}
      </div>
    `;
    container.appendChild(el);
  });

  // Abre o primeiro por padrão
  const firstPanel = container.querySelector('.accordion__panel');
  if (firstPanel) firstPanel.style.display = 'block';

  // Interatividade
  $$('.accordion__trigger', container).forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panelId  = btn.getAttribute('aria-controls');
      const panel    = document.getElementById(panelId);

      // Fecha todos (comportamento accordion)
      $$('.accordion__trigger', container).forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const p = document.getElementById(b.getAttribute('aria-controls'));
        if (p) { p.style.display = 'none'; p.setAttribute('aria-hidden', 'true'); }
      });

      // Abre o clicado (toggle)
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        if (panel) { panel.style.display = 'block'; panel.setAttribute('aria-hidden', 'false'); }
      }
    });
  });
})();

/* ============================================================
   12. TIMELINE – historia.html
   ============================================================ */
(function renderTimeline() {
  const list = $('#timeline-list');
  if (!list) return;

  TIMELINE_DATA.forEach((item, i) => {
    const li = createElement('li', {
      class: 'timeline__item',
      style: `animation-delay:${i * 120}ms`,
    });
    li.innerHTML = `
      <time class="timeline__year" datetime="${item.year}">${item.year}</time>
      <h3 class="timeline__title">${item.title}</h3>
      <p class="timeline__text">${item.text}</p>
    `;
    list.appendChild(li);
  });
})();

