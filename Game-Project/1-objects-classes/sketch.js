//create a variable to hold one ball
let b;
let anotherBall;
let thirdBall;
let s;
let r;

function setup() {
  createCanvas(800, 400);
  s = new square(0,200,20,"blue",4,5)
  b = new Ball(0, 100,15,"red",4,5); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,100,"green",4,5);
  thirdBall = new Ball(500,40,50,"purple",4,5);
  r = new square (400,50,70, "orange",4,5);
}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    thirdBall.drawBall();
    thirdBall.moveBall();
    anotherBall.drawBall();
    anotherBall.moveBall();
    s.drawsquare();
    s.movesquare();
    r.drawsquare();
    r.movesquare();
}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,size,color,speed,speed2){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.size=size;
        this.speed=speed;
        this.speed2=speed2;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,this.size,this.size);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.speed;
		this.y = this.y+this.speed2;
    if (this.x == 800){
      this.speed= -this.speed;
    }
    if (this.y == 400){
      this.speed2= -this.speed2;
    }
    if (this.x == 0){
      this.speed= -this.speed;
    }
    if (this.y == 0){
      this.speed2= -this.speed2;
    }
	}
}
class square {

	constructor(x,y,size,color,speed,speed2){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.size=size;
        this.speed = speed;
        this.speed2 = speed2;
	}
	drawsquare(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    rect(this.x,this.y,this.size,this.size);
	}
	movesquare(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.speed;
		this.y = this.y+this.speed2;
  if (this.x == 800){
    this.speed= -this.speed;
  }
  if (this.y == 400){
    this.speed2= -this.speed2;
  }
  if (this.x == 0){
    this.speed= -this.speed;
  }
  if (this.y == 0){
    this.speed2= -this.speed2;
  }
  }
}
