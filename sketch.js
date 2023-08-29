const timeSteps = 5000;
let downSpeed = -0.0001
let gravityAcc = downSpeed/timeSteps
let bulletSpeed = 28
let gun1,monkey1
let follow;
let bgGraphic;
let div = document.querySelector('.container')

function setup() {
  createCanvas(400,225,WEBGL).parent(div)
  createDomEle()
  generateStars(1000)
  monkey1 = new monkey(350,-250)
  gun1 = new gun(bulletSpeed/timeSteps ,-800,-225)
  
}

function draw() {
  background(0)
  drawStars()
  for(i = 0; i < timeSteps; i++){
  if(gun1.isColide(monkey1)){
    break
  }
  monkey1.gravity()
  gun1.shoot()
  gun1.gravity()}
  follow = 0
  if(bulletSpeed < 27 && gun1.originY > 225){
    follow = gun1.originY - 225
  }
  camera(0,follow,600,-200,follow,-600,0,1,0)
  gun1.drawGun()
  monkey1.drawMonkey()
}
