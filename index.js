function random1(randomNumber1){
  var randomNumber1=Math.floor(Math.random()*6+1);
  return "images/dice" + randomNumber1 + ".png";
}

document.querySelectorAll("img")[0].setAttribute("src",random1());
document.querySelectorAll("img")[1].setAttribute("src",random1());

function winner(){
  var image1 = document.querySelectorAll("img")[0].getAttribute("src");
  var image2 = document.querySelectorAll("img")[1].getAttribute("src");
  if(image1 > image2){
    return "Player 1 Wins!";
  }
  else {
    if(image2 > image1){
      return "Player 2 Wins!";
    }
    else return "Draw!";
  }
}

document.querySelector("h1").innerHTML=winner();
