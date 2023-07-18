var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var img1 = "images/dice" + player1 + ".png";
var img2 = "images/dice" + player2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",img1);
document.querySelectorAll("img")[1].setAttribute("src",img2);

if(player1>player2){
    document.querySelector("h1").innerHTML="Winner is player1";
}
else if(player2>player1){
    document.querySelector("h1").innerHTML="Winner is player2";
}
else{
    document.querySelector("h1").innerHTML="It is a tie";
}