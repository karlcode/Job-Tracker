//SENDING (TO CONTENT ACTION)
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });});

// RECEIVING 
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);
document.addEventListener('DOMContentLoaded', function() {
   
    var link = document.getElementById('add');
    // onClick's logic below:
    link.addEventListener('click', function() {
        console.log("it works");
  // Find a <table> element with id="myTable":
    var table = document.getElementById("myTable");
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(-1);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    // Add some text to the new cells:
    cell1.innerHTML = "Janitor";
    cell2.innerHTML = "GOOGLE";
    cell3.innerHTML = "03/14/2017";
    cell4.innerHTML = "Fukd up";
    });
});

function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
  }