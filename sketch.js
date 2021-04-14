var roof,rope1, bobobject1, bobobject2, bobobject3, bobobject4, bobobject5,bob 
const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 const Body = Matter.Body; 
 const Render = Matter.Render; 
 
 function setup() { 
	 createCanvas (800, 700);
	 
	 Engine - Engine.create(); 
	 World - Engine.world; 
	
	 roof - new Roof(350,100, 300, 30); 
	 World.add(world, roof);
	  
	 bobobject1 - new Bob(250, 300); 
	  bobobject2 - new Bob(300, 300); 
	  bobobject3 - new Bob(350, 300); 
	  bobobjecta - new Bob(400, 300); 
	  bobobjects - new Bob(450,300);
	  
	  ropel = new Rope(bobobject1.body,roof.body, -100,0); 
	  world.add(world, rope1); 
	  
	  rope2 = new Rope(bobobject2.body, roof.body,-50,0);
	   World.add(world, rope2);

	   rope3 = new Rope(bobObject3.body,roof.body,0,0); 
	   World.add(world, rope3);
	   
	   rope4 = new Rope(bobobject4.body,roof.body,+50,0); 
	   World.add(world, rope4); 
	   
	   ropes = new Rope(bobobject5.body,roof.body,+100,0);
	    World.add(world, rope5); 

		Engine.run(engine);

 }

 function draw(){

	backgrounf("white");
	Engine.update(engine);
 
	roof.display();

	bobobject1.display();
	bobobject2.display();
	bobobject3.display();
    bobobject4.display();
	bobobject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
 }

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobobject1.body,bobobject2.body.position,{x:-730,y:0});
	}
}
