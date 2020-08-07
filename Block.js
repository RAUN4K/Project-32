class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
  }
    display(){
    if(this.body.speed < 3){
      super.display();
    }
    else{
      this.Visiblity = this.Visiblity - 5;
      push();
      World.remove(world,this.body);
      tint(255,this.Visiblity);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
    }
    score(){
      if(this.Visiblity < 0 && this.Visiblity >- 105){
        score++;
      }
    }

};
