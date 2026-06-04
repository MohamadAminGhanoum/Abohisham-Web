function saveProject(){
        const name= document.getElementById("savehardwareInput").value;
        const code = document.getElementById("projectDescription").value;

        const hardwareitems=JSON.parse(localStorage.getItem("hardwareitems"))|| [];
        hardwareitems.push({name, code});
        localStorage.setItem("hardwareitems",JSON.stringify(hardwareitems));
        alert("Project saved");
        showProject(name,code);
    } 

    function showProject(name, code){
        const container=document.getElementById("projectView");
        const box=document.createElement("button")
        box.textContent=name;
            const getrid =document.createElement("div");
            getrid.className = "removeProject";
        box.onclick=function() {
            document.getElementById("projectsSidebar").innerHTML = code;
        };

const deletebutton = document.createElement("img")
deletebutton.src= "delete.png";
deletebutton.className="deleteproject";
deletebutton.onclick = function() {
    if (confirm('Delete ${name}?')){
        removeProjectFromStorage(name);
        getrid.remove();
    }
};
getrid.appendChild(box);
box.appendChild(deletebutton);
container.appendChild(getrid)
    }



function removeProjectFromStorage(nameToRemove) {
    let hardwareitems = JSON.parse(localStorage.getItem("hardwareitems")) || [];
    hardwareitems = hardwareitems.filter(project => project.name !== nameToRemove);
    localStorage.setItem("hardwareitems", JSON.stringify(hardwareitems));
}

window.onload = function() {
    const welcomeHardwareName = "Spotify display";
    const welcomeHardwareProject = 
    
    `<script src="savehardwareItems.js"></script>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<div id="hardwareProjects">Coming soon...</div>
<script>
    fetch('JOURNAL.md')
    .then(response => response.text())
    .then(text => {
        document.getElementById('hardwareProjects').innerHTML = marked.parse(text);
    })
    .catch(error => {
        console.error('smth is wrong with md file:', error);
        document.getElementById('hardwareProjects').innerHTML = 'Error detail: ' + error.message + '; issue with loading the contents.';
    });

</script>
<style>
    #hardwareProjects {
        margin-right: 20px;
        border-radius: 12px;
        width: 90%;
        padding: 20px 10px;
        font-family: 'verdana', sans-serif;
        color: white;
    }

    #hardwareProjects img {
        max-width: 250px;
        height: auto;
        border-radius: 8px;
    }
</style>
`;

    const wasHardwareDeleted = localStorage.getItem("welcomeHardwareDeleted");

    if (wasHardwareDeleted !="yes") {
        addProjectToScreen(welcomeHardwareName, welcomeHardwareProject);
    }
    const savedProjects = JSON.parse(localStorage.getItem("hardwareitems")) || [];

    savedProjects.forEach(function(project) {
        showProject(project.name, project.code);
    });
};

function addProjectToScreen(projectName, projectHardware) {
    const listcontainer = document.getElementById("projectView");
    const box = document.createElement("button");
    box.textContent = projectName;
    const getrid = document.createElement("div");
    getrid.className = "removeProject";
    box.onclick = function() {
        document.getElementById("projectsSidebar").innerHTML = projectHardware;
        const script = document.createElement("script");
    const scripts = document.getElementById("projectsSidebar").querySelectorAll("script");
scripts.forEach(oldScript => {
    const newScript = document.createElement("script");
    newScript.textContent = oldScript.textContent;
    oldScript.parentNode.replaceChild(newScript, oldScript);
    });
    };


    const deletebutton = document.createElement("img");
    deletebutton.src = "delete.png";
    deletebutton.className = "deleteproject";
    deletebutton.onclick = function(e) {
        e.stopPropagation();
        if (confirm(`Delete ${projectName}?`)) {
            getrid.remove();
        }
    };
    getrid.appendChild(box);
    box.appendChild(deletebutton);
    listcontainer.appendChild(getrid); 
}
