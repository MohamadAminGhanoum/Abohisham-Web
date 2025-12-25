const websiteValue = document.getElementById("Addinginput");
const liststyle = document.getElementById("list-style");
const appupdateClick = document.getElementById("addbutton");
let websiteData = JSON.parse(localStorage.getItem("websiteData")) || [];

if (!websiteData || websiteData.length === 0) {
    websiteData = [
        { item: "https://app.slack.com/client", status: false },
        { item: "https://flavortown.hackclub.com/explore", status: false },
        { item: "https://blueprint.hackclub.com/home", status: false }
];
    localStorage.setItem("websiteData", JSON.stringify(websiteData));
}

ReadwebsiteItems();

function ReadwebsiteItems() {
    liststyle.innerHTML = "";
    websiteData.forEach(element => {
        let li = document.createElement("li");
        let style = element.status ? "style='text-decoration: line-through'" : "";
        const websiteItems = `<div>${element.item}</div><img class="delete to-do" src="delete.png" onclick="Deletewebsite(this)">`;
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

    localStorage.setItem("websiteData", JSON.stringify(websiteData));
    ReadwebsiteItems();

function Deletewebsite(e) {
    let li = e.parentElement;
    let deletValue = li.querySelector("div").innerText;
    if (confirm(`Delete? ${deletValue}!`)) {
        websiteData = websiteData.filter(el => el.item !== deletValue);
        localStorage.setItem("websiteData", JSON.stringify(websiteData));
        ReadwebsiteItems();
    }
}