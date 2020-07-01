class BoxY {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.visiblity = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/c.jpeg");
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
  }

  else{
    World.remove(world, this.body);
     push();
     this.visiblity = this.visiblity - 5;
     tint(255,this.visiblity);
     image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);
     pop();
  }
  }
  
  score(){
    if(this.visibility < 0 && this.visibilty > -105){
      score++;
    }
  }
};