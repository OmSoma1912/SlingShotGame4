class Spring{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }

    attach(body){
        this.Chain.bodyA = body;
    }
    
    fly(){
        this.Chain.bodyA = null;
     }

    display(){
        if(this.Chain.bodyA){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x , pointB.y);
        }
    }
}