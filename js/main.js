//access button
var buttonClick = document.querySelector("button");
//Access unordered list.
var groceryList = document.getElementById("groceryList");
//access message(bonus)
var message = document.getElementById("message");
//Declare variable list-item.
var listItem;


function removeItem(ev) {
    "use strict";
    //event target to remove any li item
    groceryList.removeChild(ev.target);

    //check UL length
    if (groceryList.getElementsByTagName("li").length == 0) {
        message.innerHTML = "Enter today's workouts!";

    } else {
        message.innerHTML = groceryList.getElementsByTagName("li").length + " workout(s) remaining!";
    }

}

function addItem() {
    "use strict";
    //    Create list item and store output in a variable.
    listItem = document.createElement("li");

    //    Use innerHTML on created list item and assign it with user input 
    //    from prompt("Enter a new item for to-do list:").
    var newItem = prompt("add new item");
    listItem.innerHTML = newItem;

    if (newItem != null) {
        //Append list item to unordered list.
        groceryList.appendChild(listItem);
        //Add event listener to list item to listen for click event - event 
        listItem.addEventListener("click", removeItem, false);

        //check UL length
        if (groceryList.getElementsByTagName("li").length == 0) {
            message.innerHTML = "Enter today's workouts!";

        } else {
            message.innerHTML = groceryList.getElementsByTagName("li").length + " workout(s) remaining!";
        }
    }
}

//check UL length
if (groceryList.getElementsByTagName("li").length == 0) {
    message.innerHTML = "Enter today's workouts!";
}


//Add event listener to button to listen for click event - event handler will be 
//addItem function.
buttonClick.addEventListener("click", addItem, false);