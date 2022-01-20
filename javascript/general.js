let toggleButton=document.getElementsByClassName("toggle-button");
let navlinks=document.getElementsByClassName("nav-links");


function addflex(){
    if(document.getElementsByClassName('open') == null)
    toggleButton += 'open';

    else
    toggleButton -= 'open';
}

toggleButton.addEventListner('click',addflex());
