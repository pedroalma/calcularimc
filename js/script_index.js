
let  n1 
let  n2 
let test
let fim

function calcula(){
    let n1 = document.getElementById("n1").value;

    let n2 = document.getElementById("n2").value;
    
    test = n1/n2;
    fim = test*n2
    
//console.log("test")
document.getElementById("fim").innerHTML=fim;
};
//document.getElementById("test").innerHTML = html;
//document.getElementById("test").innerHTML