let yourName = "Tuong";

if(confirm("are you " + yourName + "?")){
    console.log("Hello" + yourName);
}else{
    console.log("Then what is your name?");
}
 
let operation =prompt("enter the operation +,-,*,/");
 if(operation == "+"){
    console.log("this is addition");
}else{ console.log("this is not addition");}

let number = 99;
if(number == 99){
    console.log("the number is correct!");
}
// && = and(more specific) || = or (more general)
let num1 = 1;
let num2 = 2;
let num3 = 3;
let notTrue = false;

if(num1 < num2 && num3 > num2) {
    console.log("Num 1 is smaller then num 2, while num 3 is larger then num 2");
}

if (num1 == 1 || num2 == 1 || num3 == 1){
    console.log( "num1 is 1, num2 is 1, num 3 is also 1");
}

if(!notTrue){
    console.log( "notTrue is true,");
}
