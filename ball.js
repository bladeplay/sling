class Ball extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
    }
    display() {
      super.display();
      strokeWeight(4);
      stroke(20,23,30)
    }
  }
  