const buttons = document.getElementsByClassName("btn");
const inputs = document.querySelectorAll("section>div>input");


function deleteCard(event){
     event.target.parentNode.remove();
}


for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", createCard);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createInput);
}


function createInput(event) {
  const input = event.target.nextElementSibling;
  input.className = "show";
  const note = document.createElement("p");
  note.innerText = "PLEASE PRESS ENTER";
  note.id = "note";

  event.target.parentNode.appendChild(note);
}
function createCard(event) {
  if (event.keyCode === 13) {
    let taskName = event.target.value;
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <b>${taskName}</b> 
    <button onclick="deleteCard(event)">Delete</button>
    `;
    let cardContainer = event.target.nextElementSibling;
    
    cardContainer.appendChild(card);
    event.target.value = "";
    event.target.className = "hide";
    const note = document.getElementById("note");
    note.remove();



   
           
  }
}
