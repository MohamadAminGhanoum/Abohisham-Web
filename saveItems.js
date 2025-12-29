function saveItem(){
        const name= document.getElementById("saveInput").value;
        const code = document.getElementById("codeInput").value;

        const items=JSON.parse(localStorage.getItem("items"))|| [];
        items.push({name, code});
        localStorage.setItem("items",JSON.stringify(items));
        alert("Project saved");
        showProject(name,code);
    } 

    function showProject(name, code){
        const container=document.getElementById("projectLists");
        const box=document.createElement("button")
        box.textContent=name;
            const getrid =document.createElement("div");
            getrid.className = "removeProject";
        box.onclick=function() {
            document.getElementById("projectsSide").textContent = code;
        };

const deletebutton = document.createElement("img")
deletebutton.src= "delete.png";
deletebutton.className="deleteproject";
deletebutton.onclick = function() {
    if (confirm(`Delete ${name}?`)){
        removeProjectFromStorage(name);
        getrid.remove();
    }
};
getrid.appendChild(box);
box.appendChild(deletebutton);
container.appendChild(getrid)
    }

    window.onload=function() {
        const items = JSON.parse(localStorage.getItem("items")) || [];

        items.forEach(function(project) {
            showProject(project.name, project.code);
        });

    };


function removeProjectFromStorage(nameToRemove) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items = items.filter(project => project.name !== nameToRemove);
    localStorage.setItem("items", JSON.stringify(items));
}

window.onload = function() {
    const welcomeName = "project.html";
    const welcomeCode = `<!doctype html>
<html>
<head>
    <title>Codingprojects.html</title>
    <link rel="icon" href="coding.png">
    <link rel="stylesheet" href="Navigation-bar.css">
</head>
    <body>

<!--for the page name-->
    <div class="Navigation-bar">
<a class="page-name" href="index.html">Abohisham-Web</a>
    </div>

<h1>Coding Projects(Beta(under construction))</h1>
   <details class="add-project">
    <summary><img src="plus-sign-icon-free-png.webp" alt="add" class="addbutton"></summary>
<div>
    <input type="text" id="saveInput" placeholder="Project Name:">
    <textarea style="width: 70%;" type="text" placeholder="Description of project:"></textarea>
    <textarea style="width: 100%;" id="codeInput" type="text" placeholder="The code:"></textarea>
    <button class="savebutton" onclick ="saveItem()">Save</button>
   
</div>
        </details>

<div class="Projects-overview" id="projectLists"></div>
<pre id="projectsSide"></pre>

<style>`;

    const wasDeleted = localStorage.getItem("welcomeDeleted");

    if (wasDeleted !== "yes") {
        addProjectToScreen(welcomeName, welcomeCode);
    }

    const savedProjects = JSON.parse(localStorage.getItem("myProjects")) || [];
    savedProjects.forEach(function(project) {
        addProjectToScreen(project.name, project.code);
    });
};

function addProjectToScreen(projectName, projectCode) {
    const listContainer = document.getElementById("projectLists");

    const projectRow = document.createElement("div");
    projectRow.className = "removeProject";

    const nameButton = document.createElement("button");
    nameButton.textContent = projectName;
    // This allows the delete button to stay inside pinned to the right
    nameButton.style.position = "relative"; 
    nameButton.style.paddingRight = "30px"; 

    nameButton.onclick = function() {
        document.getElementById("projectsSide").textContent = projectCode;
    };

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "delete.png";
    deleteIcon.className = "deleteproject";
    // Force it to stay visible inside the button
    deleteIcon.style.position = "absolute";
    deleteIcon.style.right = "5px";
    deleteIcon.style.top = "50%";
    deleteIcon.style.transform = "translateY(-50%)";

    deleteIcon.onclick = function(event) {
        event.stopPropagation();
        if (confirm("Delete " + projectName + "?")) {
            projectRow.remove();
            deleteFromStorage(projectName);
        }
    };

    nameButton.appendChild(deleteIcon);
    projectRow.appendChild(nameButton);
    listContainer.appendChild(projectRow);
}

function saveItem() {
    const nameInput = document.getElementById("saveInput").value;
    const codeInput = document.getElementById("codeInput").value;

    if (nameInput === "") {
        alert("Please enter a name!");
        return;
    }

    const savedProjects = JSON.parse(localStorage.getItem("myProjects")) || [];
    savedProjects.push({ name: nameInput, code: codeInput });
    localStorage.setItem("myProjects", JSON.stringify(savedProjects));

    addProjectToScreen(nameInput, codeInput);
    alert("Project saved!");
}

function deleteFromStorage(nameToRemove) {
    if (nameToRemove === "Softwareproject.html") {
        localStorage.setItem("welcomeDeleted", "yes");
    }

    let savedProjects = JSON.parse(localStorage.getItem("myProjects")) || [];
    savedProjects = savedProjects.filter(function(item) {
        return item.name !== nameToRemove;
    });

    localStorage.setItem("myProjects", JSON.stringify(savedProjects));
}