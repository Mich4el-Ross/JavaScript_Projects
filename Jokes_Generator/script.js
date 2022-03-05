const buttonEl = document.querySelector('.container button.generate')
buttonEl.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const jokeDivEl = document.querySelector('div.jokes')
    const url = 'https://icanhazdadjoke.com/'
    
    const jokeRes = await fetch(url, {
        headers: {
            'Accept' :'application/json'
        }
    })
    
    const joke = await jokeRes.json()
    jokeDivEl.textContent = joke.joke

}
