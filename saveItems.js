function saveItem(){
        const name= document.getElementById("saveInput").value;
        const code = document.getElementById("codeInput").value;

        const items=JSON.parse(localStorage.getItem("items"))|| [];
        items.push({name});
        localStorage.setItem("items",JSON.stringify(items));
        alert("Project saved");
        showProject(name,code);
    } 

    function showProject(name, code){
        const container=document.getElementById("projectLists");
    }
