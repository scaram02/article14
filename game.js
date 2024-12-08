let score = 0;
let level = 1
let dead = false
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
    this.level = level;
    this.rightsInAction = [];
    this.rightsCollection = [];
    this.rightsUrls = []
    this.indexForURLs = 0
    this.urlsOnly = []
    this.iconUrls = ["assets/sex.png","assets/race.png","assets/color.png","assets/language.png","assets/religion.png","assets/politicalOpinion.png","assets/minority.png", "assets/nationality.png", "assets/birth.png","assets/other.png"]
   this.icons = []
   this.iconIndex = 0
  //  this.provisions = []
    this.case = new Case()
    this.cases = []
    // newwwwww
this.provisions = []
this.provisionURLs = ["assets/provision.png", "assets/12.png"]
this.xs = []
this.ys = []
this.url1 = "assets/provision.png"
this.img1;
this.x1 = Math.floor(Math.random() * (1100 - 180 + 1) + 180); 
this.y1 = Math.floor(Math.random() * (600 - 0 + 1) + 0);
this.collided1 = false
this.x2 = Math.floor(Math.random() * (1100 - 180 + 1) + 180); 
this.y2 = Math.floor(Math.random() * (600 - 0 + 1) + 0);
this.url2 = "assets/provision.png"
this.img2;
this.collided2 = false
this.collided3 = false
this.x3 = Math.floor(Math.random() * (1100 - 180 + 1) + 180); 
this.y3 = Math.floor(Math.random() * (600 - 0 + 1) + 0);
this.collided4 = false
this.x4 = Math.floor(Math.random() * (1100 - 180 + 1) + 180); 
this.y4 = Math.floor(Math.random() * (600 - 0 + 1) + 0);
this.collided5 = false
this.x5 = Math.floor(Math.random() * (1100 - 180 + 1) + 180); 
this.y5 = Math.floor(Math.random() * (600 - 0 + 1) + 0);
this.collided6 = false
this.x6 = Math.floor(Math.random() * (1100 - 180 + 1) + 180); 
this.y6 = Math.floor(Math.random() * (600 - 0 + 1) + 0);
this.collided7 = false
this.x7 = Math.floor(Math.random() * (1100 - 180 + 1) + 180); 
this.y7 = Math.floor(Math.random() * (600 - 0 + 1) + 0);
this.collided8 = false
this.x8 = Math.floor(Math.random() * (1100 - 180 + 1) + 180); 
this.y8 = Math.floor(Math.random() * (600 - 0 + 1) + 0);
  }




 

  preload() {
    this.background.preload();
    this.player.preload();
   this.provision.preload()
    // shing = loadSound("assets/shing2.wav")

    for (var i=0; i<8; i++){
      // this.provisions[i] = loadImage(this.provisionURLs[i])
      this.ys[i] = Math.floor(Math.random() * (600 - 200 + 1) + 100);
        this.xs[i] =  Math.floor(Math.random() * (900 - 300 + 1) + 100); 
    }

    
  }

// ~~~~~~~~ SETUP ~~~~~~~~~~~~~
  setup() {
    this.player.setup();
    this.provision.setup()


    for (var i = 0; i < 10; i++){
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

isProvisionCollision (x, y, player){
  if ((player.x + player.width < x) || (x + 100 < player.x)){
    return false
  }
  if ((player.y > y + 100) ||
    (y > player.y + player.height)
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
    // this.provision.draw()
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
image(this.icons[ind], 25, (105 + ( this.iconUrls.indexOf(this.rightsCollection[i].imgURL) * 60)), 40, 40)
    push()
    fill("darkGreen")
    text(this.rightsCollection[i].name, 85, (105 + (this.iconUrls.indexOf(this.rightsCollection[i].imgURL) * 60)+25))
    pop()
}

}

if (this.isRightsCollision(rights, this.player)){
score+=5
// shing.play();
// console.log(score)
}
})



// ~~~~~~~~CASE LEVEL 3~~~~~~~~~~
    if (level > 2){
    if (frameCount > 180 && frameCount % 180 === 0){
      this.cases.push(new Case())
    }

       // A new case appears! draw new case
    this.cases.forEach((c, index) => {
        c.draw();
   
        // disappears at bottom of screen
        if (c.y  >= 650){
            this.cases.splice(index, 1)
    }

    function isCaseCollision(c, player){
      if (player.x + player.width < c.x ||c.x + c.width < player.x){
        return false;
      }
      if (player.y > c.y + 24 || c.y > player.y + player.height){
        return false
      }
      return true;
    }

// call the funciton
if (isCaseCollision(c, this.player)){
  if (c.category == "+"){
    score +=3
  } else  {
    score -=100
  }
  this.cases.splice(index, 1)
}
  })
}
//~~~~~~~~~~~ END CASE~~~~~~~~~

  // ~~~~~~~START PROVISIONS AB LEVEL 2~~~~~~~~~~~
  // RIP developer dreams
  if (level > 1){
    if (!this.isProvisionCollision(this.x1, this.y1, this.player)){
      if (this.collided1 == false){
        
        push()
        fill("blue")
        textSize(28)
        text("Expression", this.x1, this.y1)
        pop()
      }
      // return;
    } else {
      this.collided1 = true;
      // score +=3
    }
    
    if (!this.isProvisionCollision(this.x2, this.y2, this.player)){
      if (this.collided2 == false){
        push()
        fill("blue")
        textSize(28)
        text("Marriage", this.x2, this.y2)
        pop()
      }
      
    } else {
      this.collided2 = true;
      // score+=3
    }
    if (!this.isProvisionCollision(this.x3, this.y3, this.player)){
      if (this.collided3 == false){
        push()
        fill("blue")
        textSize(28)
        text("No torture", this.x3, this.y3)
        pop()
      }
      
    } else {
      this.collided3 = true;
      // score+=3
    }
   
    if (!this.isProvisionCollision(this.x4, this.y4, this.player)){
      if (this.collided4 == false){
        push()
        fill("blue")
        textSize(28)
        text("Privacy/family", this.x4, this.y4)
        pop()
      }
      
    } else {
      this.collided4 = true;
      // score+=3
    }

    if (!this.isProvisionCollision(this.x5, this.y5, this.player)){
      if (this.collided5 == false){
        push()
        fill("blue")
        textSize(28)
        text("Assembly", this.x5, this.y5)
        pop()
      }
      
    } else {
      this.collided5 = true;
      // score+=3
    }

    if (!this.isProvisionCollision(this.x6, this.y6, this.player)){
      if (this.collided6 == false){
        push()
        fill("blue")
        textSize(28)
        text("Life", this.x6, this.y6)
        pop()
      }
      
    } else {
      this.collided6 = true;
      // score+=3
    }


    if (!this.isProvisionCollision(this.x7, this.y7, this.player)){
      if (this.collided7 == false){
        push()
        fill("blue")
        textSize(28)
        text("Liberty/security", this.x7, this.y7)
        pop()
      }
      
    } else {
      this.collided7 = true;
      // score+=3
    }

  }
// ~~~~~~~~~~~~END PROVISION DRAW ~~~~~~~~~~~~

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
        this.provisions = []
        level ++
        this.preload()
        this.setup()
        this.draw()
        this.collided1 = false;
        this.collided2 = false;
        this.collided3 = false;
        this.collided4 = false;
        this.collided5 = false;
        this.collided6 = false;
        this.collided7 = false;
        this.collided8 = false;
        this.x1;
        this.y1;
        this.x2;
        this.y2;
        this.x3;
        this.y3;
        this.x4
        this.y4
        this.x5
        this.y5
        this.x6
        this.y6
        this.x7
        this.y7
        this.x8
        this.y8
        this.level ++
      // }
      }



} // draw


  
  
  

