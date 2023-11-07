var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
//Taking the input from the Text box and converting into object
todos = JSON.parse(localStorage.getItem("list_todos")) || [];
function renderTodos(){
    listElement.innerHTML = "";//Clears the content
    for(todo of todos){//iteration over todos array
        var todoElement = document.createElement("li");//a new li element is created
        var todoText = document.createTextNode(todo);// text is added to the li element
        var linkElement = document.createElement("a");// a new a element is created
        linkElement.setAttribute("href","#");//attribute for a element is set 
        var pos = todos.indexOf(todo);//index of the item is taken
        linkElement.setAttribute("onclick","deleteTodo(" + pos + ")");//onclick the delete function is triggered
        var linkText = document.createTextNode("done");//done button is added to a button
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodos();//Update the list
//Function to take the Task from the text area and save it to storage
function addTodo(){
    var todoText = inputElement.value;//input value in a constant
    todos.push(todoText);//add that to an array of todos
    inputElement.value = "";//value of input string is cleared
    renderTodos();//Update is made to the list of to dos
    saveToStorage();//save the updated list to local storage
}
//Calling of function when Button is clicked
buttonElement.onclick = addTodo;
//Function to delete any task
function deleteTodo(pos){
    todos.splice(pos, 1);//Item is remove from the specified pos
    renderTodos();//Update is made to the list of to dos
    saveToStorage();//save the updated list to local storage
}
//Function for storing the input data
function saveToStorage(){
    localStorage.setItem("list_todos",JSON.stringify(todos));
    //the input value is stored in local storage after converting it to Json String
}
