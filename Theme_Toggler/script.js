let bodyEl = document.body
let checkEl = document.getElementById('checkColor')
let changerEl = document.querySelector('.label #changer')

checkEl.addEventListener('change', () =>{
    
    if (checkEl.checked == true) {
        bodyEl.setAttribute('style','background-color:black; color: white;');
        changerEl.setAttribute('style',  'transform: translateX(24px); border: 1px solid #FFF;')
    } 

    if (checkEl.checked == false) {
        bodyEl.setAttribute('style','background-color:white; color: black;');
        changerEl.setAttribute('style',  'transform: translateX(0px); border: 1px solid #000;')
    }
})