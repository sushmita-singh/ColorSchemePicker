const color = {};

document.getElementById('btn').addEventListener('click', function() {
   const seedColor =  document.getElementById('seed-color').value
   const r = parseInt(seedColor.substr(1, 2), 16)
    const g = parseInt(seedColor.substr(3, 2), 16)
    const b = parseInt(seedColor.substr(5, 2), 16)
   const mode = document.getElementById('color-picker').value;
   const url = `https://www.thecolorapi.com/scheme?rgb=${r},${g},${b}&mode=${mode}&count=5`
   console.log(seedColor, mode, url)
   fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let footerHtml = '' 
        for(let i = 0; i < 5; i++) {
            color[i] = data.colors[i].hex.value
            console.log(color[i])
            footerHtml += `
                <div class="hex-value" id="hex-value${i}">${color[i]}</div>
            `
            console.log(`color${i}`)
            let mainHtml = document.getElementById(`color${i+1}`) 
            mainHtml.style.backgroundColor = color[i];
        }
        document.getElementById('footer').innerHTML = footerHtml
    })
})