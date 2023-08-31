class gun{
    constructor(velocityX,originX,originY){
      this.velocityX = velocityX
      this.originX = originX
      this.originY = originY
      this.velocityY = 0
    }
  
    shoot(){
      this.originX += this.velocityX
      
    }
  
    gravity(){
      this.velocityY += gravityAcc
      this.originY -= this.velocityY
    }
  
    drawGun(){
      fill(231, 177, 10)
      noStroke()
      rect(this.originX,this.originY,25,10,0,5,5,0)
    }
    
    isColide(other){
        return(this.originX + 25 >= other.originX)
    }
  
  }