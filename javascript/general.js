let toggleButton=document.getElementsByClassName("toggle-button");
let navlinks=document.getElementsByClassName("nav-links");


function addflex(){
    navlinks.classList.toggle('open');
}
toggleButton.addEventListener('click',addflex());