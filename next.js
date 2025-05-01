let display=document.getElementById('display')
function displayvalue(value) {
    display.value+=value
}

function clearvalue() {
    display.value=` ` 
}

function deletevalue() {
    display.value=display.value.toString().slice(0, -1)
}

function equalvalue() {
    display.value=eval(display.value)
}