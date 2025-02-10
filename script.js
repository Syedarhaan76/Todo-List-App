//Reference to the html elements
const taskInput=document.querySelector("#input");
const dateInput=document.querySelector("input[type=date]");
const addBtn=document.querySelector("#btn");
const todoContainer=document.querySelector("#todo-container");

//Now Add event on button.
addBtn.addEventListener('click',addTask);

/*This function will:
Get the task and date values.
Create a new task element.
Append it to the todo-container.*/

function addTask(){
    const taskText=taskInput.value.trim();
    const taskDate=dateInput.value;

    if(taskText===""){
        alert("Please enter a task..");
        return;
    }

    //create a new task div.
    const taskDiv=document.createElement("div");
    taskDiv.classList.add("task");

    //Add task
    taskDiv.innerHTML=`
    <span>${taskText} - ${taskDate}</span>
    <button class="delete-btn">Delete</button>
    `;

    //Append to container
    todoContainer.appendChild(taskDiv);

    //Clear Inputs
    taskInput.value="";
    dateInput.value="";

    //Add Delete Functionality
    taskDiv.querySelector(".delete-btn").addEventListener("click", () => {
        taskDiv.style.animation = "slideOut 0.5s ease-in-out forwards";
        setTimeout(() => {
            taskDiv.remove();
            saveTasks();
        }, 500);
    });
    saveTasks();
}