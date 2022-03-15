const services = [
    {name: "Wash Car", cost: 10},
    {name: "Mow Lawn", cost: 20},
    {name: "Pull Weeds", cost: 30}
];
const washcarBtn = document.getElementById("washcar-btn");
const mowlawnBtn = document.getElementById("mowlawn-btn");
const pullweedsBtn = document.getElementById("pullweeds-btn");
const tasksContainer = document.getElementById("tasks-container");
const amountEl = document.getElementById("amount-el");
const sendInvoiceBtn = document.getElementById("sendInvoice-btn");
let purchasedTasks = [];
let totalAmount = 0;

// washcar button listener
washcarBtn.addEventListener("click", function() {
    addService(services[0]);
}, false);

// mowlawn button listener
mowlawnBtn.addEventListener("click", function() {
    addService(services[1]);
}, false);

// pullweeds button listener
pullweedsBtn.addEventListener("click", function() {
    addService(services[2]);
}, false);

sendInvoiceBtn.addEventListener("dblclick", function() {
    sendInvoice();
}, false);

// check if task exist. If not, populate into the service array
function addService(service) {
    const taskName = service.name.split(" ").join("")
    if (!(purchasedTasks.includes(taskName))) {
        purchasedTasks.push(taskName);
        totalAmount += service.cost;
        renderTasks(service);
    }
};

// render the task lists into container as output
function renderTasks(service) {
    const taskName = service.name.split(" ").join("")
    tasksContainer.innerHTML += `
        <div id="${taskName}" class="tasks-col">
            ${service.name}
            <button id="remove-btn" onclick="removeService(${taskName}, ${service.cost})">Remove</button>
            <span>$${service.cost}</span>
        </div>
    `
    amountEl.textContent = "$" + totalAmount;
};

// remove the element when click 
function removeService(task, cost) {
    // update array
    let updatedArray = purchasedTasks.filter(function(e) {return e !== task.id})
    purchasedTasks = updatedArray
    // update dom
    task.remove();
    totalAmount -= cost;
    amountEl.textContent = "$" + totalAmount;
};

// send invoice, the function only clear array and text above
function sendInvoice() {
    purchasedTasks = [];
    tasksContainer.innerHTML = `<p class="split">TASK<span>TOTAL</span></p>`;
    totalAmount = 0;
    amountEl.textContent = "$" + totalAmount;
};