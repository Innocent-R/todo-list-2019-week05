const inputBox = document.getElementById("input");
const listItems = document.getElementById("lists");

//add to list function to add list that are typed in the input
function addToList(){
    if(inputBox.value === ''){
        alert("Write something!");
    }
    else{
        let span
        const ul = document.querySelector('ul')
        let li = document.createElement("li");
        let variable = inputBox.value;
        li.appendChild(document.createTextNode(variable));
        ul.appendChild(li);
        let clear= document.createElement("span")
        //span.innerHTML = "\u00d7";
        li.appendChild(clear);
    }
   inputBox.value = "";
}

//creating click function to cross lists whenever clicked on and remove the cross when clicked on again

listItems.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

//clear all function
function clearAll(){
    listItems.innerHTML = "";
}
// Find all list items with the "completed" class
function clearDisplay(){
    const list = document.getElementById('lists');
     const completedItems = list.querySelectorAll('.completed');
    completedItems.forEach(item => {
    item.remove(); 
  })
}