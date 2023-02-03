// Variables
var addData = document.getElementById('addData');
var modal1 = document.getElementById('modal1');
var cancel = document.getElementById('cancel');
// add button calling modal
addData.addEventListener('click', function(){
    modal1.classList.add('modal--active');
});
// cancel button close modal 
cancel.addEventListener('click', function(){
    modal1.classList.remove('modal--active');
});