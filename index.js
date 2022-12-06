// Write your code here!

document.querySelector("main").remove();

//has a 'newHeader' variable that points to node 'h1#victory
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";
