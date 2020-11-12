function add_user(){
    Player1_name=document.getElementById("P1_name_input").value;
    Player2_name=document.getElementById("P2_name_input").value;
    localStorage.setItem("Player1 name",Player1_name);
    localStorage.setItem("Player2 name",Player2_name);
    window.location.replace("game_page.html");
}