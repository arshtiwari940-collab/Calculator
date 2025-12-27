const display=document.getElementById("display");
function append(value){
    display.value+= value;
}
function ClearDisplay(){
    display.value=" ";
}
function Deltechar(){
    display.value=display.value.slice(0,-1);
}
function sqrt() {
    display.value = Math.sqrt(Number(display.value));
}
function power() {
    let x = Number(prompt("Enter base (x):"));
    let y = Number(prompt("Enter power (y):"));
}
function claculate(){
try { let expression = display.value
             .replace(/sin/g,"Math.sin")
             .replace(/cos/g,"Math.cos")
             .replace(/tan/g,"Math.tan")
             .replace(/Log/g,"Math.log10")
             .replace(/ln/g,"Math.log")
             display.value=eval(expression);
} catch{
    display.value="error";
}
}