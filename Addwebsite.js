const websiteValue = document.getElementById("Addinginput");
const liststyle = document.getElementById("list-style");
const appupdateClick = document.getElementById("addbutton");
let websiteData = JSON.parse(localStorage.getItem("websiteData")) || [];

ReadwebsiteItems();

function ReadwebsiteItems() {
    liststyle.innerHTML = "";
    websiteData.forEach(element => {
        let li = document.createElement("li");
        let style = element.status ? "style='text-decoration: line-through'" : "";
        const websiteItems = `<div ${style} ondblclick="Finishwebsite(this)">${element.item}</div><img class="delete to-do" src="delete.png" onclick="Deletewebsite(this)">`;
        li.innerHTML = websiteItems;
        liststyle.appendChild(li);
    });
}

websiteValue.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        appupdateClick.click();
    }
});

function CreateThing() {
    if (websiteValue.value === "") {
        alert("Write smth");
        websiteValue.focus();
        return;
    }

    let dataItem = { item: websiteValue.value, status: false };
    websiteData.push(dataItem);
    localStorage.setItem("websiteData", JSON.stringify(websiteData));
    
    ReadwebsiteItems();
    websiteValue.value = "";
}

function Finishwebsite(e) {
    let itemText = e.innerText;
    websiteData.forEach((element) => {
        if (element.item === itemText) {
            element.status = !element.status;
        }
    });
    localStorage.setItem("websiteData", JSON.stringify(websiteData));
    ReadwebsiteItems();
}

function Deletewebsite(e) {
    let li = e.parentElement;
    let deletValue = li.querySelector("div").innerText;
    if (confirm(`Delete? ${deletValue}!`)) {
        websiteData = websiteData.filter(el => el.item !== deletValue);
        localStorage.setItem("websiteData", JSON.stringify(websiteData));
        ReadwebsiteItems();
    }
}