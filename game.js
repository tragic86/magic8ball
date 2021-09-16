
let answers = ["It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes - definitely",
"You might want think again", 
"As I see it, yes", 
"Most likely", 
"looking good", 
"Yes",
"Don't count on it", 
"My reply is no",
"My sources say no", 
"Outlook not so good",
"Very doubtful", 
"Ask again later", 
"look behind you!!",
"Cannot predict now", 
"I have no clue lol"];



window.onload = function() {
    const eight = document.getElementById("eight");
    const answer = document.getElementById("answer");
    const eightball = document.getElementById("eight-ball");
    const question = document.getElementById("question");
    
    answer.addEventListener("click", function() {
      if (question.value.length < 1) {
        alert('Hey!!! Enter a question!');
      } else {
        eight.innerText = "";
        let num = Math.floor(Math.random() * Math.floor(answers.length));
        answer.innerText = answers[num];
      }
    });
 };















