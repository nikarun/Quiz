var readlineSync=require('readline-sync');
var userName=readlineSync.question("Whats ur name?")
console.log("hey "+userName+" Welcome to DO YOU KNOW TCS?");
var score=0;
var totalScore=0;
function play(question,answer){
    var q1=readlineSync.question(question);
    if((typeof(q1)==="string") && q1.toLowerCase()===answer.toLowerCase()){
        console.log("Right!");
        ++score;
    }
    else{
        console.log("Wrong Guess!")
        console.log("correct answer is "+answer);
    }
    console.log("current score is "+score);
        console.log("---------");
}
var questions=[{question:"in which year was TCS established?",
answer:"1968"
},{
    question:"Who is the founder of tcs?",
    answer:"J.R.D Tata"
},{
    question:"Who was the 2nd chairman of tata group?",
    answer:"Jamsetji Nusserwanji Tata"
},
{
    question:"When did TCS had been Ranked No. 1 in the BT 500 - India's Most Valuable Companies?",
    answer:"2017"
},{
    question:"What is the current revenue in USD for Q4 FY18 with employee strength of 3,94,998?",
    answer:"4.972 Billion"
}];
totalScore=questions.length;
for(let i=0;i<questions.length; i++){
    play(questions[i].question,questions[i].answer);
}
console.log("your Final score is "+score+" out of "+totalScore);

