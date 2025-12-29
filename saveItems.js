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

<style>
    .savebutton {
        width: 80px;
        height: 40px;
        cursor: pointer;
        border-radius: 12px;
        border: lightgray solid 2px;
        margin: 15px;
    }

    h1 {
        margin-left: 220px;
        font-family: 'verdana', sans-serif;
        word-spacing: normal;
    }

    .Projects-overview {
        height: 79%;
        width: 180px;
        margin-left: 29px;
        position:absolute;
        top:0px;
        left:0px;
        background-color: rgb(33, 38, 60); 
        margin-top: 91px;
        animation: moveleft 0.9s;
        border-radius: 12px;
    }

    @keyframes moveleft {
        from {left: -155px;}
        to {left: 0px;}
    }

    .Projects-overview button {
        color: white;
        text-decoration: none;
        background-color: rgb(51, 58, 91); 
        border: none;
        border-radius: 12px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 14px;
        text-align: left;
        transition-duration: 0.4s;
        width: 175px;
        margin: 5px auto;
        margin-left: 5px;
        cursor: pointer;
    }

    .Projects-overview button:hover {
        background-color: rgb(183, 191, 228);
        border-radius: 12px;
        transform: translateY(-4px);

        }

    .add-project {
        margin: 10px 225px;
    }

    .addbutton {
        width: 50px;
        height: 50px;
        cursor: pointer;
        border-radius: 12px;
        border: 2px solid rgb(173, 30, 30);
    }

    summary {
        list-style: none;
}

    input, textarea {
        display: block;
        margin: 15px;
        width: 300px;
        font-family: 'verdana', sans-serif;
        border: 12px solid lightgray;
        border-radius: 12px;
        padding: 10px;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'verdana', sans-serif;
        opacity: 0.9;
        background-color: rgb(19, 75, 79);
        background-image: radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 16%);
        background-size: 10px 10px;
    }

    .removeProject {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 170px;
    }

    .deleteproject {
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin: 0;
        background-color: rgb(66, 81, 155); 
        padding: 8px 8px;
        border-radius: 8px;
    }
    .deleteproject:hover {
        transform: scale(1.05);
    }

    #projectsSide {
        background-color: lightgray;
        position: absolute;
        margin-left: 240px;
    }

</style>



<script src="saveItems.js"></script>
</body>
</html>`;

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