const containers = document.getElementsByClassName("container");




function onDrop(event){
    const cardId =  event.dataTransfer.getData("cardId")
    const card = document.getElementById(cardId);
    // console.log(card.parentNode.parentNode.id)

    // console.log(event.target.id)
    if(card.parentNode.parentNode.id === event.target.id){
        alert("cant paste here")
        return;
    }
    if(event.target.id === "todo" ||event.target.id === "inprogress" ||
    event.target.id === "done"){
        event.target.appendChild(card);
        }
        else{
            return;
        }

    
    
}
for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  containers[i].addEventListener("drop", onDrop);
}
