class Ground {
    constructor(x,y,width,height) {
       
       var ground_options = {
            isStatic:true
    }
        
       this.Body = Bodies.rectangle(x,y,width,height,ground_options);
       World.add(world,this.Body);

       this.width = width;
       this.height = height;
    }

    display() {
       rectMode(CENTER);
       fill("yellow");
       rect(this.Body.position.x,this.Body.position.y,this.width,this.height)
       
    }
}