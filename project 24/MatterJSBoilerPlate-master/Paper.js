class Paper{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:10,
            density:2.193
        }
    this.body = Matter.Bodies.circle(x, y, radius, {options})
    this.radius = radius
    this.image = loadImage("imagesproj24/paperpic.png")
    World.add(world, this.body)
    }
display(){
    ellipseMode(RADIUS)
    //ellipse(this.body.position.x, this.body.position.y, this.radius)
    image(this.image, this.body.position.x - 70, this.body.position.y - 70, this.body.radius-10)
    this.body.scale = (0.5)
}
}