/* -- Variable Definitions -- */
let transactionArray = []; // to be populated every instance. 
let myChart;


/* -- Basic Functions Defined -- */
function populateThatTotal() {
    //.reduce .reduce(total, num) 
  let totalTransaction = transactions.reduce((total, num) => { // executes reducer function on each element of the array resulting in a singl output
    return total + parseInt(num.value);
  }, 0);

  let totalEl = document.querySelector("#total"); // applied to the html
  totalEl.textContent = totalTransaction;
}


function populateThatChart () {
    // creating a chart. 
    let dateMarker = map(t => {
        let date = new Date(t.date);
        // I create the stamps on the graph :D 
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      });

    let data = map(t => {
        sum += parseInt(t.value); // passes a string and returns an integer. 
        return sum;
    });
    
    //I create the chart using resources defined above :D 




    if (myChart) { // if the chart exits already
        myChart.destroy(); // delete so we can update
    }
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







