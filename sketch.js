let page = 0;
let maze;
let stairs;
let train; 
let youLose;
let mySound1;
let mySound2;
let mySound3;

function preload() {
  maze=loadImage("https://ak.picdn.net/shutterstock/videos/4272389/thumb/1.jpg")
  stairs=loadImage("https://cdn.glitch.com/5b1ab41d-2246-4751-83fb-588dcf801da6%2Fstairs%20up%20or%20down.jpg?v=1621458605082")
train=loadImage("https://cdn.glitch.com/5b1ab41d-2246-4751-83fb-588dcf801da6%2Ftrain%20for%20coding.jpg?v=1621458918051")
  youLose=loadImage("https://cdn.glitch.com/5b1ab41d-2246-4751-83fb-588dcf801da6%2Fyou%20lose.jpg?v=1621459130429")
  mySound1=loadSound("https://cdn.glitch.com/5b1ab41d-2246-4751-83fb-588dcf801da6%2F10397_1372095269.mp3?v=1622062143059")
  mySound2=loadSound("https://cdn.glitch.com/5b1ab41d-2246-4751-83fb-588dcf801da6%2F13855_1459866225.mp3?v=1622063200267")
  mySound3=loadSound("https://cdn.glitch.com/5b1ab41d-2246-4751-83fb-588dcf801da6%2F17427_1461866059.mp3?v=1622062593541")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  

  // PAGE 0 

  if (page === 0) {
    setup()
  text("choose the narrow path or the long path to decide your fate. Press N for the narrow path or L for the longer path", 60,310,200,5000)
    image(maze,0,0,300,300)
    mySound1.play();
   if(keyIsPressed){
    if(key==="n"){
     page=1
      if(key=="l")
        page=4
   }}
    if(key==="l"){
     page=3
    }
  }
  
    // PAGE 1 
  if(page ===1) { 
    setup()
  text('Guard your life. Up the stairs.Or down the stairs. Press D for down.Press U for up',20,310,200,4000)
    image(stairs,0,0,300,300)
      mySound3.play();
    
    if(keyIsPressed){
      if(key==="d"){
        page=2
      }
        
      if(key==="u") {
        page=3
      }
  } 
  }
  
  // PAGE 2 
  else if (page === 2) {
    setup()
    text("You have escaped the maze on the train! YOU WIN", 20,310,200,4000)
    image(train,0,0,300,300)
     mySound2.play();
  }


  // PAGE 3 
  else if (page === 3) {
    setup()
    text('YOU LOSE, play again, click R to restart?',20,310,200,400)
    if(keyIsPressed){
      if(key==="r"){
        page=0
      }}
    image(youLose,0,0,300,300)
  }

}