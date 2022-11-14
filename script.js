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
    if (turn == 0 || turn == 2 || turn == 4 || turn == 6 || turn == 8){
        document.getElementById(selection).innerHTML = player1;
        fields[0][selection] = "X";
        changePlayer();
        checkWin();
    }else {
        document.getElementById(selection).innerHTML = player2;
        fields[0][selection] = "O";
        changePlayer();
        checkWin();
    }
    
}


function changePlayer(){
    turn++;
}

function checkWin(){
    if (turn >= 5){
        if(fields[0]["field1"] == fields[0]["field2"] && fields[0]["field2"] == fields[0]["field3"]) 
        console.log("win")
    }
    if (turn >= 5){
        if(fields[0]["field1"] == fields[0]["field5"] && fields[0]["field5"] == fields[0]["field9"]) 
        console.log("win")
    }
    if (turn >= 5){
        if(fields[0]["field1"] == fields[0]["field4"] && fields[0]["field4"] == fields[0]["field7"]) 
        console.log("win")
    }
    if (turn >= 5){
        if(fields[0]["field2"] == fields[0]["field5"] && fields[0]["field5"] == fields[0]["field8"]) 
        console.log("win")
    }
    if (turn >= 5){
        if(fields[0]["field3"] == fields[0]["field6"] && fields[0]["field6"] == fields[0]["field9"]) 
        console.log("win")
    }
    if (turn >= 5){
        if(fields[0]["field7"] == fields[0]["field8"] && fields[0]["field8"] == fields[0]["field9"]) 
        console.log("win")
    }
    if (turn >= 5){
        if(fields[0]["field4"] == fields[0]["field5"] && fields[0]["field5"] == fields[0]["field6"]) 
        console.log("win")
    }
    if (turn >= 5){
        if(fields[0]["field3"] == fields[0]["field5"] && fields[0]["field5"] == fields[0]["field7"]) 
        console.log("win")
    }
}

function restartGame(){
    if (turn > 9){
        turn = 0;
    }
}



