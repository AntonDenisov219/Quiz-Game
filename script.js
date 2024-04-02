const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);
var quastiontext;
var optiontext = [];
var currentquestion = 0;
var score = 0;
var quastion = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "What is the capital of Spain?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 3
    },
    {
        question: "What is the capital of Germany?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 2
    },
    {
        question: "What is the capital of England?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 1
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "What is the capital of Canada?",
        options: ["Paris", "Ottawa", "Berlin", "Madrid"],
        answer: 1
    },
    {
        question: "What is the capital of Australia?",
        options: ["Paris", "London", "Canberra", "Madrid"],
        answer: 2
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Paris", "London", "Berlin", "Brasília"],
        answer: 3
    },
    {
        question: "What is the capital of China?",
        options: ["Paris", "London", "Beijing", "Madrid"],
        answer: 2
    },
    {
        question: "What is the capital of India?",
        options: ["Paris", "London", "Berlin", "New Delhi"],
        answer: 3
    },
    {
        question: "What is the capital of Japan?",
        options: ["Paris", "London", "Tokyo", "Madrid"],
        answer: 2
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Paris", "London", "Berlin", "Mexico City"],
        answer: 3
    },
    {
        question: "What is the capital of Russia?",
        options: ["Paris", "London", "Moscow", "Madrid"],
        answer: 2
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Paris", "London", "Berlin", "Pretoria"],
        answer: 3
    },
    {
        question: "What is the capital of United States?",
        options: ["Paris", "Washington D.C.", "Berlin", "Madrid"],
        answer: 1
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Paris", "London", "Berlin", "Buenos Aires"],
        answer: 3
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Paris", "London", "Berlin", "Cairo"],
        answer: 3
    },
    {
        question: "What is the capital of Greece?",
        options: ["Athens", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Paris", "London", "Ankara", "Madrid"],
        answer: 2
    },
    {
        question: "What is the capital of Thailand?",
        options: ["Paris", "London", "Berlin", "Bangkok"],
        answer: 3
    }
];
function preload() {

}

function create() {
    quastiontext = game.add.text[80, 100, "", {font: "24px Arial", fill: "white"}];
    for (var i = 0; i < 4; i++) {
        optiontext[i] = game.add.text[80, 200 + i * 80, "", {font: "24px Arial", fill: "white"}];
    optiontext.inputEnabled = true;
    optiontext.events.onInputDown.add(checkAnswer, this);
    optiontext.push(optiontext);
    }
    displayQuestion(); 
}

function displayQuestion() {
    var currentquestion = quastion[currentquestion];
    quastiontext.text = currentquestion.question;
    for (var i = 0; i < currentquestion.options.length; i++) {
        optiontext[i].text = currentquestion.options[i];
    }
}
function checkAnswer(event) {
    var selectedoption = optiontext.indexOf(event);
    var currentquestion = quastion[currentquestion];
    if (selectedoption === currentquestion.correctanswer) {
        score+=10;
    }
    else {
        score-=2;
    }
    currentquestion++;
    if (currentquestion < quastion.length) {
        displayQuestion();
    } else {
        console.log("Game Over");
    }
}
////////////////////////////////////////////////////////////////////////////////////

function playFireworks() {
    // Code to play fireworks animation or sound
    console.log("Fireworks!");
}

function checkAnswer(event) {
    var selectedoption = optiontext.indexOf(event);
    var currentquestion = quastion[currentquestion];
    if (selectedoption === currentquestion.correctanswer) {
        score+=10;
        playFireworks();
    }
    else {
        score-=2;
    }
    currentquestion++;
    if (currentquestion < quastion.length) {
        displayQuestion();
    } else {
        console.log("Game Over");
    }
}