// Variables
var addData = document.getElementById('addData');
var modal1 = document.getElementById('modal1');
var cancel = document.getElementById('cancel');
var confirm = document.getElementById('confirm');
var someData = [
    [122, 'string', 456, 44, 11 ],
    [221, 'another string', 555, 55, 123]
];
// add starting data to table



tbody.appendChild(tr);
// add button calling modal
addData.addEventListener('click', function(){
    modal1.classList.add('modal--active');
});
// cancel button close modal 
cancel.addEventListener('click', function(){
    modal1.classList.remove('modal--active');
});
// confirm button and add data to table
confirm.addEventListener('click', function(){

});