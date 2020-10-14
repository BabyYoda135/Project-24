class ground{
  constructor(x, y, width, height){
      this.body = Matter.Bodies.rectangle(x, y, width, height, {isStatic:true})
      this.height = height
      this.width = width
      World.add(world, this.body)
  }
    display(){
    fill("brown")
    rectMode(CENTER)
    rect(this.body.position.x, this.body.position.y, this.width, this.height)
    
    }

}