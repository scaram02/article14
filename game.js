let score = 0;
let level = 3
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
    this.provision = new Provision()
    this.rightsInAction = [];
    this.rightsCollection = [];
    this.rightsUrls = []
    this.indexForURLs = 0
    this.urlsOnly = []
    this.iconUrls = ["assets/sex.png","assets/race.png","assets/color.png","assets/language.png","assets/religion.png","assets/minority.jpg", "assets/birth.png"]
   this.icons = []
   this.iconIndex = 0
   this.provisions = []
    this.case = new Case()
    this.cases = []
    
    // this.shopper = new Shopper();
    // this.shoppers = []

  }




 

  preload() {
    this.background.preload();
    this.player.preload();
   this.provision.preload()
   

    // this.icon = loadImage("assets/color.png")
    // shing = loadSound("assets/shing2.wav")
// console.log('preload game')
  }


// ~~~~~~~~ SETUP ~~~~~~~~~~~~~
  setup() {
    this.player.setup();
    this.provision.setup()


    for (var i = 0; i < 7; i++){
      this.icons[i] = loadImage(this.iconUrls[i]);
      // console.log(this.iconUrls[i])
    }

// this.provision.draw()
}
// ~~~~~~~~ END SETUP ~~~~~~~~~~~~~



 
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






isProvisionCollision(provision, player) {
  if (player.x + player.width < provision.x || provision.x + provision.width < player.x){
    return false
  }
  if (player.y > provision.y + provision.height ||
    provision.y > player.y + player.height
  ) {
  return false;
  }
  return true;
}


changeIcon(){
  this.iconIndex = this.iconUrls.indexOf(iconInCollection) || 0
}



// ~~~~~~~~~~~~~~DRAW~~~~~~~~~~~~~~~~~~~~
  draw() {
    this.background.draw();
    this.player.draw();
    this.provision.draw()
    function renderScore(){
push();
noStroke();
// rect(15, 15, 200, 50, 10);
// pop();
text("Score: " + score, 30, 50);
text("Level: " + level, 30, 70);
let bestScore = "Best score: " + localStorage.getItem("bestScore")
text(bestScore, 30, 90)
pop()
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



  // render provisions not level 1
  if (level > 1){

    // console.log(isProvisionCollision(this.provision))
  }
  
  
// console.log(this.provision.provisions)
// console.log("THIS>DPROVISIO", this.provision.urls)

//           if (this.isProvisionCollision(provision, this.player)){
//   this.provisions.splice(index, 1);
//   console.log("IHIST")
// }
//       })


// ~~~~~~~~CASE LEVEL 3~~~~~~~~~~
    if (level > 2){
    if (frameCount > 180 && frameCount % 180 === 0){
      this.cases.push(new Case())
    }
console.log('THIS. CASE', this.cases)
       // A new case appears! draw new case
    this.cases.forEach((c, index) => {
        c.draw();
   
        // disappears at bottom of screen
        if (c.y  >= 650){
            this.cases.splice(index, 1)
    }

    function isCaseCollision(c, player){
      if (player.x + player.width < c.x ||c.x + 200 < player.x){
        return false;
      }
      if (player.y > c.y + 24 || c.y > player.y + player.height){
        return false
      }
      return true;
    }

// call the funciton
if (isCaseCollision(c, this.player)){
  if (c.category === "+"){
    score +=3
  } else  {
    score -=10
  }
  this.cases.splice(index, 1)
}
  })
}
//~~~~~~~~~~~ END CASE~~~~~~~~~



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



if (
  !localStorage.getItem("bestScore") ||
  localStorage.getItem("bestScore") < score
) {
  localStorage.setItem("bestScore", score);
}
     } // END draw




   resetLevel(){
      // if (this.rightsCollection.length == 7){
        this.rightsInAction = [];
        this.rightsCollection = [];
        this.rightsUrls = []
        this.indexForURLs = 0
        this.urlsOnly = []
        this.icons = []
        this.iconIndex = 0
        let iconInCollection = ""
        this.cases = []
        level ++
        this.preload()
        this.setup()
        this.draw()
      // }
      }



} // draw


  
  
  

