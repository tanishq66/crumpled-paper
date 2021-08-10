class Paper{
    constructor(x,y,r,options){
        var options = {
            restitution:0.6,
            friction:0.5,
            density:1.2,
        }
    this.paper = loadImage(".vscode/paper.png")
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
    World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("pink");
        ellipse(0,0,this.r,this.r);
        pop();
    }
    }
