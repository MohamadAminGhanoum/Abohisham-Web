//credit to https://www.youtube.com/watch?v=oMt3U1zfoe0
// I have some difficulty in Java script, so i had to follow a guide.

const todoValue = document.getElementById("To-doinput");
const liststyle = document.getElementById("list-style");
const appupdateClick = document.getElementById("addbutton");
let todoData = JSON.parse(localStorage.getItem("todoData")) || [];

ReadtodoItems();

function ReadtodoItems() {
    liststyle.innerHTML = "";
    todoData.forEach(element => {
        let li = document.createElement("li");
        let style = element.status ? "style='text-decoration: line-through'" : "";
        const todoItems = `<div ${style} ondblclick="FinishTodo(this)">${element.item}</div><img class="delete to-do" src="delete.png" onclick="DeleteTodo(this)">`;
        li.innerHTML = todoItems;
        liststyle.appendChild(li);
    });
}

todoValue.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        appupdateClick.click();
    }
});

function CreateTodo() {
    if (todoValue.value === "") {
        alert("Write smth");
        todoValue.focus();
        return;
    }

    let dataItem = { item: todoValue.value, status: false };
    todoData.push(dataItem);
    localStorage.setItem("todoData", JSON.stringify(todoData));
    
    ReadtodoItems();
    todoValue.value = "";
}

function FinishTodo(e) {
    let itemText = e.innerText;
    todoData.forEach((element) => {
        if (element.item === itemText) {
            element.status = !element.status;
        }
    });
    localStorage.setItem("todoData", JSON.stringify(todoData));
    ReadtodoItems();
}

function DeleteTodo(e) {
    let li = e.parentElement;
    let deletValue = li.querySelector("div").innerText;
    if (confirm(`Delete? ${deletValue}!`)) {
        todoData = todoData.filter(el => el.item !== deletValue);
        localStorage.setItem("todoData", JSON.stringify(todoData));
        ReadtodoItems();
    }
}