
let scaryimage1;
let scaryimage2;
let scaryimage3;
let happyimage1;
let happyimage2;
let happyimage3;
let backgroundimage;

function setup() {
  //You can change the size of the canvas as needed
  createCanvas(500, 500);
backgroundimage=loadImage("https://cdn.glitch.com/31c03e5b-3ed7-47e4-a81c-45680a6fa313%2Fistockphoto-1157846538-1024x1024.jpg?v=1618983695634")  
scaryimage1=loadImage("https://cdn.glitch.com/31c03e5b-3ed7-47e4-a81c-45680a6fa313%2Fjumpscare%20gif2.gif?v=1617830446675")
scaryimage2=loadImage("https://cdn.glitch.com/31c03e5b-3ed7-47e4-a81c-45680a6fa313%2Fjumpscare%20gif.gif?v=1617830401853")
scaryimage3=loadImage("https://cdn.glitch.com/31c03e5b-3ed7-47e4-a81c-45680a6fa313%2Fghost.jfif?v=1618979827936")
happyimage1=loadImage("https://cdn.glitch.com/31c03e5b-3ed7-47e4-a81c-45680a6fa313%2Fsunrise.jpg?v=1618978107141")
happyimage2=loadImage("https://cdn.glitch.com/31c03e5b-3ed7-47e4-a81c-45680a6fa313%2Fhappy.jfif?v=1618978704076")
happyimage3=loadImage("https://cdn.glitch.com/31c03e5b-3ed7-47e4-a81c-45680a6fa313%2Fanimal.jfif?v=1618979994007")
}


  
function draw() {
background(backgroundimage)
  cursor("https://cdn.glitch.com/31c03e5b-3ed7-47e4-a81c-45680a6fa313%2Fdart.webp?v=1617829105795", 16,16);
  //we are trying to make a cursor of a pin image
  // Write your code below this line   
  //Write message saying "warning: shocking images will appear when balloon is pressed"
  //Write message saying "press keys a, b, c, or d for a dfferent balloon to pop each time"
  //Team Member #1's Code
 
  ellipse(50,190,65,90)
  fill(250,150,20)
  line(210,235,210,350)
  
 ellipse(130,190,65,90)
  fill(250,200,25)
  line(50,235,50,350)
  
  ellipse (210,190,70,90)
  line(130,235,130,350)
  //Team Member #2's Code
  fill(20,200,190)
  ellipse(290,190,65,90)
  fill(20,150,221)
  line(290,235,290,350)
  
  ellipse(370,190,65,90)
  fill(220,20,220)
  line(370,235,370,350)
  
  ellipse(450,190,65,90)
  fill(220,50,21)
  line(450,235,450,350)

{
   rect(42,170,15,50)
  fill(311,11,11)
  rect(110,170,35,10)
  rect(135,180,10,20)
   rect(110,190,35,10)
  rect(110,190,10,20)
   rect(110,210,35,10)
  
  rect(190,170,35,10)
  rect(215,170,10,20)
  rect(190,190,35,10)
  rect(215,200,10,20)
  rect(190,210,35,10)
  
  rect(270,170,10,30)
  rect(270,190,35,10)
  rect(290,170,10,50)
  
   rect(355,170,35,10)
  rect(355,170,10,20)
  rect(355,190,35,10)
  rect(380,200,10,20)
  rect(355,210,35,10)
  
  rect(435,170,10,50)
  rect(435,210,30,10)
  rect(455,190,10,30)
rect(435,190,30,10)
  rect(435,170,30,10)
}
 
  
  
if(keyIsPressed){
     if(key==="1"-"7")
  image(scaryimage1,0,0)
if(key==="2")
     image(scaryimage2,0,0)
  if(key==="3")
    image(scaryimage3,0,0)
  if(key==="4")
    image(happyimage1,0,0)
  if(key==="5")
    image(happyimage2,0,0)
 if(key==="6")
    image(happyimage3,0,0)
  
  

}

}    


     
     
function display(scaryimage1){
     image(scaryimage1,50,50)
}
{function display(scaryimage2){
     image(scaryimage2,50,50)
}}
{
  function display(happyimage1){
     image(happyimage1,400,400)
  }
{
  function display(happyimage2){
     image(happyimage2,400,400)
    
      function display(happyimage3){
     image(happyimage3,400,400)
      }}     
        {function display(scaryimage3){
     image(scaryimage3,50,50)
}}}}


