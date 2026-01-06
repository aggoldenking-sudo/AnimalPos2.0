/* ---------- BOTONES HEADER ---------- */
const animalitosBtn = document.getElementById("animalitosBtn");
const pollaHipicaBtn = document.getElementById("pollaHipicaBtn");

const animalitosSection = document.querySelector(".animales-section");
const pollaHipicaSection = document.querySelector(".polla-hipica-section");

/* ---------- MOSTRAR SECCIONES ---------- */
animalitosBtn.addEventListener("click", () => {
  animalitosSection.style.display = "block";
  pollaHipicaSection.style.display = "none";
});

pollaHipicaBtn.addEventListener("click", () => {
  animalitosSection.style.display = "none";
  pollaHipicaSection.style.display = "block";
});

/* ---------- RENDERIZAR LOTERÍAS ---------- */
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
      // desactivar otros horarios
      div.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    horariosDiv.appendChild(btn);
  });

  div.appendChild(horariosDiv);
  sorteosContainer.appendChild(div);
});

/* ---------- RENDERIZAR ANIMALES ---------- */
const animalesContainer = document.querySelector(".animales-section .animales");

animales.forEach(animal => {
  const div = document.createElement("div");
  div.classList.add("animal");
  div.textContent = `${animal.numero} ${animal.nombre}`;
  animalesContainer.appendChild(div);

  div.addEventListener("click", () => {
    const monto = prompt(`Ingrese monto para ${animal.nombre} (${animal.numero}):`);
    if (monto && !isNaN(monto)) agregarTicket(animal.numero, animal.nombre, monto);
  });
});

/* ---------- TICKET ---------- */
const ticketTable = document.getElementById("tabla");
let total = 0;

function agregarTicket(numero, nombre, monto) {
  // Obtener lotería y hora seleccionada
  const loteriaDiv = document.querySelector(".sorteo .horarios button.active");
  const loteria = loteriaDiv ? loteriaDiv.closest(".sorteo").querySelector("h4").textContent : "-";
  const hora = loteriaDiv ? loteriaDiv.textContent : "-";

  const row = document.createElement("div");
  row.style.display = "grid";
  row.style.gridTemplateColumns = "2fr 2fr 1fr 1fr";
  row.innerHTML = `<div>${nombre}</div><div>${loteria}</div><div>${hora}</div><div>${monto}</div>`;
  ticketTable.appendChild(row);

  total += parseFloat(monto);
  document.getElementById("total").textContent = `TOTAL BS ${total}`;
}

/* ---------- PROCESAR E IMPRIMIR ---------- */
document.getElementById("processTicket").addEventListener("click", () => {
  const printDiv = document.getElementById("printTicket");
  printDiv.innerHTML = ticketTable.innerHTML;
  printDiv.style.display = "block";
  window.print();
  printDiv.style.display = "none";
});
