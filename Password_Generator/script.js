const passwordFieldEl = document.getElementById('passwordResult')
const passwordLenghtEl = document.getElementById('length')

const numbers = '0123456789'
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const symbols = '!@#$%&*()\|<>^/?[]{}'
 
function generatePassword(finalsettings){
    let finalPassword = ''

    for (let index = 0; index < passwordLenghtEl.value; index++) {
        finalPassword+= finalsettings[Math.floor(Math.random() * finalsettings.length)]
    }
    passwordFieldEl.innerText = finalPassword
}

function getSettings(){
    const checkEl = document.querySelectorAll('input[type="checkbox"]:checked')
    let finalsettings = ''

    if (checkEl.length == 0){
        alert('ERROR: Select at least on field as a setting')
    } else{
        checkEl.forEach(element => {
            if (element.value == 'uppercase'){
                finalsettings += uppercaseLetters
            }
            if (element.value == 'lowercase'){
                finalsettings += lowercaseLetters
            }
            if (element.value == 'numbers'){
                finalsettings += numbers
            }
            if (element.value == 'symbols'){
                finalsettings += symbols
            }
        });
        generatePassword(finalsettings)
    }
}

function copyToClipboard(){
    const textarea  = document.createElement('textarea')
    const password = passwordFieldEl.innerText
    
    if(!password){
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove() 
    alert('Password copied to clipboard')
}