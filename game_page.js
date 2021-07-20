player1_name=localStorage.getItem("player1")
player2_name=localStorage.getItem("player2")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+" : "
document.getElementById("player2_name").innerHTML=player2_name+" : "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="Question turn- "+player1_name
document.getElementById("player_answer").innerHTML="Answer turn- "+player2_name
function send(){
    var get_word=document.getElementById("word").value
    word=get_word.toLowerCase()
    console.log(word)
    var charAt1=word.charAt(1)
    console.log(charAt1)
   half_length=Math.floor(word.length/2)
   var charAt2=word.charAt(half_length)
   var lengthminus1=word.length-1
   var charAt3=word.charAt(lengthminus1)
   var remove_1=word.replace(charAt1,"_")
   var remove_2=remove_1.replace(charAt2,"_")
   var remove_3=remove_2.replace(charAt3,"_")

question_word="<h4 id='word_display'>Q. "+remove_3+"</h4>"
input_box="<br>Answer :  <input type='text' id='input_box'>"
Check1="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row=question_word+input_box+Check1
document.getElementById("output").innerHTML=row
document.getElementById("word").value=""
}
var question_turn="player1"
var answer_turn="player2"
function check(){
var user_answer=document.getElementById("input_box").value
var answer_lower=user_answer.toLowerCase()
if (answer_lower==word){
    if (answer_turn=="player1"){
    player1_score=player1_score+1
    document.getElementById("player1_score").innerHTML=player1_score
    }
    else{
        player2_score=player2_score+1
        document.getElementById("player2_score").innerHTML=player2_score   
    }
}
if (question_turn=="player1"){
question_turn="player2"
document.getElementById("player_question").innerHTML="Question turn : "+ player2_name
}
else{
    question_turn="player1"
    document.getElementById("player_question").innerHTML="Question turn : "+ player1_name
}
if (answer_turn=="player1"){
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML="Answer turn : "+ player2_name
    }
else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer turn : "+ player1_name
    }
document.getElementById("output").innerHTML=""
}