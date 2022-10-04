let currentIndex = 0;

function addTask() {
    let inputTask = document.getElementById('inputTask');
    console.log(inputTask.value); // place .value behind input to display text placed in the search bars
    
    let ul = document.getElementById(`taskName-${currentIndex}`);
    ul.innerHTML+= `<p class="table-data">${inputTask.value}</p>`; // the + sign prior to the equal will allow multiple inputs to be displayed without replacing each other. there must be no space between the + sign and the equal.
    inputTask.value = '';

    currentIndex = (currentIndex + 1) % 3;
}

function taskAdd() {
    let inputTd = document.getElementById('tdInput');
    let inputTask = document.getElementById('taskInput');
      
    let tdOne = document.getElementById('taskName1');
    let tdTwo = document.getElementById('taskName2');
    let tdThree = document.getElementById('taskName3');
    if(inputTask.value != ""){
        if(inputTd.value == 1){
            tdOne.insertAdjacentHTML('beforeend', '<p>'+inputTask.value+'</p>');
        }else if(inputTd.value == 2){
            tdTwo.insertAdjacentHTML('beforeend', '<p>'+inputTask.value+'</p>');
        }else{
            tdThree.insertAdjacentHTML('beforeend', '<p>'+inputTask.value+'</p>');
        } 
    }else{
      alert("Please insert your task!");
    }
  inputTask.value = "";
}