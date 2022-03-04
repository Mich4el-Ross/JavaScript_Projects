let containerEl = document.querySelector('div.container')
let containerKeyEl = document.querySelector('div#key')

const windowEl = document.body.addEventListener("keydown", (event) => {
    containerKeyEl.remove()

    if (event.key == ' ') {
        containerEl.innerHTML =  ` 
        <div id="keyName"> Space
            <small> event.key</small>
        </div>
        
        <div id="keyCode"> ${event.keyCode}
            <small>event.keyCode</small>
        </div>
        
        <div id="code"> ${event.code}
            <small>event.code</small>
        </div>
        `
    } else {
        containerEl.innerHTML =  `
        <div id="keyName"> ${event.key} 
            <small> event.key</small>
        </div>

        <div id="keyCode"> ${event.keyCode}
            <small>event.keyCode</small>
        </div>
    
        <div id="code"> ${event.code}
            <small>event.code</small>
        </div>
        `     
    }
})