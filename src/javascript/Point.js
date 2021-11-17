class Point {
    constructor(x,y,ctx,color="#fff",size=5) {
        this.ctx = ctx
        this.x = x
        this.y= y
        this.color=color
        this.size = size
        this.direction = Math.random() * Math.PI * 2
        this.lifespan =Math.random()*5 
        this.beginlifespan = this.lifespan

    }

    /* update() {
        this.x +=Math.cos(this.direction)
        this.y +=Math.sin(this.direction)
        this.lifespan -= 0.01
        this.size+=0.02
    }

    draw() {
        this.opacity = this.lifespan /this.beginlifespan
        this.ctx.save()
        this.ctx.translate(this.x,this.y)
        this.ctx.beginPath()
        this.ctx.fillStyle=this.color
        this.ctx.globalAlpha = this.opacity
        this.ctx.arc(0,0,this.size,0,Math.PI*2,true)
        this.ctx.fill()
        this.ctx.closePath()
        this.ctx.restore()
        this.update()
        
    } */

    update() {
        this.lifespan -=0.05
        this.x += Math.cos(this.direction) 
        this.y += Math.sin(this.direction) +1
        this.opacity = this.lifespan/this.beginlifespan
    }

    draw() {
        this.ctx.save()
        this.ctx.translate(this.x,this.y)
        this.ctx.beginPath()
        this.ctx.fillStyle=this.color
        this.ctx.globalAlpha = this.opacity
        this.ctx.arc(0,0,this.size,0,Math.PI*2,true)
        this.ctx.fill()
        this.ctx.closePath()
        this.ctx.restore()
     //   this.update()
    }
}

export default Point 