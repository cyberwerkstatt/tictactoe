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
        fields[selection] = player1;
        changePlayer();
    }else {
        document.getElementById(selection).innerHTML = player2;
        fields[selection] = player2;
        changePlayer();
    }
    chekWin();
}


function changePlayer(){
    turn++;
}

function chekWin(){
   
    if (turn >= 3){
        for(i = 1; i >= 9; i++){
            idOfField = fields[0][`field${i}`];
            console.log(idOfField)
        }
    }
    
}

function restartGame(){
    if (turn > 9){
        turn = 0;
    }
}



