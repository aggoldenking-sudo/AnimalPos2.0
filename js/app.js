const animalitosBtn = document.getElementById("animalitosBtn");
const pollaHipicaBtn = document.getElementById("pollaHipicaBtn");

const animalesSection = document.querySelector(".animales-section");
const pollaSection = document.querySelector(".polla-hipica-section");

animalitosBtn.addEventListener("click", ()=>{
  animalesSection.style.display="block";
  pollaSection.style.display="none";
});

pollaHipicaBtn.addEventListener("click", ()=>{
  animalesSection.style.display="none";
  pollaSection.style.display="block";
});

// Renderizar animales
const animalesContainer = document.getElementById("animalesContainer");
animales.forEach(animal=>{
  const div = document.createElement("div");
  div.classList.add("animal");
  div.textContent = `${animal.numero} ${animal.nombre}`;
  animalesContainer.appendChild(div);

  div.addEventListener("click", ()=>{
    const monto = prompt(`Ingrese el monto para ${animal.nombre} (${animal.numero}):`);
    if(monto && !isNaN(monto)){
      div.dataset.monto=monto;
      div.classList.add("active");
      agregarTicket(animal.numero, animal.nombre, monto);
    }
  });
});

// Ticket
const ticketTable = document.getElementById("ticketTable");
function agregarTicket(numero,nombre,monto){
  const row=document.createElement("div");
  row.style.display="grid";
  row.style.gridTemplateColumns="2fr 2fr 1fr 1fr";
  row.textContent=`${numero} ${nombre} - Lotería X - 08:00 - $${monto}`;
  ticketTable.appendChild(row);
  actualizarTotal();
}

function actualizarTotal(){
  let total=0;
  ticketTable.querySelectorAll("div").forEach(item=>{
    const match=item.textContent.match(/\$([0-9\.]+)/);
    if(match) total+=parseFloat(match[1]);
  });
  let totalDiv=document.getElementById("total");
  totalDiv.textContent=`TOTAL BS ${total}`;
}

function procesarTicket(){
  const printDiv=document.getElementById("printTicket");
  printDiv.innerHTML=ticketTable.innerHTML;
  window.print();
}
