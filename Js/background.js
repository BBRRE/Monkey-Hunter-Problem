let stars = [];

function generateStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    let x = random(-width * 2,width * 2);
    let y = random(-300,3000);
    let size = random(1, 5);
    let brightness = random(50, 255);
    stars.push({ x, y, size, brightness });
  }
}

function drawStars() {
  for (let star of stars) {
    fill(star.brightness);
    noStroke();
    ellipse(star.x, star.y, star.size, star.size);
  }
}
