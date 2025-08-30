
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var bobstrength=1,textpos=600,mode=0,notmoving=0;;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(500,575,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
	rope5=new rope(bob5.body,roofObject.body,80, 0)
	
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
   if (textpos>-150){textpos-=1.25}else {textpos=750};
 textSize(20) 
 text("No of bobs to be displaced- " +bobstrength,200,50);
 textSize(10)   
 text("Read the README.md",textpos,599.5) 
  
//text(notmoving+", "+ Math.round(bob5.body.position.x)+", "+Math.round(bob5.body.position.y)+", "+Math.round(bob1.body.position.x)+", "+Math.round(bob1.body.position.y),150,250) 
if (mode==1 && notmoving==0){
textSize(30)
text("Bobs unlocking",250,150)}
else if (notmoving==1)
{textSize(30)
	text("Bobs locked",295,150)} 

if (keyCode === RIGHT_ARROW){
		mode+=1;
	}if (mode==2){
		mode=0;
	}
	if (mode==0)
  	{notmoving==0;}
  else if (mode==1 && ((Math.round(bob1.body.position.x))==321 ||(Math.round(bob1.body.position.x))==320 ||(Math.round(bob1.body.position.x))==319 )
  && (Math.round(bob1.body.position.y))==575 && 
  ((Math.round(bob5.body.position.x))==480 || (Math.round(bob5.body.position.x))==479 || (Math.round(bob5.body.position.x))==481)
  && ((Math.round(bob5.body.position.y))==576|| (Math.round(bob5.body.position.y)==575)))
	 {notmoving=0;}
  else
  	notmoving=1;


}
function keyPressed(){
	
	if (notmoving==0){
	if (keyCode === UP_ARROW){
		if (bobstrength>=1){
			Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-100,y:-75});
	}if (bobstrength>=2){
		Matter.Body.applyForce(bob2.body, bob2.body.position,{x:-100,y:-75});
	}if (bobstrength>=3){
		Matter.Body.applyForce(bob3.body, bob3.body.position,{x:-100,y:-75});
	}if (bobstrength>=4){
		Matter.Body.applyForce(bob4.body, bob4.body.position,{x:-100,y:-75});
	}}
}
	if (keyCode === ' '){
		bobstrength+=1;
	}
	if (bobstrength>4){
		bobstrength=1;
	}
	
}
