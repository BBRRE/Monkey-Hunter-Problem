function createDomEle(){
    slider = createSlider(10, 80, 35);
    slider.style('width', '80px');
    slider.style('height','5px')
    slider.class('slider')
    tag = createDiv('Bullet speed')
    tag.class('slider-label')
    btn = createButton('Reset')
    btn.class('btn')
    btn.mousePressed(resetSim)
    bulletSpeed = slider.value()
    tag.parent(div)
    slider.parent(div)
    btn.parent(div)
  }
  
  function resetSim(){
    bulletSpeed = slider.value()
    monkey1 = new monkey(350,-250)
    gun1 = new gun(bulletSpeed/timeSteps ,-800,-225)
    draw()
    console.log('reset')
  }