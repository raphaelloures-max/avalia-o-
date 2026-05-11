/**
 * ENTRE RIOS — script.js
 * ========================
 * ÍNDICE:
 * 1.  DATA STORE (todos os dados do site)
 * 2.  ACESSIBILIDADE (fonte + contraste)
 * 3.  NAVEGAÇÃO (header + scroll + mobile)
 * 4.  SCROLL REVEAL
 * 5.  RENDERIZAÇÃO: Stats
 * 6.  RENDERIZAÇÃO: Galeria / Carrossel
 * 7.  RENDERIZAÇÃO: Cards de Pilares
 * 8.  RENDERIZAÇÃO: Timeline
 * 9.  RENDERIZAÇÃO: Acordeão
 * 10. RENDERIZAÇÃO: Infográfico
 * 11. RENDERIZAÇÃO: Abas do Autor
 * 12. RENDERIZAÇÃO: Referências
 * 13. MINI JOGO (Quiz)
 * 14. INIT
 */


/* =====================================================
   1. DATA STORE
   → Edite os objetos abaixo para mudar conteúdos
   ===================================================== */
const data = {

  // --- Cards de estatísticas (Página 1) ---
  stats: [
    { number: '1951', label: 'Ano de fundação' },
    { number: '7',    label: 'Subcomunidades' },
    { number: '95%',  label: 'Área agrícola' },
    { number: '40k',  label: 'Ha cultivados' },
  ],

  // --- Galeria / Carrossel (Página 1) ---
  gallery: [
    {
      emoji: '🌾',
      bgColor: '#2d1f0a',
      gradientFrom: '#3d2b0f',
      gradientTo: '#1a1208',
      category: 'Agricultura',
      title: 'Lavouras de Soja',
      desc: 'Entre Rios é referência nacional no cultivo de soja com manejo conservacionista do solo.',
    },
    {
      emoji: '🌽',
      bgColor: '#1e3a1e',
      gradientFrom: '#2d5a27',
      gradientTo: '#0d1f0d',
      category: 'Grãos',
      title: 'Milho e Rotação',
      desc: 'A rotação de culturas entre milho, trigo e soja preserva a fertilidade natural do solo paranaense.',
    },
    {
      emoji: '🎪',
      bgColor: '#3a1a0a',
      gradientFrom: '#5c3a1e',
      gradientTo: '#1a0a04',
      category: 'Cultura',
      title: 'Festa Suábia',
      desc: 'Anualmente a Festa do Colono celebra a herança alemã com gastronomia típica, música e danças folclóricas.',
    },
    {
      emoji: '🏞️',
      bgColor: '#0a1e2d',
      gradientFrom: '#1a3a5c',
      gradientTo: '#040d1a',
      category: 'Paisagem',
      title: 'Campos do Planalto',
      desc: 'O terceiro planalto paranaense oferece solos férteis de origem basáltica, ideais para a agricultura.',
    },
    {
      emoji: '🐄',
      bgColor: '#1a2d0a',
      gradientFrom: '#2a4a1a',
      gradientTo: '#0a1a04',
      category: 'Pecuária',
      title: 'Produção Leiteira',
      desc: 'A integração lavoura-pecuária é marca registrada das propriedades familiares da colônia.',
    },
    {
      emoji: '🌿',
      bgColor: '#0d1a0a',
      gradientFrom: '#1e3a1e',
      gradientTo: '#040d04',
      category: 'Sustentabilidade',
      title: 'Reflorestamento',
      desc: 'Programas de recuperação de matas ciliares protegem os rios Jordão e Piquiri na região.',
    },
  ],

  // --- Pilares temáticos (Página 1) ---
  pilares: [
    {
      icon: '🌱',
      title: 'Agricultura Familiar',
      text: 'Pequenas e médias propriedades estruturam a base produtiva de Entre Rios, combinando tradição suábia com tecnologia moderna.',
    },
    {
      icon: '🤝',
      title: 'Cooperativismo',
      text: 'A AGRÁRIA, cooperativa centenária, organiza a produção, armazenagem e comercialização dos grãos da colônia.',
    },
    {
      icon: '💧',
      title: 'Recursos Hídricos',
      text: 'Situado entre os rios Jordão e Piquiri, o distrito cuida ativamente da preservação das nascentes e matas ciliares.',
    },
    {
      icon: '🏛️',
      title: 'Identidade Cultural',
      text: 'A gastronomia, o dialeto e as festas folclóricas mantêm viva a herança dos imigrantes alemães do século XX.',
    },
    {
      icon: '📚',
      title: 'Educação Rural',
      text: 'Escolas comunitárias e programas de extensão rural formam jovens agricultores comprometidos com a sustentabilidade.',
    },
    {
      icon: '🔬',
      title: 'Inovação Agrícola',
      text: 'Parceria com IAPAR e Embrapa desenvolvem variedades adaptadas ao clima subtropical do planalto paranaense.',
    },
  ],

  // --- Linha do tempo (Página 2) ---
  timeline: [
    {
      year: '1951',
      title: 'Fundação da Colônia',
      text: 'Cerca de 800 famílias de imigrantes suábios do Danúbio chegam ao Paraná e fundam o distrito de Entre Rios em terras concedidas pelo governo estadual.',
    },
    {
      year: '1952',
      title: 'Criação da Cooperativa',
      text: 'Nasce a Cooperativa Agrária Mista Entre Rios (AGRÁRIA), instrumento central para organizar a produção e garantir mercado aos colonos.',
    },
    {
      year: '1960s',
      title: 'Modernização das Lavouras',
      text: 'Introdução da mecanização agrícola e do cultivo de soja, transformando campos nativos em áreas de alta produtividade.',
    },
    {
      year: '1975',
      title: 'Plantio Direto Pioneiro',
      text: 'Entre Rios torna-se um dos primeiros territórios do Brasil a adotar o sistema de plantio direto, revolucionando a conservação do solo.',
    },
    {
      year: '1990s',
      title: 'Programas Ambientais',
      text: 'Início de programas sistemáticos de reflorestamento, recuperação de matas ciliares e gestão dos recursos hídricos.',
    },
    {
      year: '2000s',
      title: 'Certificações e Qualidade',
      text: 'A AGRÁRIA conquista certificações internacionais de qualidade e sustentabilidade, abrindo mercados para exportação de grãos e malte.',
    },
    {
      year: 'Hoje',
      title: 'Referência em Sustentabilidade',
      text: 'Entre Rios é reconhecida como modelo de integração entre produtividade agrícola, preservação ambiental e manutenção da identidade cultural.',
    },
  ],

  // --- Acordeão de sustentabilidade (Página 2) ---
  acordeao: [
    {
      icon: '🌍',
      title: 'Plantio Direto e Conservação do Solo',
      tags: ['Carbono', 'Erosão Zero', 'Microbiologia'],
      text: [
        'O sistema de plantio direto, praticado há mais de 40 anos em Entre Rios, mantém a palha sobre o solo, reduzindo a erosão em até 90%. Esta técnica sequestra carbono e mantém a umidade do solo, reduzindo a necessidade de irrigação.',
        'A cobertura permanente do solo com resíduos vegetais cria um ambiente rico em matéria orgânica, favorecendo a atividade de minhocas e microrganismos que naturalmente fertilizam a terra.',
      ],
    },
    {
      icon: '💧',
      title: 'Gestão de Recursos Hídricos',
      tags: ['Matas Ciliares', 'Nascentes', 'APPs'],
      text: [
        'A localização estratégica entre os rios Jordão e Piquiri exige cuidado permanente com a qualidade da água. Programas de recuperação de Áreas de Preservação Permanente (APPs) protegem as margens dos cursos d\'água.',
        'Sistemas de monitoramento da qualidade da água e de controle de uso de agroquímicos nas proximidades de rios são adotados por toda a cadeia cooperativada.',
      ],
    },
    {
      icon: '🔄',
      title: 'Rotação de Culturas e Biodiversidade',
      tags: ['Soja', 'Trigo', 'Milho', 'Aveia'],
      text: [
        'A rotação sistemática entre soja, milho, trigo e aveia quebra ciclos de pragas e doenças naturalmente, reduzindo o uso de defensivos. Esta diversidade de cultivos também suporta maior diversidade de insetos benéficos e polinizadores.',
        'Corredores ecológicos entre propriedades e a manutenção de reservas legais acima do mínimo legal favorecem a fauna silvestre e os serviços ecossistêmicos da região.',
      ],
    },
    {
      icon: '♻️',
      title: 'Gestão de Resíduos e Embalagens',
      tags: ['Embalagens Vazias', 'Logística Reversa', 'ISO 14001'],
      text: [
        'A AGRÁRIA coordena um sistema exemplar de logística reversa de embalagens de agroquímicos. As embalagens são lavadas, devolvidas aos postos de coleta e destinadas à reciclagem, evitando contaminação do solo e da água.',
        'Programas de compostagem de resíduos orgânicos e reutilização de materiais constroem uma economia circular dentro da própria colônia.',
      ],
    },
    {
      icon: '☀️',
      title: 'Energia Renovável',
      tags: ['Solar', 'Biomassa', 'Eficiência'],
      text: [
        'O complexo industrial da AGRÁRIA utiliza biomassa (casca de arroz, palha de trigo) para geração de energia térmica nos processos de secagem de grãos, reduzindo a dependência de combustíveis fósseis.',
        'Painéis fotovoltaicos instalados em armazéns e instalações da cooperativa geram energia limpa e demonstram o compromisso com a transição energética no campo.',
      ],
    },
  ],

  // --- Infográfico do Ciclo Sustentável (Página 2) ---
  infografico: [
    {
      step: '01',
      icon: '🌱',
      title: 'Plantio Conservacionista',
      desc: 'Sementes de alta qualidade em solo coberto por palha, sem revolvimento.',
    },
    {
      step: '02',
      icon: '🌿',
      title: 'Crescimento Monitorado',
      desc: 'Agricultura de precisão, drones e sensores orientam aplicações racionais.',
    },
    {
      step: '03',
      icon: '🌾',
      title: 'Colheita e Armazenagem',
      desc: 'Colheita mecanizada e secagem com biomassa nos silos cooperativados.',
    },
    {
      step: '04',
      icon: '♻️',
      title: 'Retorno ao Solo',
      desc: 'Palha e resíduos retornam como cobertura, reiniciando o ciclo sustentável.',
    },
  ],

  // --- Abas do Autor (Página 4) ---
  autorTabs: [
    {
      id: 'sobre',
      label: 'Sobre o Projeto',
      content: `
        <p>Este site foi criado como projeto educacional interdisciplinar, unindo <strong>educação ambiental, história regional e tecnologia</strong>. O objetivo é difundir o conhecimento sobre Entre Rios para estudantes, pesquisadores e visitantes interessados na história da colonização e nas práticas agrícolas sustentáveis do sul do Brasil.</p>
        <p>O projeto busca valorizar a memória dos imigrantes suábios e sua contribuição para o desenvolvimento agrário do Paraná, ao mesmo tempo que documenta os avanços em sustentabilidade conquistados ao longo de mais de 70 anos de história.</p>
        <div class="skills-list">
          <span class="skill-tag">Educação Ambiental</span>
          <span class="skill-tag">História Regional</span>
          <span class="skill-tag">Agricultura Sustentável</span>
          <span class="skill-tag">Cultura Suábia</span>
          <span class="skill-tag">Cooperativismo</span>
        </div>
      `,
    },
    {
      id: 'metodologia',
      label: 'Metodologia',
      content: `
        <p>A pesquisa foi realizada com base em levantamento bibliográfico, consulta a documentos históricos da AGRÁRIA, visitas técnicas à região e entrevistas com agricultores e lideranças comunitárias de Entre Rios.</p>
        <p>As informações ambientais foram cruzadas com dados do IBGE, IPARDES e relatórios de sustentabilidade da Cooperativa Agrária. A linha do tempo foi validada com registros do Arquivo Público do Paraná e publicações do IAPAR.</p>
        <div class="skills-list">
          <span class="skill-tag">Pesquisa Bibliográfica</span>
          <span class="skill-tag">Entrevistas</span>
          <span class="skill-tag">Dados IBGE/IPARDES</span>
          <span class="skill-tag">Visitas Técnicas</span>
        </div>
      `,
    },
    {
      id: 'contato',
      label: 'Contato',
      content: `
        <p>Este é um projeto acadêmico aberto. Caso tenha sugestões, correções ou queira colaborar com informações sobre Entre Rios, entre em contato.</p>
        <ul class="contact-list">
          <li class="contact-item"><span class="contact-icon">📧</span> projeto.entrerios@email.com</li>
          <li class="contact-item"><span class="contact-icon">🏫</span> Escola / Instituição de Ensino</li>
          <li class="contact-item"><span class="contact-icon">📍</span> Guarapuava, Paraná, Brasil</li>
          <li class="contact-item"><span class="contact-icon">📅</span> Projeto desenvolvido em 2025</li>
        </ul>
      `,
    },
  ],

  // --- Referências bibliográficas (Página 4) ---
  referencias: [
    {
      title: 'COOPERATIVA AGRÁRIA MISTA ENTRE RIOS LTDA.',
      citation: 'Relatório de Sustentabilidade 2022–2023. Guarapuava: AGRÁRIA, 2023.',
    },
    {
      title: 'WACHOWICZ, Ruy Christovam.',
      citation: 'História do Paraná. 2. ed. Curitiba: Gráfica Vicentina, 1988.',
    },
    {
      title: 'IBGE — Instituto Brasileiro de Geografia e Estatística.',
      citation: 'Censo Agropecuário 2017. Rio de Janeiro: IBGE, 2019.',
    },
    {
      title: 'IAPAR — Instituto Agronômico do Paraná.',
      citation: 'Plantio Direto no Paraná: história e evolução. Londrina: IAPAR, 2015.',
    },
    {
      title: 'EMBRAPA Soja.',
      citation: 'Tecnologias de produção de soja – Região Central do Brasil 2022. Londrina: Embrapa Soja, 2021.',
    },
    {
      title: 'IPARDES — Instituto Paranaense de Desenvolvimento Econômico e Social.',
      citation: 'Caderno estatístico: município de Guarapuava. Curitiba: IPARDES, 2023.',
    },
  ],

  // --- Perguntas do Quiz (Página 3) ---
  quiz: [
    {
      question: 'Em que ano o distrito de Entre Rios foi fundado por imigrantes suábios?',
      answers: ['1935', '1945', '1951', '1960'],
      correct: 2,
      explanation: 'Entre Rios foi fundada em 1951, quando cerca de 800 famílias de imigrantes alemães da região do Danúbio (Suábia) chegaram ao Paraná.',
    },
    {
      question: 'Entre quais rios está localizado o distrito de Entre Rios?',
      answers: ['Iguaçu e Paraná', 'Jordão e Piquiri', 'Ivaí e Tibagi', 'Piquiri e Iguaçu'],
      correct: 1,
      explanation: 'O distrito está situado entre os rios Jordão e Piquiri, no terceiro planalto paranaense.',
    },
    {
      question: 'Qual cooperativa organiza a produção agrícola de Entre Rios?',
      answers: ['COAMO', 'COPACOL', 'AGRÁRIA', 'COCAMAR'],
      correct: 2,
      explanation: 'A Cooperativa Agrária Mista Entre Rios (AGRÁRIA) foi fundada em 1952 e é o principal elo econômico da colônia.',
    },
    {
      question: 'Qual sistema agrícola pioneiro foi adotado em Entre Rios na década de 1970?',
      answers: ['Agroflorestas', 'Plantio Direto', 'Cultivo Orgânico', 'Hidroponia'],
      correct: 1,
      explanation: 'O Plantio Direto, que mantém a palha sobre o solo sem revolvimento, foi adotado pioneiramente em Entre Rios por volta de 1975.',
    },
    {
      question: 'De qual região da Europa vieram os imigrantes fundadores de Entre Rios?',
      answers: ['Itália do Norte', 'Alsácia, França', 'Suábia (Danúbio), Alemanha', 'Baviera, Alemanha'],
      correct: 2,
      explanation: 'Os fundadores são descendentes de alemães da região da Suábia, às margens do rio Danúbio, conhecidos como "Donauschwaben" (suábios do Danúbio).',
    },
    {
      question: 'Qual benefício ambiental direto o Plantio Direto proporciona ao solo?',
      answers: ['Elimina todos os agroquímicos', 'Reduz a erosão em até 90%', 'Aumenta a acidez do solo', 'Elimina a necessidade de rotação'],
      correct: 1,
      explanation: 'A cobertura permanente do solo com palha no sistema de Plantio Direto reduz a erosão hídrica em até 90%, além de reter umidade e sequestrar carbono.',
    },
    {
      question: 'Qual município é sede administrativa do distrito de Entre Rios?',
      answers: ['Pinhão', 'Laranjeiras do Sul', 'Guarapuava', 'Pitanga'],
      correct: 2,
      explanation: 'Entre Rios é um distrito do município de Guarapuava, localizado na região centro-sul do Paraná.',
    },
    {
      question: 'Qual produto agrícola é o principal cultivo de Entre Rios?',
      answers: ['Café', 'Cana-de-açúcar', 'Soja', 'Algodão'],
      correct: 2,
      explanation: 'A soja é o principal cultivo, seguida pelo milho e pelo trigo, dentro de um sistema de rotação de culturas que preserva a fertilidade do solo.',
    },
  ],
};


/* =====================================================
   2. ACESSIBILIDADE — Fonte & Contraste
   ===================================================== */

/** Ajusta o tamanho da fonte via variável CSS --font-scale */
function initFontControls() {
  const MIN_SCALE = 0.8;
  const MAX_SCALE = 1.5;
  const STEP      = 0.1;

  let scale = parseFloat(
    localStorage.getItem('fontScale') || '1'
  );

  function applyScale(s) {
    scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, s));
    document.documentElement.style.setProperty('--font-scale', scale);
    localStorage.setItem('fontScale', scale);
  }

  // Aplica escala salva ao carregar
  applyScale(scale);

  document.getElementById('btn-increase-font').addEventListener('click', () => {
    applyScale(scale + STEP);
  });

  document.getElementById('btn-decrease-font').addEventListener('click', () => {
    applyScale(scale - STEP);
  });
}

/** Liga/desliga modo de alto contraste */
function initHighContrast() {
  const btn = document.getElementById('btn-contrast');
  let active = localStorage.getItem('highContrast') === 'true';

  function apply(on) {
    active = on;
    document.body.classList.toggle('high-contrast', on);
    btn.setAttribute('aria-pressed', String(on));
    localStorage.setItem('highContrast', String(on));
  }

  // Aplica estado salvo
  apply(active);

  btn.addEventListener('click', () => apply(!active));
}


/* =====================================================
   3. NAVEGAÇÃO — Header scroll + Mobile
   ===================================================== */
function initNav() {
  const toggle  = document.getElementById('nav-toggle');
  const nav     = document.getElementById('main-nav');
  const navLinks = nav.querySelectorAll('.nav-link');

  // Toggle mobile
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
    document.body.style.overflow = expanded ? '' : 'hidden';
  });

  // Fecha ao clicar em link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link ao scrollar
  const sections = document.querySelectorAll('.page');

  function updateActiveLink() {
    const scrollY = window.scrollY + 120;
    let current = '';

    sections.forEach(section => {
      if (section.offsetTop <= scrollY) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.page === current);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}


/* =====================================================
   4. SCROLL REVEAL
   ===================================================== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* =====================================================
   5. RENDERIZAÇÃO: Stats
   ===================================================== */
function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;

  container.innerHTML = data.stats.map(s => `
    <div class="stat-card reveal">
      <span class="stat-number">${s.number}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');

  // Adiciona ao observer depois de renderizar
  container.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 }).observe(el);
  });
}


/* =====================================================
   6. CARROSSEL (Galeria)
   ===================================================== */
function renderCarousel() {
  const track    = document.getElementById('carousel-track');
  const dotsEl   = document.getElementById('carousel-dots');
  const prevBtn  = document.getElementById('carousel-prev');
  const nextBtn  = document.getElementById('carousel-next');

  if (!track) return;

  let currentIndex = 0;
  let slideWidth   = 0;
  let slidesVisible = 1;

  // Renderiza slides
  track.innerHTML = data.gallery.map((item, i) => `
    <div class="carousel-slide" role="group" aria-label="Slide ${i + 1} de ${data.gallery.length}" aria-roledescription="slide">
      <div class="slide-img-placeholder"
           style="background: linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo});"
           role="img"
           aria-label="${item.title}">
        <span class="slide-emoji" aria-hidden="true">${item.emoji}</span>
        <span>${item.title}</span>
      </div>
      <div class="slide-info">
        <p class="slide-category">${item.category}</p>
        <h3 class="slide-title">${item.title}</h3>
        <p class="slide-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');

  // Renderiza dots
  dotsEl.innerHTML = data.gallery.map((_, i) => `
    <button class="carousel-dot ${i === 0 ? 'active' : ''}"
            aria-label="Ir para slide ${i + 1}"
            data-index="${i}">
    </button>
  `).join('');

  function getSlideDimensions() {
    const firstSlide = track.querySelector('.carousel-slide');
    if (!firstSlide) return;
    slideWidth = firstSlide.offsetWidth + 20; // gap
    const containerW = track.parentElement.offsetWidth;
    slidesVisible = Math.max(1, Math.floor(containerW / slideWidth));
  }

  function goTo(index) {
    getSlideDimensions();
    const maxIndex = data.gallery.length - 1;
    currentIndex = Math.max(0, Math.min(index, maxIndex));

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Atualiza dots
    dotsEl.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    // ARIA
    track.setAttribute('aria-label', `Slide ${currentIndex + 1} de ${data.gallery.length}`);
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  // Teclado
  document.getElementById('carousel').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });

  // Dots clique
  dotsEl.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index)));
  });

  // Swipe touch
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? currentIndex + 1 : currentIndex - 1);
  });

  // Recalcula ao redimensionar
  window.addEventListener('resize', () => goTo(currentIndex), { passive: true });

  // Init
  getSlideDimensions();
}


/* =====================================================
   7. RENDERIZAÇÃO: Cards de Pilares
   ===================================================== */
function renderPilares() {
  const grid = document.getElementById('pilares-grid');
  if (!grid) return;

  grid.innerHTML = data.pilares.map(p => `
    <article class="pilar-card" role="listitem">
      <span class="pilar-icon" aria-hidden="true">${p.icon}</span>
      <h3 class="pilar-title">${p.title}</h3>
      <p class="pilar-text">${p.text}</p>
    </article>
  `).join('');
}


/* =====================================================
   8. RENDERIZAÇÃO: Timeline
   ===================================================== */
function renderTimeline() {
  const list = document.getElementById('timeline-list');
  if (!list) return;

  list.innerHTML = data.timeline.map((item, i) => `
    <li class="timeline-item reveal" style="transition-delay: ${i * 0.08}s">
      <p class="timeline-year">${item.year}</p>
      <h4 class="timeline-title">${item.title}</h4>
      <p class="timeline-text">${item.text}</p>
    </li>
  `).join('');

  // Observer para os itens da timeline
  list.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.1 }).observe(el);
  });
}


/* =====================================================
   9. ACORDEÃO (Expandáveis)
   ===================================================== */
function renderAcordeao() {
  const container = document.getElementById('accordion');
  if (!container) return;

  container.innerHTML = data.acordeao.map((item, i) => `
    <div class="accordion-item" role="listitem" id="acc-item-${i}">
      <button class="accordion-trigger"
              aria-expanded="false"
              aria-controls="acc-body-${i}"
              id="acc-btn-${i}">
        <span>
          <span class="acc-icon" aria-hidden="true">${item.icon}</span>
          ${item.title}
        </span>
        <span class="accordion-chevron" aria-hidden="true">▾</span>
      </button>
      <div class="accordion-body"
           id="acc-body-${i}"
           role="region"
           aria-labelledby="acc-btn-${i}">
        <div class="accordion-body-inner">
          ${item.text.map(t => `<p>${t}</p>`).join('')}
          <div class="accordion-tags">
            ${item.tags.map(tag => `<span class="accordion-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Lógica de abertura/fechamento
  container.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item    = btn.closest('.accordion-item');
      const body    = item.querySelector('.accordion-body');
      const isOpen  = item.classList.contains('open');

      // Fecha todos
      container.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        el.querySelector('.accordion-body').style.maxHeight = '0';
      });

      // Abre o clicado (se estava fechado)
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}


/* =====================================================
   10. RENDERIZAÇÃO: Infográfico
   ===================================================== */
function renderInfografico() {
  const el = document.getElementById('infographic');
  if (!el) return;

  el.innerHTML = data.infografico.map(step => `
    <div class="infographic-step">
      <p class="infographic-num">Etapa ${step.step}</p>
      <span class="infographic-icon" aria-hidden="true">${step.icon}</span>
      <h4 class="infographic-title">${step.title}</h4>
      <p class="infographic-desc">${step.desc}</p>
    </div>
  `).join('');
}


/* =====================================================
   11. RENDERIZAÇÃO: Abas do Autor
   ===================================================== */
function renderAutorTabs() {
  const tablist = document.getElementById('autor-tablist');
  const panels  = document.getElementById('autor-tab-panels');
  if (!tablist || !panels) return;

  // Renderiza botões de aba
  tablist.innerHTML = data.autorTabs.map((tab, i) => `
    <button class="tab-btn"
            role="tab"
            id="tab-${tab.id}"
            aria-controls="panel-${tab.id}"
            aria-selected="${i === 0 ? 'true' : 'false'}"
            tabindex="${i === 0 ? '0' : '-1'}">
      ${tab.label}
    </button>
  `).join('');

  // Renderiza painéis
  panels.innerHTML = data.autorTabs.map((tab, i) => `
    <div class="tab-panel ${i === 0 ? 'active' : ''}"
         role="tabpanel"
         id="panel-${tab.id}"
         aria-labelledby="tab-${tab.id}"
         tabindex="0">
      ${tab.content}
    </div>
  `).join('');

  // Lógica de troca de aba
  const buttons = tablist.querySelectorAll('.tab-btn');
  const panelEls = panels.querySelectorAll('.tab-panel');

  function activateTab(index) {
    buttons.forEach((btn, i) => {
      const active = i === index;
      btn.setAttribute('aria-selected', String(active));
      btn.tabIndex = active ? 0 : -1;
    });
    panelEls.forEach((panel, i) => {
      panel.classList.toggle('active', i === index);
    });
  }

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => activateTab(i));

    // Navegação por teclado (padrão ARIA Tabs)
    btn.addEventListener('keydown', (e) => {
      let newIndex = i;
      if (e.key === 'ArrowRight') newIndex = (i + 1) % buttons.length;
      if (e.key === 'ArrowLeft')  newIndex = (i - 1 + buttons.length) % buttons.length;
      if (newIndex !== i) {
        activateTab(newIndex);
        buttons[newIndex].focus();
      }
    });
  });
}


/* =====================================================
   12. RENDERIZAÇÃO: Referências
   ===================================================== */
function renderReferencias() {
  const list = document.getElementById('references-list');
  if (!list) return;

  list.innerHTML = data.referencias.map(ref => `
    <li class="reference-item" role="listitem">
      <strong>${ref.title}</strong>
      ${ref.citation}
    </li>
  `).join('');
}


/* =====================================================
   13. MINI JOGO — Quiz
   ===================================================== */
function initQuiz() {
  const screenStart    = document.getElementById('game-start');
  const screenQuestion = document.getElementById('game-question');
  const screenResult   = document.getElementById('game-result');
  const btnStart       = document.getElementById('btn-start-game');
  const btnRestart     = document.getElementById('btn-restart-game');

  const progressFill   = document.getElementById('progress-fill');
  const progressText   = document.getElementById('progress-text');
  const progressBar    = document.getElementById('progress-bar');
  const questionNum    = document.getElementById('question-number');
  const questionText   = document.getElementById('question-text');
  const answersGrid    = document.getElementById('answers-grid');
  const feedbackEl     = document.getElementById('question-feedback');

  const resultScore    = document.getElementById('result-score');
  const resultTitle    = document.getElementById('result-title');
  const resultMessage  = document.getElementById('result-message');
  const resultBadges   = document.getElementById('result-badges');

  if (!screenStart) return;

  // Estado do quiz
  let state = {
    questions: [],
    current:   0,
    score:     0,
    answered:  false,
  };

  const LETTERS = ['A', 'B', 'C', 'D'];

  /** Embaralha array (Fisher-Yates) */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** Mostra uma tela específica */
  function showScreen(screen) {
    [screenStart, screenQuestion, screenResult].forEach(s => {
      s.classList.toggle('hidden', s !== screen);
    });
  }

  /** Inicia o quiz */
  function startGame() {
    state.questions = shuffle(data.quiz).slice(0, 8);
    state.current   = 0;
    state.score     = 0;
    state.answered  = false;

    showScreen(screenQuestion);
    renderQuestion();
  }

  /** Renderiza a pergunta atual */
  function renderQuestion() {
    const q     = state.questions[state.current];
    const total = state.questions.length;
    const num   = state.current + 1;

    // Progresso
    const pct = ((num - 1) / total) * 100;
    progressFill.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', num - 1);
    progressText.textContent = `${num} / ${total}`;

    questionNum.textContent  = `Pergunta ${num} de ${total}`;
    questionText.textContent = q.question;

    // Esconde feedback
    feedbackEl.classList.add('hidden');
    feedbackEl.classList.remove('wrong-feedback');

    // Respostas
    answersGrid.innerHTML = q.answers.map((ans, i) => `
      <button class="answer-btn"
              data-index="${i}"
              aria-label="Opção ${LETTERS[i]}: ${ans}">
        <span class="answer-letter" aria-hidden="true">${LETTERS[i]}</span>
        <span>${ans}</span>
      </button>
    `).join('');

    // Eventos de clique nas respostas
    answersGrid.querySelectorAll('.answer-btn').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
    });

    state.answered = false;
  }

  /** Processa a resposta do usuário */
  function handleAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;

    const q       = state.questions[state.current];
    const correct = q.correct;
    const isRight = selectedIndex === correct;

    if (isRight) state.score += 10;

    // Marca respostas visualmente
    answersGrid.querySelectorAll('.answer-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === correct)       btn.classList.add('correct');
      if (i === selectedIndex && !isRight) btn.classList.add('wrong');
    });

    // Mostra feedback
    feedbackEl.classList.remove('hidden');
    feedbackEl.classList.toggle('wrong-feedback', !isRight);
    feedbackEl.innerHTML = `
      <strong>${isRight ? '✅ Correto!' : '❌ Incorreto.'}</strong>
      ${q.explanation}
    `;

    // Avança automaticamente após 2.5s
    setTimeout(() => {
      state.current++;
      if (state.current < state.questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    }, 2500);
  }

  /** Mostra o resultado final */
  function showResult() {
    const max   = state.questions.length * 10;
    const pct   = (state.score / max) * 100;

    showScreen(screenResult);

    resultScore.textContent = `${state.score}/${max}`;

    // Título e mensagem baseados na pontuação
    let title, message, badges;

    if (pct === 100) {
      title   = '🏆 Especialista em Entre Rios!';
      message = 'Parabéns! Você domina a história, cultura e sustentabilidade de Entre Rios. Um verdadeiro embaixador da colônia!';
      badges  = ['Especialista', 'Nota Máxima', 'Mestre Suábio'];
    } else if (pct >= 75) {
      title   = '🌾 Agricultor Conhecedor!';
      message = 'Excelente resultado! Você tem um sólido conhecimento sobre Entre Rios. Continue aprendendo!';
      badges  = ['Bom Desempenho', 'Quase Expert'];
    } else if (pct >= 50) {
      title   = '🌱 Aprendiz da Terra!';
      message = 'Bom começo! Com mais leitura sobre a história de Entre Rios, você chegará lá. Tente novamente!';
      badges  = ['Em Progresso'];
    } else {
      title   = '📚 Continue Aprendendo!';
      message = 'Não desanime! Explore as páginas de Apresentação e História para descobrir mais sobre Entre Rios.';
      badges  = ['Explorador'];
    }

    resultTitle.textContent   = title;
    resultMessage.textContent = message;
    resultBadges.innerHTML    = badges.map(b => `
      <span class="result-badge">${b}</span>
    `).join('');

    // Atualiza progress bar no resultado
    progressFill.style.width = '100%';
    progressBar.setAttribute('aria-valuenow', state.questions.length);
  }

  // Event listeners
  btnStart.addEventListener('click', startGame);
  btnRestart.addEventListener('click', startGame);
}


/* =====================================================
   14. INIT — Inicializa tudo ao carregar o DOM
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {

  // Acessibilidade
  initFontControls();
  initHighContrast();

  // Navegação
  initNav();

  // Renderização de dados (ordem importa para o observer)
  renderStats();
  renderCarousel();
  renderPilares();
  renderTimeline();
  renderAcordeao();
  renderInfografico();
  renderAutorTabs();
  renderReferencias();

  // Jogo
  initQuiz();

  // Scroll Reveal (depois de renderizar tudo)
  // Pequeno delay para o DOM estar completamente pronto
  requestAnimationFrame(() => {
    initScrollReveal();
  });

  console.log(
    '%c🌾 Entre Rios · Tradição & Sustentabilidade',
    'font-size:14px; color:#c9a96e; font-family: Georgia, serif; padding: 4px 0;'
  );
});
