let db; 
const request = window.indexedDB.open("budget", 1); 


/* -- functions -- */
request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.onLine) {
      checkDatabase();
    }
  };


  request.onupgradeneeded = function(event) { // onupgradeneeded is an event handler when the database version is increased. 
    const db = event.target.result; // defining the event 
    db.createObjectStore("budgetStore", {
      autoIncrement: true
    }); 
    budgetStore.createIndex("budgetIndex", "budgetIndex");
  };


  request.onerror = function (event) {
    const msg = event.target.result
    console.log(msg.errorCode)
  };


  function saveRecord(record) {
    db = request.result;
    const transaction = db.transaction(["budgetStore"], "readwrite");
    const budgetStore = transaction.objectStore("budgetStore");

    budgetStore.add(record);
  };







