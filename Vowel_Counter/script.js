function counter() {

    let userText = document.getElementById('vowel')
    let userValue = userText.value.toUpperCase().trim()
    let vowelArray = ['A','E','I','O','U']
    let vowelCount = 0


    if (userValue.length == 0){
        alert('The field is empty... Please, try again!')
    }
    else {
        for (let letter of userValue){
            if(vowelArray.includes(letter)){
                vowelCount++;
            }   
        }
        const titleEl = document.querySelector('h1.title')
        titleEl.textContent = `There are ${vowelCount} vowels!`
    }
}