const game = new Game();
let mode;
let blankUrls = ["assets/sex-lite.png","assets/race-lite.png","assets/color-lite.png","assets/language-lite.jpg","assets/religion-lite.png","assets/minority-lite.jpg", "assets/birth-lite.png"]
let blanks = []


function preload() {
  game.preload();
  //shing = loadSound("assets/shing2.wav")

}
// (set up) blank icons
function renderBlanks(){
  for (var i = 0; i < 7; i++){
    blanks[i] = loadImage(blankUrls[i]);

  }
}



function setup() {
  let gameCanvas = createCanvas(1200, 700); 
  gameCanvas.parent("gameCanvas");
  game.floor = 700;
  game.setup();
  mode = 2;
  // textSize(32);
  // fill("darkgreen");
   startScr = loadImage("assets/map.png");
//  endScr = loadImage("assets/store2.png");
renderBlanks()
}

      // screen toggle
      // to do: make so can't go through every mode
      function upMode(){
        if (keyIsPressed && keyCode === 32){
            mode +1
          }
        }


 

function draw() {
  clear(); 
  
  // if (mode === 0) {
   background(startScr);

   // draw the blank icons
  for (var i=0; i<blankUrls.length; i++){
    image(blanks[i], 55, (100 + (i * 80)), 50, 50)
  }


    // push();
  // fill("lightblue");
  // noStroke();
  // rect(0, 335, 740, 50, 5, 5);
  // pop();
  //   fill('brown');
  //   text("Press SPACE to start!", 357, 370);
  // }
  // if (mode === 1) {
  //   background("lightblue");
  //   text("Press SPACE to play!", 365, 680);
  //   push()
  //   fill("navy")
  //   text("Press SPACE to: ", 100, 100, 400)
  //   pop()
  // }

  // if (mode === 2) {
    game.draw();
  // }

  // to do: rewrite as switch statement
  if (keyIsDown(RIGHT_ARROW)){
    game.player.moveRight()
    
  }
  if (keyIsDown(LEFT_ARROW)){
    game.player.moveLeft()
  
  }
    
    if (keyIsDown(UP_ARROW)){
      game.player.moveUp()
   
    }
    if (keyIsDown(DOWN_ARROW)){
      game.player.moveDown()

    }

}







    




window.addEventListener(
  "keypressed",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);