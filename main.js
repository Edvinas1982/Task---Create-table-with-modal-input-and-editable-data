// Variables
var addData = document.getElementById("addData");
var modal1 = document.getElementById("modal1");
var cancel = document.getElementById("cancel");
var confirm = document.getElementById("confirm");
var tbody = document.querySelector("tbody");
var data1 = document.getElementById("data1");
var data2 = document.getElementById("data2");
var someData = [
  [122, "string", 123, 124, 125],
  [221, "another string", 126, 27, 8],
];
// function witch add starting data to table
function printTable() {
    tbody.innerHTML = '';
  for (var i = 0; i < someData.length; i++) {
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
  var newData = [data1.value, data2.value];
  someData.unshift(newData);
  printTable();
  modal1.classList.remove("modal--active");
  data1.value ='';
  data2.value ='';
});
