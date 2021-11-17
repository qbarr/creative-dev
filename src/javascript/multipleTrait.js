import { ContextExclusionPlugin } from "webpack"

class multipleTrait {
    constructor(gridSize=15) {
        this.mouseX = ((Mouse.cursor[0] + 1)/2) * canvas.width
        this.mouseY = ((Mouse.cursor[1] + 1)/2) * canvas.height
        this.gridSize=gridSize
    }

    draw() {
         for(let i=0;i<this.gridSize;i++) {
             for(let j=0;j<this.gridSize;j++) {
                this.drawArrowLookingAt(i,j)
             }
         }
    }

    drawArrowLookingAt() {
        
    }
}

export default multipleTrait