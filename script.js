document.getElementById('btn').addEventListener('click', function() {
   const seedColor =  document.getElementById('seed-color').value;
   const r = parseInt(seedColor.substr(1, 2), 16)
    const g = parseInt(seedColor.substr(3, 2), 16)
    const b = parseInt(seedColor.substr(5, 2), 16)
   const mode = document.getElementById('color-picker').value;
   const url = `https://www.thecolorapi.com/scheme?rgb=${r},${g},${b}&mode=${mode}&count=5`
   console.log(seedColor, mode, url)
   fetch('https://www.thecolorapi.com/scheme?hex=00A6FB&mode=monochrome&count=5')
    .then(response => response.json())
    .then(data => console.log(data))
})