



document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    if (event.target !== sidebar && event.target !== document.getElementById("openSidebar")) {
        sidebar.style.left = "-250px";
    }
});














// TypeWRiter 
'use strict'


function typeWriter(el){
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i)=>
    setTimeout(()=>(el.innerHTML += letter), 190 *i));
}

typeWriter(nam_e);

