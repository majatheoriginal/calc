const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
    const text = display.value;
    display.value = eval(text);
    }catch(error){
        display.error = "Error";
    }
}
