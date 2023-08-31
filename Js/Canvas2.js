let div = document.querySelector('.canvas2-cont')
const g = 0.02;
let xv = 10;
let timeSteps = 1000
let extraCanvas;
let gunArr = []

class gun2{
    constructor(vx,r,g,b){
        this.vx = vx
        this.vy = 0
        this.x = 50 
        this.y = 200
        this.r = r
        this.g = g
        this.b = b
    }

    gravity(){
        this.vy += g
        this.y += this.vy
      }

      isColide(other){
        return(this.x <= other.x)
      }

    draw(){
        extraCanvas.fill(this.r,this.b,this.g)
        extraCanvas.noStroke()
        extraCanvas.circle(this.x,this.y,2)
    }

    shoot(){
        this.x += this.vx * 1.9
        this.y -= this.vx
    }
}

class monkey2{
    constructor(){
        this.x = 300
        this.y = 60
        this.vy = 0
    }

    gravity(){
        this.vy += g
        this.y += this.vy
      }
    
      draw(){
        fill(255,0,40)
        noStroke()
        rect(this.x,this.y,10)
      }

}




function setup(){
    canvas2 =createCanvas(400,800)
    extraCanvas = createGraphics(400,800)
    extraCanvas.clear()
    canvas2.parent(div)
    gunn = new gun2(2,255)
    gunArr.push(gunn)
    monkeyy = new monkey2()
    div2 = createDiv('click for new projectile speed')
    div2.parent(div)
    div2.class('Label')
}

function draw(){
    background(0)
    
    if (gunn.isColide(monkeyy)){
    gunn.gravity()
    gunn.shoot() 
    gunn.draw()
    monkeyy.draw()
    monkeyy.gravity()
    }
    monkeyy.draw()
    image(extraCanvas,0,0)

}

function mousePressed(){
    monkeyy = new monkey2()
    gunn = new gun2(random(0.5,2),random(255),random(255),random(255))
}