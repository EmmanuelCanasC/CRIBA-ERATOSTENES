let primeListPrinted = false;
let evenListPrinted = false;
let oddListPrinted = false;

document.getElementById("primeButton").addEventListener("click", fillNumbers);

function fillNumbers() {
  const primeTableBody = document.getElementById("primeTableBody");
  const primeList = document.getElementById("primeList");
  const evenList = document.getElementById("evenList");
  const oddList = document.getElementById("oddList");
  const button = document.getElementById("primeButton");

  primeList.textContent = ""; // Limpiar lista de primos
  evenList.textContent = ""; // Limpiar lista de pares
  oddList.textContent = ""; // Limpiar lista de impares

  // Llenar la tabla con los números del 1 al 120
  let count = 1;
  for (let i = 1; i <= 12; i++) { // 12 filas
    const row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) { // 10 columnas
      const cell = document.createElement("td");
      cell.textContent = count;
      row.appendChild(cell);
      count++;
    }
    primeTableBody.appendChild(row);
  }

  // Marcar los números pares gradualmente
  markEvens(evenList, oddList, primeList, button);
}

function markEvens(evenList, oddList, primeList, button) {
  const cells = document.querySelectorAll("#primeTableBody td");

  let count = 1;
  let evenCount = 0; // Contador de números pares

  cells.forEach((cell, index) => {
    setTimeout(() => {
      if (count % 2 === 0) {
        cell.style.backgroundColor = "red"; // Rojo para números pares
        evenCount++;
        if (!evenListPrinted) {
          const listItem = document.createElement("li");
          listItem.textContent = count;
          evenList.appendChild(listItem);
          if (evenCount % 5 === 0) { // Añadir salto de línea después de cada 5 números pares
            evenList.appendChild(document.createElement("br"));
          }
        }
      }
      if (index === cells.length - 1) {
        evenListPrinted = true; // Marcar que la lista de pares ya ha sido impresa
        markOdds(oddList, primeList, button); // Llamar a la función para marcar los números impares
      }
      count++;
    }, 100 * index); // Incrementa el tiempo de retardo
  });
}

function markOdds(oddList, primeList, button) {
  const cells = document.querySelectorAll("#primeTableBody td");

  let count = 1;
  let oddCount = 0; // Contador de números impares

  cells.forEach((cell, index) => {
    setTimeout(() => {
      if (count % 2 !== 0) {
        cell.style.backgroundColor = "yellow"; // Amarillo para números impares
        oddCount++;
        if (!oddListPrinted) {
          const listItem = document.createElement("li");
          listItem.textContent = count;
          oddList.appendChild(listItem);
          if (oddCount % 5 === 0) { // Añadir salto de línea después de cada 5 números impares
            oddList.appendChild(document.createElement("br"));
          }
        }
      }
      if (index === cells.length - 1) {
        oddListPrinted = true; // Marcar que la lista de impares ya ha sido impresa
        markPrimes(primeList, button); // Llamar a la función para marcar los números primos
      }
      count++;
    }, 100 * index); // Incrementa el tiempo de retardo
  });
}

function markPrimes(primeList, button) {
  const primeTableBody = document.getElementById("primeTableBody");
  const cells = primeTableBody.querySelectorAll("td");

  let count = 1;
  let primeCount = 0; // Contador de números primos

  cells.forEach((cell, index) => {
    setTimeout(() => {
      if (isPrime(count)) {
        cell.style.backgroundColor = "#4CAF50"; // Verde para números primos
        primeCount++;
        if (!primeListPrinted) {
          const listItem = document.createElement("li");
          listItem.textContent = count;
          primeList.appendChild(listItem);
          if (primeCount % 5 === 0) { // Añadir salto de línea después de cada 5 números primos
            primeList.appendChild(document.createElement("br"));
          }
        }
      }
      if (index === cells.length - 1) {
        primeListPrinted = true; // Marcar que la lista de primos ya ha sido impresa
        button.style.display = "none"; // Ocultar el botón
      }
      count++;
    }, 100 * index); // Incrementa el tiempo de retardo
  });
}

function isPrime(num) {
  // Verificar si num es divisible por algún número menor que él mismo
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1; // 1 no es primo, el menor primo es 2
}
