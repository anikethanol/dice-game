var n1 = Math.random();
n1 = Math.floor(n1*6) + 1;
var randomDice1 = "images/dice"+n1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
var n2 = Math.random();
n2 = Math.floor(n2*6) + 1;
var randomDice2 = "images/dice"+n2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if(n1 > n2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}else if(n1 < n2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "DRAW";
}