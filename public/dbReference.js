let db; // will be referenced by another function 
const request = window.indexedDB.open("budget", 1); 


/* -- send that request -- */
request.onsuccess = function (event) {
  db = event.target.result;
  if (navigator.onLine) {
    checkDatabase();
  }
};


request.onupgradeneeded = function(event) { // onupgradeneeded is an event handler when the database version is increased. 
  const db = event.target.result; // defining the event 
  const budgetStore = db.createObjectStore("budgetStore", {
    autoIncrement: true
  }); 
  budgetStore.createIndex("budgetIndex", "budgetIndex");
};


request.onerror = function (event) {
  const msg = event.target.result
  console.log(msg.errorCode)
};


/* -- functions section  -- */
function saveRecord(record) {
  db = request.result;
  const transaction = db.transaction(["budgetStore"], "readwrite");
  const budgetStore = transaction.objectStore("budgetStore");

  budgetStore.add(record);
};


function checkDatabase() {
  db = request.result; // defining the db variable from earlier. Let will be a different instance every session. 
  
  const transaction = db.transaction(["budgetStore"], "readWrite"); 
  const budgetStore = transaction.objectStore("budgetStore"); 
  const getAll = budgetStore.getAll(); 
  console.log(getAll)

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST", 
        body: JSON.stringify(getAll.result), 
        headers: {
          Accept: "application/json, text/plain, */*", "Content-Type": "application/json"
        } 
      })
      .then((response) => response.json())
      .then(() => {
        db = request.result; 
        const transaction = db.transaction(["budgetStore"], "readwrite");
        const budgetStore = transaction.objectStore("budgetStore"); 
        budgetStore.clear()
        window.location.reload()
      });
    }
  }
};

// listening for the app to come back online. 
window.addEventListener("online", checkDatabase)


