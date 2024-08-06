let pressed = '';
function numPresses(value){
let display=document.querySelector('.display');
pressed+=value;
display.value=pressed;
}
