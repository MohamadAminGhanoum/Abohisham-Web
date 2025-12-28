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
    if (confirm('Delete ${name}?')){
        removeProjectFromStorage(name);
        getrid.remove();
    }
};
getrid.appendChild(box);
getrid.appendChild(deletebutton);
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