class Stone{
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.x=x,
        this.y=y,
        this.r=r
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        //this.width = 50;
        //this.height = 50;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        ellipse(RADIUS)
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}