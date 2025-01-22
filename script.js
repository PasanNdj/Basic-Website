const trigger = [
    ["what is you name"],
    ["good mornig"],
    ["hi", "hey", "hello"],
    ["how are you", "how are things"],
    ["what is going on", "what is up"],
    ["happy", "good", "well", "fantastic", "cool"],
    ["bad", "bored", "tired", "sad"],
    ["tell me story", "tell me joke"],
    ["thanks", "thank you"],
    ["bye", "good bye", "goodbye"],
    ["what are you doing"],
    ["sri lanka best cityes name"],
    ["colombo"],
    ["kandy"],
    ["galle"],
    ["nuwara eliya"],
    ["the best places in travel sri lanka"],
    ["contact details"],
    ["bye"],
    ["prices in amaya hotel"],
];

const reply = [
    ["my name is luma chatbot"],
    ["good mornig ","Morning greetings","Good day"],
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    ["Nothing much", "Exciting things!"],
    ["Glad to hear it"],
    ["Why?", "Cheer up buddy"],
    ["What about?", "Once upon a time..."],
    ["You're welcome", "No problem"],
    ["Goodbye", "See you later"],
    ["im faind"],
    ["Colombo,Kandy,Galle,Nuwara Eliya,Polonnaruwa"],
    ["Shangri-La Hotel Colombo,Cinnamon Grand Colombo,Galle Face Hotel,Hilton Colombo"],
    ["Earl's Regency,Hotel Suisse,Amaya Hills "],
    ["Jetwing Lighthouse,The Fortress Resort & Spa,The Bartizan"],
    ["The Grand Hotel,Araliya Green Hills Hotel,Heritance Tea Factory"],
    ["Kandy-botanical gardens,Nuwara Eliya-gegari lake,Galle-galle fort"],
    ["pasan-071xxxxxx"],
    ["bye"],
    ["amaya Hills-1 Room RS.10000"],
];

const alternative = [
    "Same",
    "Go on...",
    "Try again",
    "I'm listening...",
    "Bro..."
];

function output(input) {
    let product;
    let text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

    if (compare(trigger, reply, text)) {
        product = compare(trigger, reply, text);
    } else if (text.match(/robot/gi)) {
        product = robot[Math.floor(Math.random() * robot.length)];
    } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    addChat(input, product);
}

function compare(trigger, reply, text) {
    for (let i = 0; i < trigger.length; i++) {
        for (let j = 0; j < trigger[i].length; j++) {
            if (text.includes(trigger[i][j])) {
                return reply[i][Math.floor(Math.random() * reply[i].length)];
            }
        }
    }
}

function addChat(input, product) {
    const mainDiv = document.getElementById("main");
    let userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = `You: <span>${input}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.className = "bot";
    botDiv.innerHTML = `Chatbot: <span>${product}</span>`;
    mainDiv.appendChild(botDiv);

    mainDiv.scrollTop = mainDiv.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});
