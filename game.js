let score = 0;
// let crashed = 0
// let gameEnd = false;
// let shing;
let player;
let iconInCollection = ""



class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.rights = new Rights();
    this.rightsInAction = [];
    this.rightsCollection = [];
    this.rightsUrls = []
    this.indexForURLs = 0
    this.urlsOnly = []
    // this.ind = this.urlsOnly.length && this.urlsOnly.length -1 
    // this.sideToRender = this.urlsOnly.length > 0 && this.urlsOnly.filter((u) => this.urlsOnly.indexOf(u) == this.urlsOnly.lastIndexOf(u))[this.ind]
    this.iconUrls = ["assets/sex.png","assets/race.png","assets/color.png","assets/language.jpg","assets/religion.png","assets/minority.jpg", "assets/birth.png"]
   this.icons = []
   this.iconIndex = 0
    
    // this.shopper = new Shopper();
    // this.shoppers = []

  }




 

  preload() {
    this.background.preload();
    this.player.preload();
   
   

    // this.icon = loadImage("assets/color.png")
    // shing = loadSound("assets/shing2.wav")
// console.log('preload game')
  }



  setup() {
    this.player.setup();

    for (var i = 0; i < 7; i++){
      this.icons[i] = loadImage(this.iconUrls[i]);
      // console.log(this.iconUrls[i])
    }

  }
 
// rights collision
isRightsCollision(rights, player) {
  if (player.x + player.width < rights.x || rights.x + rights.width < player.x){
    return false
  }
  // disappear rights off screen?
  if (player.y > rights.y + rights.height ||
    rights.y > player.y + player.height
  ) {
  return false;
  }

  return true;
}


// isShopperCollision(shopper, player) {
//   if (player.x + player.width < shopper.x || shopper.x + shopper.width < player.x){
//     return false
//   }
//   if (player.y > shopper.y + shopper.height ||
//     shopper.y > player.y + player.height
//   ) {
//   return false;
//   }
//   return true;
// }


changeIcon(){
  this.iconIndex = this.iconUrls.indexOf(iconInCollection) || 0
  console.log("INDEX   ,", this.iconIndex)
}

  draw() {
    this.background.draw();
    this.player.draw();
 
function renderScore(){
push();
noStroke();
// rect(15, 15, 200, 50, 10);
// pop();
text("Score: " + score, 30, 50);
// pop()
}
renderScore()

function renderCollection(){
  // push();
  noStroke();

  // x, y, width, height

  // pop();
  text("Score: " + score, 30, 50);
  pop()
  }
  renderCollection()



// // A Wild Right appears!
// to do: figure out of this logic makes sense or should control for rightsCollection
if (frameCount % 60 === 0) {
  this.rightsInAction.push(new Rights());
}
this.rightsInAction.forEach(
(rights, index) => {
if (!rights.img) rights.preload();
  rights.draw();

// // removes Rights when off screen
// if (this.rights.x + this.rights.width <= 0){
// this.rightsCollection.splice(index, 1)
// }

// remove Rights every four seconds if more than 3 showing
// to do: fix this logic so it makes more sense
if (this.rightsInAction.length > 3 && frameCount % 40 === 0){
this.rightsInAction.splice(index, 1)
}

// removes Rights upon collide, also adds them to the rightsCollection
if (this.isRightsCollision(rights, this.player)) {
this.rightsInAction.splice(index, 1);
console.log("rights.randomRight.name shows the last right eaten: ", rights.randomRight.name) 
iconInCollection = rights.randomRight.imgURL;
this.changeIcon()

// // render a colored Right on left sidebar if collided, if not already there etc.
if (this.isRightsCollision(rights, this.player)){
  if (this.rightsCollection.length == 0){
    this.rightsCollection.push(rights.randomRight)
    this.rightsUrls.push(rights.randomRight)
    // iconInCollection = rights.randomRight.imgURL;
    // this.changeIcon()
  } else {
      // check here for duplicates in the collection
let noDuplicates = this.rightsCollection.find((r) => r.name == rights.randomRight.name) == undefined

if (noDuplicates){
  this.rightsCollection.push(rights.randomRight)
    this.rightsUrls.push(rights.randomRight)
    this.iconInCollection = this.rights.randomRight.imgURL
    this.changeIcon()  
}
  }

this.rightsUrls.forEach((r) => {
  this.urlsOnly.push(r.imgURL)
})
}
}

// color it in
if (this.rightsCollection.length > 0){
  for (var i=0; i<this.rightsCollection.length; i++){

let ind = this.iconUrls.indexOf(this.rightsCollection[i].imgURL)
image(this.icons[ind], 55, (100 + ( this.iconUrls.indexOf(this.rightsCollection[i].imgURL) * 80)), 50, 50)
}
}


if (this.isRightsCollision(rights, this.player)){
score+=5
// shing.play();
// console.log(score)
}
})


//     // shopper appears!
//     if (frameCount % 360 === 0){
//       this.shoppers.push(new Shopper())
//     }
//     this.shoppers.forEach(
//       (shopper, index) => {
//         if (!shopper.img) shopper.preload();
//           shopper.draw();

//           // removes shopper when off screen
//     if (this.shopper.x + this.shopper.width <= 0){
//   this.shoppers.splice(index, 1)
// }


//     // to end the game
//     if (this.isShopperCollision(shopper, this.player)) {
//       crashed++  
// }




// if (crashed === 1){
//   gameEnd = true
//   background(endScr)
//   if (score === 1){
//     let gameScore = "You hoarded " + score + " roll of toilet paper."
//       text(gameScore, 260, 50, 600)
//   } else {
//   let gameScore = "You hoarded " + score + " rolls of toilet paper."
//   text(gameScore, 260, 50, 600)
// }
//   let highScore = "Your best TP run: " + localStorage.getItem("bestScore");
//       push()
    
//       text (highScore, 350, 100, 600)
//       pop()
//       push()
//       text("Press SPACE to play again", 320, 600, 400)
//       pop()
//       noLoop()
// }



// if (
//   !localStorage.getItem("bestScore") ||
//   localStorage.getItem("bestScore") < score
// ) {
//   localStorage.setItem("bestScore", score);
// }
     } // END draw
// )

} // draw

