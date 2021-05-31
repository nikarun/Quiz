var readlineSync=require('readline-sync');
var userName=readlineSync.question("Whats ur name?")
console.log("hey "+userName+" Welcome to DO YOU KNOW TCS?");
var score=0;
var totalScore=0;
var exit=false;
function play(question,answer){
    var q1=readlineSync.question(question);
    if(q1==='e') exit=true;
    else if((typeof(q1)==="string") && q1.toLowerCase()===answer.toLowerCase()){
        console.log("Right!");
        ++score;
    }
    else{
        console.log("Wrong Guess!")
        console.log("correct answer is "+answer);
    }
    console.log("current score is "+score);
        console.log("---------");
        console.log("Press e to exit");
}
var questions=[
    {question:`in which year was TCS established?
a 1968
b 1978
c 1965
`,
answer:"a"
},{
    question:`Who is the founder of tcs?
     a Ratan Tata
     b J.R.D Tata
     c Ajim Premji
     `,
    answer:"b"
},{
    question:`Who was the 2nd chairman of tata group?
    a Ratan Tata
    b Jamsetji Nusserwanji Tata
    c Faquir Chand Kohli
    `,
    answer:"b"
},
{
    question:`When did TCS had been Ranked No. 1 in the BT 500 - India's Most Valuable Companies?
    a 2011
    b 2018
    c 2017
    `,
    answer:"c"
},{
    question:`What is the current revenue in USD for Q4 FY18 with employee strength of 3,94,998?
    a 4.972 Billion
    b 8.89 Billion
    c 3.56 Billion
    `,
    answer:"a"
}];
totalScore=questions.length;
for(let i=0;i<questions.length; i++){
    if(!exit) play(questions[i].question,questions[i].answer);
}
console.log("your Final score is "+score+" out of "+totalScore);

