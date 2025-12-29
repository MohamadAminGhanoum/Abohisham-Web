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
            document.getElementById("projectsSidebar").textContent = code;
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

    window.onload=function() {
        const hardwareitems = JSON.parse(localStorage.getItem("hardwareitems")) || [];

        hardwareitems.forEach(function(project) {
            showProject(project.name, project.code);
        });

    };


function removeProjectFromStorage(nameToRemove) {
    let hardwareitems = JSON.parse(localStorage.getItem("hardwareitems")) || [];
    hardwareitems = hardwareitems.filter(project => project.name !== nameToRemove);
    localStorage.setItem("hardwareitems", JSON.stringify(hardwareitems));
}