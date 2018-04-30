const bod = document.getElementById("yo");
const title = document.createElement("p");
const text = document.createTextNode("Hello World!");
title.appendChild(text);
bod.appendChild(title);