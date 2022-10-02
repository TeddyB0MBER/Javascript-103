function multiplythree(number){
    let total = number * 3
    console.log("Result: " + total)
}
function calculator(){
    console.log(`calculating`);
    let num1 = Number(prompt(`enter num1:`));
    let num2 = Number(prompt(`enter num2:`));

    sum(num1,num2)
}
    
function sum(a,b){
       let total = a + b;
       document.getElementById('results').innerHTML = `<P> ${a} + ${b} = ${total}</P>`;
    }
    
function subtract(){
        console.log(`calculating`);
        let num1 = Number(prompt(`enter num1:`));
        let num2 = Number(prompt(`enter num2:`));

        minus(num1,num2);
    }
    function minus(a,b){
        let total = a - b;
        document.getElementById('results').innerHTML = `<P> ${a} - ${b} = ${total}</P>`;
     }
     function multiply(){
        console.log(`calculating`);
        let num1 = Number(prompt(`enter num1:`));
        let num2 = Number(prompt(`enter num2:`));
       times(num1,num2);
    }
    function times(a,b){
        let total = a * b;
       document.getElementById('results').innerHTML = `<P> ${a} * ${b} = ${total}</P>`;
    }
    function divide(){
        console.log(`calculating`);
        let num1 = Number(prompt(`enter num1:`));
        let num2 = Number(prompt(`enter num2:`));
       division(num1,num2);
    }
    function division(a,b){
        let total = a / b;
       document.getElementById('results').innerHTML = `<P> ${a} / ${b} = ${total}</P>`;
    }