let db; 
const request = window.indexedDB.open("budget", 1); 

/* -- functions -- */
request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.onLine) {
      checkDatabase();
    }
  };