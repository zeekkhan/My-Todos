const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask(){
  if (inputBox.value === ""){
      alert("Please enter a task");
  }
  else{
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      li.contentEditable = "true"; // Allow the user to edit the task
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "Remove";
      li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
if (e.target.tagName === "LI") {
  e.target.classList.toggle("checked");
  saveData();
} else if (e.target.tagName === "SPAN") {
  e.target.parentElement.remove();
  saveData();
}
}.bind(this));

// Save changes automatically when the user finishes editing a task
listContainer.addEventListener("input", function(e) {
if (e.target.tagName === "LI") {
  saveData();
}
}.bind(this));

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadData(){
  listContainer.innerHTML = localStorage.getItem("data");
}
loadData();
