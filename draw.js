const cursor = document.querySelector("div.cursor")

let isMouseDown = true

//move the cursor based on coordinates by assinging function and style to cursor
const moveCursor = function (x, y){
  cursor.style.left = x + "px" //assigning the position of the cursor
  cursor.style.top  = y + "px"  
}


const canvasTag = document.querySelector("canvas.in")
//set up canvas
const setUpCanvas = function (canvas) {
  const w = window.innerWidth
    const h = window.innerHeight
  // const w = document.documentElement.clientWidth
  // const h = document.documentElement.clientHeight;

  const dpi = window.devicePixelRatio //this is to account for retina - same # if normal and x2 if retina
  
  canvas.width = w * dpi //canvas width and height is what we are drawing on
  canvas.height = h * dpi
  canvas.style.width = w + "px" //this is to set up CSS
  canvas.style.height = h + "px"
  
  
  const context = canvas.getContext("2d")//assign the context to 2d
  context.scale(dpi, dpi) //scaling for retina
  
  context.fillStyle = "#B0EB34"
  context.strokeStyle = "#B0EB34"
  context.lineWidth = 80
  // context.blur = 59 + "px"
  context.filter = 'blur(13px)';
  context.lineCap = "round"
  context.lineJoin = "round"
}

setUpCanvas(canvasTag)

//draw based on canvas
const startDraw = function (canvas, x, y){
  const context = canvas.getContext("2d")
  
  //this is for the random colors on each mousedown/up
  // const colors = ["red", "yellow", "blue", "green"]
  // const randomNum = Math.floor(Math.random() * colors.length)
  // context.strokeStyle = colors[randomNum]
  
  context.moveTo(x, y) //move drawing positions based on x + y coordinates with no weird joint lines in between
  
  context.beginPath() // this is to make a brand new path from scratch so the colors update

}

//draw based on three things: canvas, x, and y positions
const moveDraw = function (canvas, x, y) {
  const context = canvas.getContext("2d") //assigning the context to the particular function
  
  if (isMouseDown) { //only draw if the mouse is down
  	context.lineTo(x, y)
  	context.stroke()
  }
  
}

document.addEventListener("mousedown", function(){
  isMouseDown = true //change the isMouseDown variable from false to true bc this is when the mouse is down
  // growCursor()
  startDraw(canvasTag, event.pageX, event.pageY)//only if the mouse down, draw the line according to x y coordinates
})

document.addEventListener("mouseup", function(){
  isMouseDown = false ///change the isMouseDown variable from true to false
  // shrinkCursor()
})

document.addEventListener("mousemove", function (event) {
  moveCursor(event.pageX, event.pageY)  //running the cursor so that it follows the mouse position using function name (event) and mouse position: pageX + pageY //mouveCursor(X,Y) bc we assigned that to function earlier
  moveDraw(canvasTag, event.pageX, event.pageY) //moving the mouse area according to where it is/go to next
})





