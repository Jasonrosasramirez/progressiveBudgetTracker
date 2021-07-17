/* -- Variable Definitions -- */
let transactionArray = []; // to be populated every instance. 
let myChart;


/* -- Define Functions -- */
function populateThatTotal() {
    //.reduce .reduce(total, num) 
  let totalTransaction = transactions.reduce((total, num) => { // executes reducer function on each element of the array resulting in a singl output
    return total + parseInt(num.value);
  }, 0);

  let totalEl = document.querySelector("#total"); // applied to the html
  totalEl.textContent = totalTransaction;
}


function populateThatChart () {


}


function populateThatTable() {
    let tableBody = document.querySelector("#tbody");
        tableBody.innerHTML = "";

    transactions.forEach(transaction => {
        let tableRow = document.createElement("tr");
        tr.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.value}</td>
        `;

        tableBody.appendChild(tableRow);
    });
}


/* -- Initiate Actions -- */
fetch("/api/transaction")
    .then(response => {
        return response.json();
    })
    .then(data => {
        transactions = data;

        populateThatTotal();
        populateThatChart();
        populateThatTable();
    });







