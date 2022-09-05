const color = {};


document.getElementById('btn').addEventListener('click', function() {
   const seedColor =  document.getElementById('seed-color').value
   const r = parseInt(seedColor.substr(1, 2), 16)
    const g = parseInt(seedColor.substr(3, 2), 16)
    const b = parseInt(seedColor.substr(5, 2), 16)
   const mode = document.getElementById('color-picker').value;

//    Creating url to be used during fetch by using rgb values of color picker

   const url = `https://www.thecolorapi.com/scheme?rgb=${r},${g},${b}&mode=${mode}&count=5`
   console.log(seedColor, mode, url)

//    Getting hex values from color api using fetch
   fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let footerHtml = '' 
        for(let i = 0; i < 5; i++) {
            color[i] = data.colors[i].hex.value
            console.log(color[i])
            // Adding html of footer to footerHtml
            footerHtml += `
                <input type="button" class="hex-value" id="hex-value${i+1}" value="${color[i]}" />
            `
            
            let mainHtml = document.getElementById(`color${i+1}`) 
            mainHtml.style.backgroundColor = color[i];
        }
        // Changing footer in DOM
        document.getElementById('footer').innerHTML = footerHtml

        let hexValue1 = document.getElementById('hex-value1')
let hexValue2 = document.querySelector('#hex-value2')
let hexValue3 = document.querySelector('#hex-value3')
let hexValue4 = document.querySelector('#hex-value4')
let hexValue5 = document.querySelector('#hex-value5')
const textCopiedMsgEl = document.querySelector('[data-text-copied]');
const hideCopiedMsgEl = document.querySelector('.hideCopied');
const copiedExitBtn = document.querySelector('.copiedExitBtn');

hexValue1.addEventListener("click", () => {
    console.log('clicked on hex value 1')
    textCopy(hexValue1)
});

hexValue2.addEventListener("click", () => {
    console.log('clicked on hex value 2')
    textCopy(hexValue2)
});


hexValue3.addEventListener("click", () => {
    console.log('clicked on hex value 3')
    textCopy(hexValue3)
});


hexValue4.addEventListener("click", () => {
    console.log('clicked on hex value 4')
    textCopy(hexValue4)
});

hexValue5.addEventListener("click", () => {
    console.log('clicked on hex value 5')
    textCopy(hexValue5)
});

function textCopy(hexValue) {
    if(hexValue.value == "") return;
    console.log(hexValue.value);
    navigator.clipboard.writeText(hexValue.value)
    .then(() => {
        console.log(hexValue.value)
        textCopiedMsgEl.classList.remove("hideCopied");
        textCopiedMsgEl.classList.add("showCopied");
        setTimeout(()=> {
            textCopiedMsgEl.classList.add("hideCopied");
            textCopiedMsgEl.classList.remove("showCopied");
        }, 1000)
    })
}

copiedExitBtn.addEventListener('click', copiedExitClickHandler)
function copiedExitClickHandler () {
    textCopiedMsgEl.classList.remove("hideCopied");
}
    })
})

// Copy hex value

