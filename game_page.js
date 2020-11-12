    Player1_name=localStorage.getItem("Player1_name");
    Player2_name=localStorage.getItem("Player2_name");
    console.log(Player1_name);
    console.log(Player2_name);
    Player1_score=0;
    Player2_score=0;
    document.getElementById("Player1_name").innerHTML=Player1_name+":";
    document.getElementById("Player2_name").innerHTML=Player2_name+":";
    document.getElementById("Player1_score").innerHTML=Player1_score;
    document.getElementById("Player2_score").innerHTML=Player2_score;
    document.getElementById("Player_question").innerHTML="Question turn-"+Player1_name;
    document.getElementById("Player_answer").innerHTML="Answer turn-"+Player2_name;
    question_turn="P1";
    answer_turn="P2";
    
    
    function send(){
        get_word=document.getElementById("word").value;
        word=get_word.toLowerCase();
        console.log("Word in lowercase="+word);
        charAt1=word.charAt(1);
        console.log(charAt1);
        length_divide_2=Math.floor(word.length/2);
        charAt2=word.charAt(length_divide_2);
        console.log(charAt2);
        length_minus_1=word.length-1;
        charAt3=word.charAt(length_minus_1);
        console.log(charAt3);
        remove_charAt1=word.replace(charAt1,"_");
        remove_charAt2=remove_charAt1.replace(charAt2,"_");
        remove_charAt3=remove_charAt2.replace(charAt3,"_");
        console.log(remove_charAt3);
        question_word="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
        input_box="<br>Answer:<input type='text' id='input_check_box'>";
        check_button="<br><br><button class='btn btn-success' onclick='check();'>Check</button>";
        row=question_word+input_box+check_button;
        document.getElementById("output").innerHTML=row;
        document.getElementById("word").value="";
    }
    function check(){
        get_answer=document.getElementById("input_check_box").value;
        answer=get_answer.toLowerCase();
        console.log("Answer in lowercase="+answer);
        if (answer==word)
        {
            if (answer_turn=="P1")
            {
                Player1_score=Player1_score+1;
                document.getElementById("Player1_score").innerHTML=Player1_score;
            } 
            else
            {
                Player2_score=Player2_score+1;
                document.getElementById("Player2_score").innerHTML=Player2_score;
            }
        }
                if (question_turn=="P1")
                {
                    question_turn="P2";
                    document.getElementById("Player_question").innerHTML="Question turn:"+Player2_name;
                } 
                else
                {
                    question_turn="P1"
                    document.getElementById("Player_question").innerHTML="Question_turn:"+Player1_name;
                }
                if (answer_turn=="P1")
                {
                    answer_turn="P2";
                    document.getElementById("Player_answer").innerHTML="Answer_turn:"+Player2_name;
                } 
                else
                {
                    answer_turn="P1";
                    document.getElementById("Player_answer").innerHTML="Answer_turn:"+Player1_name;
                }
                document.getElementById("output").innerHTML="";
            }