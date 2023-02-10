
const newDiv = document.createElement('div');
const newContent = document.createTextNode("Hi there and greetings!");
newDiv.setAttribute("id", "home");
newDiv.appendChild(newContent);
const content = document.getElementById("content");
content.appendChild(newDiv);
