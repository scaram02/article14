const game = new Game();
let mode = "instructions"
let blankUrls = ["assets/sex-lite.png","assets/race-lite.png","assets/color-lite.png","assets/language-lite.png","assets/religion-lite.png", "assets/politicalOpinion-lite.png", "assets/minority-lite.png", "assets/nationality-lite.png", "assets/birth-lite.png","assets/other-lite.png"]
let blanks = []
let instructionQuestions = [`Should some identities rank higher than others or be prioritized when considering discrimination? For example, can you protect LGBTQIA+ rights while upholding discrimination based on nationality?`,
`When does a non-personal trait become a personality characteristic/identity? Is it really fair to only consider “personal characteristics,” like sex or religion rather than softer status (like immigration status or place of residence) as well?`,
`Article 14 explicitly listed some examples of suspect grounds but leaves out disabilities, sexuality, and other big identities. Does it suffice just to label these as “other?`,
`Does NL's requirement to visit a Huisarts near your residential address lead to unequal or disproportionate access to healthcare for those living in more residential/less populated areas?`,
`During peak Covid, lockdowns caused more deaths among people over 65, mask requirements added lip-reading difficulties to the hearing-impaired, and school closures hurt those with learning disabilities and financial hardships the most. In times of crisis, is it okay to make policies that help the majority of people, if it pushes some groups to the margins?`,
`Qualitative and quantitative studies have shown that ethnically Turkish students in Germany are disproportionately sent to inferior secondary school tracks and face more employment difficulties as adults. What challenges would these children face in claiming a violation of Article 14? Can Article 14 protect them from these consequences?`,
`Some migration management initiatives involve more technology used at borders. This may include lie detection for an asylum seeker's story, emotion-reading devices in Romanian airports, and more. What are the pros and cons associated with using AI rather than human decision making? Do the benefits of AI replacing humans in border security outweigh the risks?`,`Many European countries have a large gap in employment wages between genders. How can women, who are most often underpaid, claim discrimination under Article 14? Does Article 14 address indirect or unintentional discrimination?`]
let vuln = ["Is it possible to determine what makes an identity “vulnerable” to discrimination?", "Are some personality traits more vulnerable to discrimination than others?", "In Opuz v. Turkey, the Court decided that the law had failed to protect women against domestic violence: “in cases of gender-based violence, positive interference with the private or family life might be necessary to protect the health and the rights of women.” The judicial system had thus far unfairly ignored the structural issues that led to this violence. Patriarchal attitudes such as police being unresponsive to this violence were upheld due to a lack of interference in family life, which would have protected these women. Should the Court distinguish between prohibiting discrimination and actively protecting from discrimination?", "Between 2017 and 2019, only 37% of cases claiming a violation of Article 14 were actually considered in court. Does requiring people to prove a violation against a suspect ground lead to self-selection? That is, are many cases left unconsidered because their applicants are too vulnerable to prove their violation in the first place?"]
// let selectedQ = instructionQuestions[Math.floor(Math.random() * instructionQuestions.length)]
// let selectedVulnerability = vuln[Math.floor(Math.random() * vuln.length)]
let selectedQ;
let selectedVulnerability;
let grounds = ["Sex", "Race", "Color", "Language", "Religion", "Political Opinion", "Minority", "Nationality", "Birth", "Other"]
let nKey;
let yKey;
let upArrow;
let downArrow;
let leftArrow;
let rightArrow;

function preload() {
  game.preload();
  //shing = loadSound("assets/shing2.wav")
  yKey = loadImage("assets/Y.png");
  nKey = loadImage("assets/N.png");
  upArrow = loadImage('assets/up-arrow.png')
  downArrow = loadImage('assets/down-arrow.png')
  leftArrow = loadImage('assets/left-arrow.png')
  rightArrow = loadImage('assets/right-arrow.png')
  selectedQ = instructionQuestions[Math.floor(Math.random() * instructionQuestions.length)]
  selectedVulnerability = vuln[Math.floor(Math.random() * vuln.length)]
}
// (set up) blank icons for trophy case
function renderBlanks(){
  for (var i = 0; i < 10; i++){
    blanks[i] = loadImage(blankUrls[i]);
  }
}



function setup() {
  let gameCanvas = createCanvas(1200, 700); 
  gameCanvas.parent("gameCanvas");
  game.floor = 700;
  game.setup();
  mode = "instructions"  
   startScr = loadImage("assets/map.png");
renderBlanks()
}

      // screen toggle
      function upMode(){
        if (keyIsPressed && keyCode === 32){
            mode +1
          }
        }

function getNewQuestion(){
  selectedQ = instructionQuestions[Math.floor(Math.random() * instructionQuestions.length)]
  selectedVulnerability = vuln[Math.floor(Math.random() * vuln.length)]
}
 

function draw() {
  clear(); 
  
  // if (mode === 0) {
   background(startScr);

   // draw the blank icons
  for (var i=0; i<blankUrls.length; i++){
    image(blanks[i], 25, (105 + (i * 60)), 40, 40)
    push()
    text(grounds[i], 85, (105 + (i * 60)+25))
    pop()
  }


 
  if (mode === "instructions") {
    background("#a8caff");
    push()
    // fill("#ffffff")
    textSize(24)
    text("Article 14 guarantees enjoyment of the other rights in the ECHR without discrimination based on the following explicitly named identity characteristics: “sex, race, colour, language, religion, political or other opinion, national or social origin, association with a national minority, property, birth or other status.”", 100, 50, 1000)
    text("For level 1, collect these traits, also known as “suspect discrimination grounds,” named in Article 14. Use the arrow keys to navigate.", 100, 190, 1000)  
 
    image(upArrow, 570, 260, 50, 50)
    image(leftArrow, 540, 300, 50, 50)
    image(rightArrow, 600, 300, 50, 50)
    image(downArrow, 570, 340, 50, 50)
    
    fill('navy')
    text("Which identities might count as “other?” Should they be explicitly named here?", 175, 450)
    image(yKey, 500, 500, 100, 100)
    image(nKey, 600, 500, 100, 100)
    text("Press Y or N to answer and go to game!", 400, 640);
    // push()
    // fill("navy")
   
    pop()
  }
console.log('mode', mode)
  if (mode === "levelUp"){
    
    // need to undraw the game though I think
    background("#a8caff");
    if (game.level == 2){
      push()
      // fill('black')
      textSize(24)
      text("Still hungry? Article 14 is meant to complement other provisions of the ECHR rather than stand alone. This is because Article 14 only prohibits discrimination that takes away access or enjoyment of other freedoms (articles of the ECHR.)", 100, 100, 1000)
      text("Along the way, collect some of the articles most commonly cited alongside Article 14.", 100, 200, 1000)
      pop()
      push()
      fill('navy') 
      textSize(24)
         text(selectedQ, 200, 300, 800)
      pop()
    }
    if (game.level == 3){
      push()
      // fill('black')
      textSize(22)
      text("Author Judith Butler describes the precarity of life and how societal norms determine which lives are less than human and can therefore be forfeited. These lives are not considered grievable. Therefore, says Butler, policies must transcend identity politics to promote flourishing and limit the loss of life.", 100, 100, 1000)
      text("Collect some rights and grievable lives that have been successfully won in court cases, but avoid the questionable decisions that demonstrate (un)grievability for certain groups of people. Ask yourself what makes these cases grievable or not grievable, especially compared to others.", 100, 200, 1000)
      pop()
      push()
      fill('green')
      text("+Roma children no longer disproportionately placed in special schools+", 80, 320)
      pop()
      push()
      fill('red')
      text("—Brothers beaten in prison for Chechen ethnicity won because prisoners are vulnerable, but their ethnicity was ignored—", 500, 320)
      pop()
      push()
      fill('navy')
      textSize(22)
        text(selectedQ, 200, 360, 800)
      pop()
    }
    if (game.level == 4){
      push()
      // fill('black')
      textSize(22)
      text("In recent years, the European Court of Human Rights has increasingly used the idea of “vulnerability” in their decisions. For example, they consider whether a group of people is more prone to disadvantages.", 100, 100, 1000)
      text("Often, they use the vulnerability argument when more than one suspect grounds are threatened, therefore, this is their attempt at an intersectional approach to tackling confounding factors of an issue. However, some scholars criticize this method because the Court usually only applies this to four identity groups: gender/sex, ethnicity/race, sexual orientation, and disability. Other critics argue that all groups should be equally protected under Article 14, so vulnerability is irrelevant.", 100, 200, 1000)
      pop()
      push()
      textSize(18)
      fill('navy')
         text(selectedVulnerability, 200, 400, 800)
      pop()
    }
    if (game.level > 4){
      push()
      textSize(24)
      fill('navy')
      text(selectedQ, 200, 260, 800)
      pop()
    }

    push()
    image(yKey, 500, 550, 100, 100)
    image(nKey, 600, 550, 100, 100)
    textSize(24)
    fill('#963b93')
    text("New level reached: " + level, 45, 680);
    pop()

   
  }
 
  function keyPressed(){
    if ((mode == "instructions" || "levelUp") && (keyCode == 89 || keyCode == 78)){
      mode = "game"
    }}
    keyPressed()


  if (mode === "game") {
    game.draw();
   if (game.rightsCollection.length == 10){
     game.resetLevel()
    getNewQuestion()
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