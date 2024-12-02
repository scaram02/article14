const game = new Game();
let mode = "instructions"
let blankUrls = ["assets/sex-lite.png","assets/race-lite.png","assets/color-lite.png","assets/language-lite.png","assets/religion-lite.png","assets/minority-lite.jpg", "assets/birth-lite.png"]
let blanks = []


function preload() {
  game.preload();
  //shing = loadSound("assets/shing2.wav")

}
// (set up) blank icons for trophy case
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
  mode = "instructions";
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
  if (mode === "instructions") {
    background("lightblue");
    text("Press SPACE to start!", 365, 680);
    push()
    fill("navy")
    text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien est, vulputate egestas laoreet tempus, placerat eget sapien. Curabitur ac mauris sit amet mauris auctor fermentum. Mauris ornare in ex eget aliquam. Etiam cursus nunc vel odio feugiat lacinia. Fusce semper sagittis consectetur. Maecenas varius faucibus sapien eu aliquet. Aenean vitae felis nec nisl luctus dapibus id at metus. Mauris et metus eu lectus vestibulum pellentesque non vitae eros. Phasellus ut dolor nulla. Curabitur facilisis elit id aliquet ullamcorper. Morbi ut leo a nisl feugiat bibendum. Aliquam in sem vehicula, eleifend sem sit amet, tristique ante. Phasellus sed sapien pretium. ", 200, 100, 700)
    pop()
  }
  if (mode === "levelUp"){
    // need to undraw the game though I think
    background("lightblue");
    text("New level reached: " + level, 365, 680);
   
  }
 
  function keyPressed(){
    if ((mode == "instructions" || "levelUp") && keyCode === 32){
      mode = "game"
    }}
    keyPressed()


  if (mode === "game") {
    game.draw();
   if (game.rightsCollection.length == 7){
     game.resetLevel()
     mode = "levelUp"
   }
  }

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


  
} // end draw







    




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