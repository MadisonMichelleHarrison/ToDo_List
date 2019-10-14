var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul"); 

function createListElement() {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";

    function markDone() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", markDone);
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    li.appendChild(deleteButton);

    function deleteListItem() {
        i.classList.add("delete");
    }

    deleteButton.addEventListener("click", deleteListItem);
}

function createListItemSubmitButton() {
    if (input.value.length > 0) {
        createListElement();
    }
}

function createListItemEnterKey(event) {
    console.log(event.keyCode);
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

submitButton.addEventListener("click", createListItemSubmitButton);

input.addEventListener("keypress", createListItemEnterKey);
