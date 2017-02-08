 // robottino statico sotto

function setup() {
  createCanvas(720,480);
  strokeWeight(2);

}

function draw() {
  
 background(255,255,255,150);
 
 //Neck
 
 stroke(0);
 line(mouseX,mouseY-150, mouseX,mouseY-50);
 line(mouseX+10,mouseY-150, mouseX+10,mouseY-50);
 line(mouseX+20,mouseY-150, mouseX+20,mouseY-50);

 //Antennas
 
 line(mouseX+10,mouseY-180,mouseX-30,mouseY-230);
 line(mouseX+10,mouseY-180,mouseX+40,mouseY-290);
 line(mouseX+10,mouseY-180,mouseX+90,mouseY-160);

 //Body
 
 rectMode(CENTER);
 ellipseMode(CENTER);
 noStroke();
 
 fill(150);
 ellipse(mouseX,mouseY+75,80,80);
 fill(20);
 rect(mouseX,mouseY,100,150);
 fill(150);
 rect(mouseX,mouseY-40,100,10);
 
 //Head
 
 fill(20);
 ellipse(mouseX+10,mouseY-180,100,100);
 fill(255);
 ellipse(mouseX+20,mouseY-190,30,30);
 fill(0);
 ellipse(mouseX+20,mouseY-190,6,6);
 fill(150);
 ellipse(mouseX-10,mouseY-190,12,12);
 fill(150);
 ellipse(mouseX+25,mouseY-215,10,10);
 fill(150);
 ellipse(mouseX+35,mouseY-170,8,8);
 
 /* Robot statico
 
 //Neck
 
 stroke(0);
 line(width/2,150, width/2,250);
 line(width/2+10,150, width/2+10,250);
 line(width/2+20,150, width/2+20,250);

 //Antennas
 
 line(width/2+10,120,330,70);
 line(width/2+10,120,400,10);
 line(width/2+10,120,450,140);

 //Body
 
 rectMode(CENTER);
 ellipseMode(CENTER);
 noStroke();
 
 fill(150);
 ellipse(width/2,375,80,80);
 fill(20);
 rect(width/2,300,100,150);
 fill(150);
 rect(width/2,260,100,10);
 
 //Head
 
 fill(20);
 ellipse(width/2+10,120,100,100);
 fill(255);
 ellipse(width/2+20,110,30,30);
 fill(0);
 ellipse(width/2+20,110,6,6);
 fill(150);
 ellipse(width/2-10,110,12,12);
 fill(150);
 ellipse(width/2+25,85,10,10);
 fill(150);
 ellipse(width/2+35,130,8,8);
*/
}