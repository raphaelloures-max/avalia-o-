/* DADOS */
const dinos = [
  {
    nome: "Ankylosaurus",
    descricao: "O mais famoso com clava na cauda.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ankylosaurus_magniventris_%28life_restoration%29.png"
  },
  {
    nome: "Euoplocephalus",
    descricao: "Armadura extremamente resistente.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Euoplocephalus_restoration.jpg"
  }
];

/* RENDER CARDS */
const container = document.getElementById("cards-container");

dinos.forEach(d => {
  const card = document.createElement("article");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${d.imagem}" alt="${d.nome}" class="card-img" loading="lazy" decoding="async">
    <h3>${d.nome}</h3>
    <p>${d.descricao}</p>
  `;

  container.appendChild(card);
});

/* CARROSSEL */
const imagens = dinos.map(d => d.imagem);
const track = document.getElementById("carousel-track");

imagens.forEach(src => {
  const div = document.createElement("div");
  div.classList.add("carousel-item");

  div.innerHTML = `<img src="${src}" class="carousel-img" loading="lazy">`;

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

/* ACESSIBILIDADE */
let fontSize = 16;

document.getElementById("increase-font").onclick = () => {
  fontSize += 2;
  document.documentElement.style.setProperty("--font-size", fontSize + "px");
};

document.getElementById("decrease-font").onclick = () => {
  fontSize -= 2;
  document.documentElement.style.setProperty("--font-size", fontSize + "px");
};

document.getElementById("contrast-toggle").onclick = () => {
  document.body.classList.toggle("high-contrast");
};

/* TABS */
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

/* ACCORDION */
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.onclick = () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  };
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
