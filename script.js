let player1 = "X";
let player2 = "O";


let turn = 0;

let fields = [{
    "field1":"",
    "field2":"",
    "field3":"",
    "field4":"",
    "field5":"",
    "field6":"",
    "field7":"",
    "field8":"",
    "field9":""
}]


function startGame(selection){
    if(fields[0][selection] == ""){
        if (turn == 0 || turn == 2 || turn == 4 || turn == 6 || turn == 8){
            document.getElementById(selection).innerHTML = player1;
            fields[0][selection] = "X";
            changePlayer();
        }else {
            document.getElementById(selection).innerHTML = player2;
            fields[0][selection] = "O";
            changePlayer();
        } 
    } 
}

function changePlayer(){
    turn++;
    if (turn >= 5){
        checkWin();
    }
}

function checkWin(){
    let winner;
    if(fields[0]["field1"] == fields[0]["field2"] && fields[0]["field2"] == fields[0]["field3"]){
        winner = fields[0]["field1"];
    }
    if(fields[0]["field4"] == fields[0]["field5"] && fields[0]["field5"] == fields[0]["field6"]){
        winner = fields[0]["field4"];
    }
    if(fields[0]["field7"] == fields[0]["field8"] && fields[0]["field8"] == fields[0]["field9"]){
        winner = fields[0]["field7"];
    }
    if(fields[0]["field1"] == fields[0]["field4"] && fields[0]["field4"] == fields[0]["field7"]){
        winner = fields[0]["field1"];
    }
    if(fields[0]["field2"] == fields[0]["field5"] && fields[0]["field5"] == fields[0]["field8"]){
        winner = fields[0]["field2"];
    }
    if(fields[0]["field3"] == fields[0]["field6"] && fields[0]["field6"] == fields[0]["field9"]){
        winner = fields[0]["field3"];
    }
    if(fields[0]["field1"] == fields[0]["field5"] && fields[0]["field5"] == fields[0]["field9"]){
        winner = fields[0]["field1"];
    }
    if(fields[0]["field3"] == fields[0]["field5"] && fields[0]["field5"] == fields[0]["field7"]){
       winner = fields[0]["field3"]; 
    }
    if (winner){
        win();
    }
}

function restartGame(){
    turn = 0;
    fields = [{
        "field1":"",
        "field2":"",
        "field3":"",
        "field4":"",
        "field5":"",
        "field6":"",
        "field7":"",
        "field8":"",
        "field9":""
    }]
    let field = `field`;
    for(let i = 1; i<=9; i++){
        document.getElementById(field+`${i}`).innerHTML = "";
    }
    document.getElementById("winScreen").setAttribute("style","display: none;");
    document.getElementById("gameDiv").removeAttribute("style","display: none;");
}

function activateWinScreen(time){
    timeOut(time);
}


function timeOut(time){
    setTimeout(function() {
        // Code, der erst nach x-time Sekunden ausgeführt wird
        document.getElementById("winScreen").removeAttribute("style");
        document.getElementById("gameDiv").setAttribute("style","display: none;");
      }, time);
}

function applaus(){
    var audio = new Audio("./sound/applaus.mp3");
    audio.play();
}

function win(){
    activateWinScreen(2000);
    applaus();
    console.log("win");
}
