
//on creer un cursor avec css et le nomme cursor
const cursor = document.querySelector("div.cursor");
//on selection le canvas
const canvasIn = document.querySelector("canvas");

//au depart la mouse down n'est pas activé
let isMouseDown = false;

// when i hold the mouse down, make the cursor bigger
// const growCursor = function () {
//     cursor.classList.add("is-down");
//   }
  
//   // when i let go of the mouse, make the cursor smaller
//   const shrinkCursor = function () {
//     cursor.classList.remove("is-down");
//   }
  
  // move the cursor based on coordinates
  const moveCursor = function (x, y) {
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  }
  
  // set up a canvas
  const setupCanvas = function (canvas) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpi = window.devicePixelRatio;
    
    canvas.width = w * dpi;
    canvas.height = h * dpi;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    
    // which context are we talking about? 2d? 3d? something else?
    const context = canvas.getContext("2d");
    context.scale(dpi, dpi);
    
//couleur de depart avant attribution
   context.strokeStyle ='#A4BCFF';
   //design du pinceau
    context.lineCap = "round";
    context.lineJoin = "round";
    context.shadowBlur = 5;
    context.rect(0, 0, w, h);


  }

  // lets start to draw, based on the canvas, x and y
const startDraw = function (canvas, x, y) {
const context = canvas.getContext("2d")
    
  //   const colors = ["red", "yellow", "blue", "green"]
  //   const randomNum = Math.floor(Math.random() * colors.length)
    
    context.moveTo(x, y)
    context.beginPath()
  }

  // lets draw based on three things, canvas, x and y
  const moveDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")
    
    if (isMouseDown) {
      context.lineTo(x, y)
        context.stroke()
    }
    
  }

  setupCanvas(canvas)


document.addEventListener("mousedown", function (event) {
  isMouseDown = true

  startDraw(canvas, event.pageX, event.pageY)
})

document.addEventListener("mouseup", function () {
  isMouseDown = false

})

document.addEventListener("mousemove", function (event) {

  // event.pageX -> where we are on the page across
  // event.pageY -> where we are on the page downwards
  moveCursor(event.pageX, event.pageY)
  moveDraw(canvas, event.pageX, event.pageY)

})

window.addEventListener("resize", function () {
  setupCanvas(canvas)
})

const context = canvas.getContext("2d")

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (event) {
    context.strokeStyle = this.style.backgroundColor
    context.shadowColor = context.strokeStyle
  })
})

const input = document.querySelector('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      context.lineWidth = this.value;
    }

    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);


//------------------------------------------------------------------------------------------------------------------------v


