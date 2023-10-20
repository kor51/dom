const main = document.querySelector("main");

var joke1 = "A man walked into a bar. He woke up with a bump the next day.";
var joke2 = "The sun asked the moon, \"Why are you so dark all of a sudden?\" The moon said, \"It\'s just a phase.\"";
var joke3 = "A man in a hoodie gets stopped by the cops. The cops tell him to pull over. \"I can\'t,\" the man says. \"Zip it!\"";

let jokeList = `
    <h3>My Jokes</h3>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>`;
    
main.innerHTML = jokeList;

var para = document.createElement("p");

para.textContent = "That's all folks!";

const body = document.querySelector("body");
body.appendChild(para);