

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




let point2 = new Point(0, cH2, ctx)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let time = 0
const colorsBlue = ['#000fff', '#0aafff', '#0cefff', '#00012f', '#340fff', '#2b7fff', '#000ebf', '#0001ff', '#002fff', '#123fff', '234fff']
const colorsRed = ['#360000', '#750000', '#B50000', '#C20000', '#9C0000']
let randColor = true
let rayonUnivers = 50 
let transition = false 
document.addEventListener('keydown',(e)=>{
    if(e.code==="Space") {    
        rayonUnivers===50 ? rayonUnivers+=200  : rayonUnivers-=200 
        // rayonUnivers+=time 
        // transition = !transition
    }   

})

const update = () => {

    const mouseX = ((Mouse.cursor[0] + 1) / 2) * canvas.width
    const mouseY = ((Mouse.cursor[1] + 1) / 2) * canvas.height
  
    //  randColor = !randColor


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

    const phi = 1.618033988749895
    time += .03

    ctx.fillStyle = `rgba(0,0,0,0.3)`
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    function univers(x, y, colors,rayon) {
        let steps = 1000
        let scale = 5
        let frequency = 2 

        for (let i = 4; i >= 0; i--) {
            ctx.save() 
            ctx.translate(x, y)
            ctx.beginPath()

            for (let x = 0; x < steps; x++) {
                let progress = x / steps
                let angle = 2 * Math.PI * progress
             //   let newRayon = transition ? rayon*10+time : rayon
                let n = simplex.noise4D(time, Math.cos(angle * frequency), Math.sin(angle * frequency), i * .2) * rayon
                scale = (50 + (i * 20)) + n
                ctx.lineTo(Math.cos(angle) * scale, Math.sin(angle) * scale)
            }
            ctx.lineTo(Math.cos(Math.PI * 2) * scale, Math.sin(Math.PI * 2) * scale)
            ctx.strokeStyle = colors[i]
            ctx.stroke()
            ctx.fillStyle = colors[i]
            ctx.fill()

            ctx.closePath()
            ctx.restore()
        }


    }

    function univers2(x, y, colors, rayon) {
        let steps = 1000
        let scale = 20
        let frequency = 2
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(Math.cos(time *Math.random()))

        ctx.beginPath()
        //  ctx.rotate(time*phi)

        
        for (let i = 0; i < steps; i++) {
            let progress = i / steps
            let angle = 2 * Math.PI * progress
            //  let rayon = 300
            //  console.log(radius);
            /*     let n = simplex.noise4D(time, Math.cos(angle * frequency), Math.sin(angle * frequency), x * .2) * 50
                scale = (20 + (x * 20)) + n */
                if (Math.abs(mouseX - a) < 500 && Math.abs(mouseY - a) < 500) {
                    //rayon<400 ? rayon += time *.1 : 300

                }
          
            scale = rayon + (Math.sin(angle * 4) * 80)
            let a = Math.cos(angle) * scale
            let b = Math.sin(angle) * scale
            //  console.log(Math.abs(mouseX,a))
            
            ctx.lineTo(a, b)


            // ctx.rotate(100)

            // ctx.lineWidth = 10
            // ctx.arc(0 ,0, radius *300,0,Math.PI *2)

        }
        ctx.lineTo(Math.cos(Math.PI * 2) * scale, Math.sin(Math.PI * 2) * scale)

        ctx.strokeStyle = Math.random() > 0.5 ? '#000fff' : '#aaeeff'
        ctx.stroke()


        ctx.closePath()
        ctx.restore()


    }



    /*   function darwArrowLookingAt(angle, radius) {
          //   ctx.globalAlpha+= time%1
          ctx.beginPath()
          ctx.fillStyle = '#fff'
         // ctx.arc(Math.cos(time + angle) * radius, Math.sin(time + angle) * radius, 5, 0, Math.PI * 2)
          univers(Math.cos(time + angle) * radius, Math.sin(time + angle) * radius,randColor ? colorsBlue:colorsRed)
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
  
      ctx.restore() */

    // univers(canvas.width*0.25,canvas.height*0.25,colorsBlue)
    // univers(canvas.width * 0.5, canvas.height * 0.5, colorsBlue)
    //    univers(canvas.width*0.75,canvas.height*0.75,colorsRed)
    univers(canvas.width * 0.5, canvas.height * 0.5, colorsBlue,rayonUnivers)
    for (let i = 0; i < 10; i++) {

        univers2(canvas.width * 0.5, canvas.height * 0.5, colorsRed, i * 300)

    }


  
    // univers2(canvas.width * 0.9, canvas.height * 0.5, colorsRed)
    // univers2(canvas.width * 0.1, canvas.height * 0.5, colorsRed)

    /* function triangle(i,j,size) {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle='#fff'
        ctx.moveTo(i,j)
        ctx.lineTo(i-20,j+size)
        ctx.lineTo(i+20,j+size)
        ctx.lineTo(i,j)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }

    triangle(canvas.width/2,canvas.height/2-170,40) */

    requestAnimationFrame(update)
}
update()



