//object literal {}
let petSalon = {
    //attributes
    name: "Pet Salon",
    Phone: "763",
    address:{
        country:"USA",
        city:"SAN DIEGO",
        street:"MARLBOROUGH",
        zip:"9000",
    },
    pets:[]
        
}
//       these are the arguments (local variables)
function Pet(name, age, gender, breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;
    this.contactPhone=phone;
}
// create a new pet 
let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","763");
let dragon = new Pet("Dragon",700,"Male","Fire","Scaling","Dragon-Knight","763");
let tiger = new Pet("Tora",77, "Male","Bengal","Grooming","Shaggy",763); 
// push the pet into the array
petSalon.pets.push(scooby, dragon, tiger);
//register function
// getting the values from the inputs
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender"); 
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");
let inputOwner=document.getElementById("txtOwner");
let inputMobile=document.getElementById("txtMobile");

function register(){
    console.log(inputName.value,inputAge.value, inputGender.value,inputBreed.value, inputService.value, inputOwner.value0);

// create the object
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value,inputMobile.value);
//display the object in the console
console.log(thePet);
//push the pet into the array
petSalon.pets.push(thePet);
}


//start point; stopping conditon ; increment
// length return the number of elements in the array
function displayPetNames(){
    for(i=0; i<petSalon.pets.length;i++){
        console.log(petSalon.pets[i].name);
    }
    alert(`the pet salon has ${petSalon.pets.length}
    registered.`);
}