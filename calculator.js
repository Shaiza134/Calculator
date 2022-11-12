let output = document.getElementById("output");
function clear(){
    output.value = '';
}
function del(){
    output.value = output.value.slice(0, -1);
}
function display(num){
    output.value += num; 
}
function calculate(){
    try{
        output.value = eval(output.value);
    } catch(err){
        alert("Invalid");
    }
}