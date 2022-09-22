document.getElementById("main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";

const textNode = document.createTextNode("Zach is the champion");
newHeader.appendChild(textNode);