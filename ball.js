class Paper {
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 20
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("images/paper.png");
    
        
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(255)
        image(this.image,0,0,this.r,this.r);
        this.body.debug = true;
        pop();
   }
}