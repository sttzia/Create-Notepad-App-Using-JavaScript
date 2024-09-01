let inputTitle = document.getElementById("note-title");
let addBtn = document.getElementById("addBtn");
let inputText = document.getElementById("note-text");
let output = document.getElementById("output");

let child, delBtn, h2, p;

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if ((inputTitle.value == "") | (inputTitle.value == " ")) {
    alert("Please write a title.");
  } else if ((inputText.value == "") | (inputText.value == " ")) {
    alert("Please write a note.");
  } else {
    child = document.createElement("div");
    delBtn = document.createElement("button");
    h2 = document.createElement("h2");
    p = document.createElement("p");

    h2.innerHTML = inputTitle.value;
    p.innerHTML = inputText.value;
    delBtn.innerHTML = "Delete";

    child.classList.add("lists");
    delBtn.classList.add("delete");
    h2.classList.add("output-title");
    p.classList.add("text");

    child.appendChild(delBtn);
    child.appendChild(h2);
    child.appendChild(p);
    output.appendChild(child);

    inputTitle.innerHTML = "";
    inputText.innerHTML = "";
  }

  delBtn.addEventListener("click", function () {
    output.removeChild(this.parentElement);
  });
});
