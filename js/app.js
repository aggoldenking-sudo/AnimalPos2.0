// --------------------- DATOS ---------------------
import { animales } from "../data/animales.js";
import { sorteos } from "../data/sorteos.js";

// --------------------- SECCIONES ---------------------
const animalitosBtn = document.getElementById("animalitosBtn");
const pollaHipicaBtn = document.getElementById("pollaHipicaBtn");
const animalitosSection = document.querySelector(".animales-section");
const pollaHipicaSection = document.querySelector(".polla-hipica-section");

// Tabs
animalitosBtn.addEventListener("click", () => {
  animalitosSection.style.display = "block";
  pollaHipicaSection.style.display = "none";
});
pollaHipicaBtn.addEventListener("click", () => {
  animalitosSection.style.display = "none";
  pollaHipicaSection.style.display = "block";
});

// --------------------- RENDERIZAR LOTERÍAS ---------------------
const sorteosContainer = document.getElementById("sorteos");
sorteos.forEach(sorteo => {
  const div = document.createElement("div");
  div.classList.add("sorteo");
  div.innerHTML = `<h4>${sorteo.nombre}</h4>`;
  
  const horariosDiv = document.createElement("div");
  horariosDiv.classList.add("horarios");
  sorteo.horarios.forEach(h => {
    const btn = document.createElement("button");
    btn.textContent = h;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".horarios button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    horariosDiv.appendChild(btn);
  });
  
  div.appendChild(horariosDiv);
  sorteosContainer.appendChild(div);
});

// --------------------- RENDERIZAR ANIMALES ---------------------
const animalesContainer = document.getElementById("animales");
animales.forEach(animal => {
  const div = document.createElement("div");
  div.classList.add("animal");
  div.textContent = `${animal.numero} ${animal.nombre}`;
  animalesContainer.appendChild(div);

  // Seleccionar animal y pedir monto
  div.addEventListener("click", () => {
    const monto = prompt(`Monto para ${animal.nombre} (${animal.numero}):`);
    if (monto && !isNaN(monto)) agregarAlTicket(animal, parseFloat(monto));
  });
});

// --------------------- TICKET ---------------------
const ticketContainer = document.querySelector(".ticket .table");
const totalDiv = document.getElementById("total");
let total = 0;

function agregarAlTicket(animal, monto) {
  const div = document.createElement("div");
  div.style.display = "grid";
  div.style.gridTemplateColumns = "2fr 2fr 1fr 1fr";
  div.innerHTML = `
    <div>${animal.nombre}</div>
    <div>Seleccionada</div>
    <div>-</div>
    <div>${monto}</div>
  `;
  ticketContainer.appendChild(div);
  total += monto;
  totalDiv.textContent = `TOTAL BS ${total}`;
}

// --------------------- IMPRIMIR ---------------------
document.getElementById("processTicket").addEventListener("click", () => {
  const printContent = document.getElementById("printTicket");
  printContent.innerHTML = ticketContainer.innerHTML;
  printContent.style.display = "block";
  window.print();
  printContent.style.display = "none";
});
