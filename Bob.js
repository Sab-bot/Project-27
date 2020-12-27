class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
	
		
		this.body=Bodies.circle(x, y, r, options);
		this.r=r
		World.add(world, this.body);
 
	}
	display(){
			
			var angle =this.body.angle;		

			push()
			translate(this.body.position.x, this.body.position.y);
			rotate(angle);
			ellipseMode(RADIUS);
			strokeWeight(3);
			fill("green")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}