function init(){
  const table = document.createElement("table");
  table.appendChild(fejLec())
  document.getElementById("app").appendChild(table)
}
function fejLec(){
  const sor = document.createElement("tr"); 

  const nev = document.createElement("td");
  nev.textContent = "Név";
  const kor = document.createElement("td");
  kor.textContent = "Kor";
  const lakhely = document.createElement("td");
  lakhely.textContent = "Lakhely";

  sor.append(nev,kor,lakhely);
  return sor;
}
document.addEventListener("DOMContentLoaded", init)