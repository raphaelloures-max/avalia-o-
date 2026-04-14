/* ============================= */
/* 📦 DADOS DINÂMICOS */
/* ============================= */
const dinos = [
  {
    nome: "Ankylosaurus",
    descricao: "O mais famoso, com uma grande clava na cauda."
  },
  {
    nome: "Euoplocephalus",
    descricao: "Possuía armadura extremamente resistente."
  },
  {
    nome: "Saichania",
    descricao: "Adaptado a ambientes áridos."
  }
];

/* ============================= */
/* 🧠 RENDERIZAÇÃO */
/* ============================= */
const container = document.getElementById("cards-container");

dinos.forEach(dino => {
  const card = document.createElement("article");
  card.classList.add("card");

card.innerHTML = `
  <img src="${dino.imagem}" alt="Imagem do ${dino.nome}" class="card-img">
  <h3>${dino.nome}</h3>
  <p>${dino.descricao}</p>
`;
  `;

  container.appendChild(card);
});

/* ============================= */
/* 🎠 CARROSSEL */
/* ============================= */
const imagens = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ankylosaurus_magniventris_%28life_restoration%29.png",
    alt: "Anquilossauro ilustrado"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Euoplocephalus_restoration.jpg",
    alt: "Euoplocephalus"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Saichania_chulsanensis.jpg",
    alt: "Saichania"
  }
];
const track = document.getElementById("carousel-track");

imagens.forEach(img => {
  const div = document.createElement("div");
  div.classList.add("carousel-item");
  div.textContent = img;
  track.appendChild(div);
});

let index = 0;

document.querySelector(".next").onclick = () => {
  index = (index + 1) % imagens.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + imagens.length) % imagens.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};

/* ============================= */
/* 🔤 ACESSIBILIDADE (FONTE) */
/* ============================= */
let fontSize = 16;

document.getElementById("increase-font").onclick = () => {
  fontSize += 2;
  document.documentElement.style.setProperty("--font-size", fontSize + "px");
};

document.getElementById("decrease-font").onclick = () => {
  fontSize -= 2;
  document.documentElement.style.setProperty("--font-size", fontSize + "px");
};

/* ============================= */
/* 🌗 ALTO CONTRASTE */
/* ============================= */
document.getElementById("contrast-toggle").onclick = () => {
  document.body.classList.toggle("high-contrast");
};

/* ============================= */
/* 📑 TABS */
/* ============================= */
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

/* ============================= */
/* 📂 ACCORDION */
/* ============================= */
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

/* ============================= */
/* ✨ SCROLL REVEAL */
/* ============================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
const dinos = [
  {
    nome: "Ankylosaurus",
    descricao: "O mais famoso, com uma grande clava na cauda.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ankylosaurus_magniventris_%28life_restoration%29.png"
  },
  {
    nome: "Euoplocephalus",
    descricao: "Possuía armadura extremamente resistente.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Euoplocephalus_restoration.jpg"
  },
  {
    nome: "Saichania",
    descricao: "Adaptado a ambientes áridos.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Saichania_chulsanensis.jpg"
  }
];
imagens.forEach(img => {
  const div = document.createElement("div");
  div.classList.add("carousel-item");

  div.innerHTML = `
    <img src="${img.src}" alt="${img.alt}" class="carousel-img">
  `;

  track.appendChild(div);
});
