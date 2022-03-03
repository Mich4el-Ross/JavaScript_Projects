let buttonsEl = document.querySelectorAll('button')
let numberEl = document.getElementById('counterNumber')
let count = 0

buttonsEl.forEach((btn) =>{

    btn.addEventListener('click', (e) => {
        const target = e.currentTarget.classList

        if (target.contains('increase')){
            count++
        }else if (target.contains('decrease')){
            count--
        }
        else {
            count = 0
        }

        if (count > 0) {
            numberEl.style.color = '#0F0'
        } else if (count < 0){
            numberEl.style.color = '#F00'
        }else{
            numberEl.style.color = '#FFF'
        }

        numberEl.textContent = count
    })  
})