var noSquares = 6
var colors = []
var pickedColor
var h1 = document.querySelector("h1")
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var resetButton = document.querySelector("#reset")
var modeBtn = document.querySelectorAll(".mode")
var noOfSquares = 6

init();
function init(){
  setupModeButtons()
  setupSquares()
  reset()
}
function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor)
        h1.style.backgroundColor = clickedColor
      }
      else
      {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again"
      }
    })
  }
}
function setupModeButtons(){
  for(var i = 0; i < modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
      modeBtn[0].classList.remove("selected")
      modeBtn[1].classList.remove("selected")
      this.classList.add("selected")
      this.textContent === "Easy" ? noSquares = 3: noSquares = 6
      reset()
    })
  }
}
function reset(){
  messageDisplay.textContent = ""
  colors = generateRandomColors(noSquares)
  pickedColor = pickedColors()
  colorDisplay.textContent = pickedColor
  resetButton.textContent = "New Colors"
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block"
      squares[i].style.backgroundColor = colors[i] 
    }
    else
    {
      squares[i].style.display = "none"
    }
  }
  h1.style.backgroundColor = "steelblue"
}
resetButton.addEventListener("click", function(){
  reset()
})
function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color
  }
}
function pickedColors(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}
function generateRandomColors(num){
  var arr = []
  for(var i = 0; i < num; i++){
    arr.push(randomColor())
  }
  return arr
}
function randomColor(){
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")"
}
