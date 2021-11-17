

import Mouse from "./utils/mouse"
import Easing from "./utils/easing"
import Point from "./Point"
import NoiseID from "./utils/simpleNoiseID"
import SimplexNoise from "./utils/simplexNoise"

const canvas = document.querySelector('.main-canvas')
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth * window.devicePixelRatio
canvas.height = window.innerHeight * window.devicePixelRatio
canvas.style.maxWidth = window.innerWidth
canvas.style.maxHeight = window.innerHeight

let canvasWidth = (canvas.width)
let canvasHeight = (canvas.height)
let cW2 = (canvas.width / 2)
let cH2 = (canvas.height / 2)

let maskLoaded = false
let noise = new NoiseID()
let simplex = new SimplexNoise()

// à chaque image : 60fps

/* const update = () => {

    time += .03


    function darwArrowLookingAt(angle, radius) {
        //   ctx.globalAlpha+= time%1
        ctx.beginPath()
        ctx.fillStyle = '#fff'
        ctx.arc(Math.cos(time + angle) * radius, Math.sin(time + angle) * radius, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
    ctx.fillStyle = '#000'
    ctx.globalAlpha = 0.1
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 1
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)

    for (let i = 0; i < 30; i++) {
        //  console.log(time);
        drawCircleAtAngle(i * .2 *  time, i * 30 * Math.cos(time * .3))
    }
    ctx.restore()

    requestAnimationFrame(update)


} */



let point1 = new Point(0,cH2,ctx)

let point2 = new Point(0,cH2,ctx)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let time =0
const colorsBlue = ['#000fff','#0aafff','#0cefff','#00012f','#340fff','#2b7fff','#000ebf','#0001ff','#002fff','#123fff','234fff']
const colorsRed = ['#360000','#750000','#B50000','#C20000','#9C0000']

const update = () => {

    
    const mouseX = ((Mouse.cursor[0] + 1)/2) * canvas.width
    const mouseY = ((Mouse.cursor[1] + 1)/2) * canvas.height





/*     ctx.clearRect(0,0,canvasWidth,canvasHeight)

    point1.x = mouseX
    point1.y = mouseY
    point1.draw()

    let distanceX = point1.x -point2.x
    distanceX /=10 
    point2.x += distanceX

    let distanceY = point1.y -point2.y
    distanceY /=10 
    point2.y += distanceY
    point2.draw() */

   /* 
    ctx.fillStyle='#000'
    ctx.globalAlpha=0.1
    ctx.fillRect(0,0,canvasWidth,canvasHeight)
    ctx.globalAlpha =1
    points.push(new Point(mouseX,mouseY,ctx,'#ffffff',2))
    points.forEach(point=> {
        point.draw()
    })
    points = points.filter(point => point.lifespan >0) */



    //--------------------NOISE ------------------------
    let steps = 1000
    let scale = 5
    let frequency = 2

    time+=.04


    ctx.clearRect(0,0,canvasWidth,canvasHeight)
        
    const phi =1.618033988749895
    function univers(x,y,colors) {
        for(let i=4;i>=0;i--) {
            ctx.save()
            ctx.translate(x,y)
            ctx.beginPath()
    
            for(let x=0;x<steps;x++) {
                let progress = x/steps 
                let angle = 2 * Math.PI * progress
                let n = simplex.noise4D(time,Math.cos(angle *frequency),Math.sin(angle*frequency),i*.2) *50
                scale = (20 + (i *20)) +n
                ctx.lineTo(Math.cos(angle) * scale,Math.sin(angle) * scale)
            }
            ctx.lineTo(Math.cos(Math.PI * 2) * scale,Math.sin(Math.PI *2) * scale)
            ctx.strokeStyle = colors[i]
            ctx.stroke()
            ctx.fillStyle=colors[i]
            ctx.fill()

            ctx.closePath()
            ctx.restore()
        } 

    }

    
    function darwArrowLookingAt(angle, radius) {
        //   ctx.globalAlpha+= time%1
        ctx.beginPath()
        ctx.fillStyle = '#fff'
       // ctx.arc(Math.cos(time + angle) * radius, Math.sin(time + angle) * radius, 5, 0, Math.PI * 2)
        univers(Math.cos(time + angle) * radius, Math.sin(time + angle) * radius, colorsBlue)
        ctx.fill()
        ctx.closePath()
    }
    ctx.fillStyle = '#000'
    ctx.globalAlpha = 0.1
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 1
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)

    for (let i = 0; i < 4; i++) {
        //  console.log(time);
        darwArrowLookingAt(i * 10 * .2 *  time, i * 10 * 30 * Math.sin(time * .3))
    }

    ctx.restore()

 /*    univers(canvas.width*0.25,canvas.height*0.25,colorsBlue)
    univers(canvas.width*0.75,canvas.height*0.75,colorsRed)

 */
    

    requestAnimationFrame(update)
}
update()




// let img = new Image()
// img.src = "https://miro.medium.com/max/1068/0*WwAJP2U-pFbydOfi.jpeg"
// img.onload = ()=>{
//     console.log("l'image est chargée")
// }

// let mask = new Image()
// mask.src = "https://images-ext-2.discordapp.net/external/iYBUoq3zm0M5LJDbHAX8xSMU0ZZGHQjaf60XYRcPD9U/http/designinteractif.gobelins.fr/wp-content/uploads/2018/11/cropped-Logo-Gobelins-1.png"
// mask.onload = () => {
//     maskLoaded = true
// }

// Blabla

// let canvasWidth = (canvas.width)
// let canvasHeight = (canvas.height)
// let cW2 = (canvas.width / 2)
// let cH2 = (canvas.height / 2)

// ctx.beginPath()
// ctx.strokeStyle = '#00aa00'
// ctx.moveTo(canvasWidth / 2 - 50, canvasHeight / 2 + 50)
// ctx.lineTo(canvasWidth / 2, canvasHeight / 2 - 50)
// ctx.lineTo(canvasWidth / 2 + 50, canvasHeight / 2 + 50)
// ctx.lineTo(canvasWidth / 2 - 50, canvasHeight / 2 + 50)
// ctx.stroke()
// ctx.closePath()


