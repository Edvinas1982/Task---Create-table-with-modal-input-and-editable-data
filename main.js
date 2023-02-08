// Variables
var addData = document.getElementById("addData");
var modal1 = document.getElementById("modal1");
var cancel = document.getElementById("cancel");
var confirm = document.getElementById("confirm");
var tbody = document.querySelector("tbody");
var date = document.getElementById("date");
var plate = document.getElementById("plate");
var distance = document.getElementById("distance");
var time = document.getElementById("time");
var someData = [
  ["2023-02-02", "KOP123", 5000, 124,],
  ["1999-04-18", "MIL551", 940, 27,],
];
for ( var i = 0; i < someData.length; i++ ){
  var speed = Math.round((someData[i][2] / someData[i][3])*3.6);
  
  // putting speed in array
  someData[i].push(speed);
  
}
// function witch add starting data to table
function printTable() {
    tbody.innerHTML = '';
  for (var i = 0; i < someData.length; i++) {
  // calculating speed 
    var speed = Math.round((someData[i][2] / someData[i][3])*3.6);
    // putting speed in array
    someData[i].push(speed);
    var tr = document.createElement("tr");
    for (var j = 0; j < someData[i].length; j++) {
      var td = document.createElement("td");
      td.innerText = someData[i][j];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  tbody.appendChild(tr);
}
someData.pop();
printTable();


// add button calling modal
addData.addEventListener("click", function () {
  modal1.classList.add("modal--active");
});
// cancel button close modal
cancel.addEventListener("click", function () {
  modal1.classList.remove("modal--active");
});
// confirm button and add new data to table
confirm.addEventListener("click", function () {
  var newData = [date.value, plate.value, distance.value, time.value];
  someData.unshift(newData);
  printTable();
  modal1.classList.remove("modal--active");
  date.value ='';
  plate.value ='';
  distance.value ='';
  time.value = '';
});
