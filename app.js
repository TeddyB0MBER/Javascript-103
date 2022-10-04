function addTask() {
    let inputTask = document.getElementById('inputTask');
    console.log(inputTask.value); // place .value behind input to display text placed in the search bars
    
    let ul = document.getElementById('taskList');
    ul.innerHTML+= `<li>${inputTask.value}</li>`; // the + sign prior to the equal will allow multiple inputs to be displayed without replacing each other. there must be no space between the + sign and the equal.
    inputTask.value = '';
}
