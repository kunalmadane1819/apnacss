let form = document.querySelector('form');
let input=document.querySelector('email');
let name=document.querySelector('name');
let error=document.querySelector('err');

form.addEventListener('submit', function(event){
    event.preventionDefault();
    console.log()