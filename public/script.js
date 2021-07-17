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
    let context = document.getElementById("myChart").getContext("2d"); // plotted by the chart

    myChart = new Chart(context, {
        //sets the properties of the charts 
        type: "line",
            data: {
                labels,
                datasets: [{
                    label: "Total Vs. Time",
                    fill: true,
                    backgroundColor: "#3f5ab0", // a nice blue color :D 
                    data
                }]
            }
    });
  
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


function sendTransaction(isAddingBool) {
    // updates the DOM
    let nameEl = document.querySelector("#t-name");
    let amountEl = document.querySelector("#t-amount");
    let errorEl = document.querySelector(".form .error");



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







