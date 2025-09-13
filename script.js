function addTask(e) {
  e.preventDefault();
  // Gaunam ivesto lauko reiksme
  let taskText = document.getElementById("input-box").value;
//   console.log(taskText);

  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  //Randam ul elementa
  let taskList = document.querySelector(".task-container ul");

  //sukuriam li elementa
  let addText = document.createElement("li");
  

  //sukuriam input checkboksa
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checked";

  // Sukuriam tekstui skirtą span
  let taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskContent.className = "task-list"

  //sukuriam button mygtuka delete
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.className = "delete-btn";

  //priskiriam teksta li elementui
//   addText.textContent = taskText;

  // pridedam nauja <li> <input> ir <button> i sarasa
  addText.prepend(checkbox); //checkbox pries teksta
  addText.appendChild(taskContent);
  
  addText.appendChild(deleteBtn);

  taskList.appendChild(addText);

  // ivyki checkboksui kai pazymime pakeiciame tik li stiliu.
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        taskContent.style.textDecoration = "line-through";
        taskContent.style.color = "gray";
    } else {
        taskContent.style.textDecoration = "none";
        taskContent.style.color = "black";
    }
});

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(addText);
  });

  // Isvalom įvesties lauką
  document.getElementById("input-box").value = "";
}
