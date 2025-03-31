async function fetchData() {
  let response = await fetch("src/adatok.json");
  let json = await response.json();
  return json;
}

async function init() {
  const table = document.createElement("table");
  table.appendChild(fejLec());

  let json = await fetchData();
  json.forEach(element => {
    const sor = document.createElement("tr");

    const nev1 = document.createElement("td");
    nev1.textContent = element.nev;
    sor.appendChild(nev1);

    const kor1 = document.createElement("td");
    kor1.textContent = element.kor;
    sor.appendChild(kor1);

    const lakhely1 = document.createElement("td");
    lakhely1.textContent = element.lakhely;
    sor.appendChild(lakhely1);

    table.appendChild(sor);
  });

  document.getElementById("app").appendChild(table);
}

function fejLec() {
  const sor = document.createElement("tr");

  const nev = document.createElement("td");
  nev.textContent = "Név";
  const kor = document.createElement("td");
  kor.textContent = "Kor";
  const lakhely = document.createElement("td");
  lakhely.textContent = "Lakhely";

  sor.append(nev, kor, lakhely);
  return sor;
}

document.addEventListener("DOMContentLoaded", init);
