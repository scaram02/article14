let rights = [
    { name: "sex", imgURL: "assets/sex.png" },
    { name: "race",  imgURL: "assets/race.png", },
    { name: "color",  imgURL: "assets/color.png",},
    { name: "language",  imgURL: "assets/language.png", },
    { name: "religion",  imgURL: "assets/religion.png", },
    // { name: "politicalOpinion",  imgURL: "politicalOpinion.jpg" },
    { name: "minority", imgURL: "assets/minority.jpg" },
    { name: "birth",  imgURL: "assets/birth.png",}
  ];

class Rights {
    constructor() {
      this.x = Math.floor(Math.random() * (1000 - 130 + 1) + 100); 
      this.y = Math.floor(Math.random() * (600 - 130 + 1) + 100);

      this.width = 65;
      this.height = 65;

    this.randomRight = rights[Math.floor(Math.random() * rights.length)]; 
    this.name = this.randomRight.name;
    this.imgUrl = this.randomRight.imgURL;
    }
  
    preload() {
        this.img = loadImage(this.imgUrl);
      }
  
    setup() {}
  
    draw() {
  
// do I need this?
  if (this.x > 850){
    this.x = 600
  }
  if (this.x < 200){
    this.x = 300
  }
//    else {
    // this.x-= 4
//   }


  
  image(this.img, this.x, this.y, this.width, this.height);
  
     
    }
  
  }