const cel = document.getElementById('celsius');
const far = document.getElementById('fahrenheit');
const cel2 = document.getElementById('celsius-2');
const far2 = document.getElementById('fahrenheit-2');

function CeltoFar(){
    let output = (parseFloat(cel.value) * 9/5 ) + 32;
    far.value = parseFloat(output.toFixed(2))
    console.log(output)
}

function FartoCel(){
    let output = (parseFloat(far2.value) -32) * 5/9
    cel2.value = parseFloat(output.toFixed(2))
    console.log(output)
}