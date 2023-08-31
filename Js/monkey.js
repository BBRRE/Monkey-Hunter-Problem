class monkey{
    constructor(originX,originY){
      this.originX = originX
      this.originY = originY
      this.velocityY = 0
    }
  
    gravity(){
      this.velocityY += gravityAcc
      this.originY -= this.velocityY
    }
  
    drawMonkey(){
      fill(76,75,22)
      noStroke()
      rect(this.originX,this.originY,50,50)
    }
  
  }