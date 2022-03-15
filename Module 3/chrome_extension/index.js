// chrome://extensions/
let myLeads = []
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn")

// check if localStorage is empty, if not empty, add the value and call
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

// save active tab url into localstorage and array
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
    })
})

// format the html
function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

// double click on delete button, delete the localstorage and array
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

// if localstroage is empty, add the input into array and localstorage
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
})



// let listItems = ""
// for (let i = 0; i < myLeads.length; i++) {
//     listItems += "<li>" + myLeads[i] + "</li>"
    
//     // -- second way
//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.append(li)
// }

// ulEl.innerHTML = listItems