let rights = [
    { name: "Sex", imgURL: "assets/sex.png" },
    { name: "Race",  imgURL: "assets/race.png", },
    { name: "Color",  imgURL: "assets/color.png",},
    { name: "Language",  imgURL: "assets/language.png", },
    { name: "Religion",  imgURL: "assets/religion.png", },
    { name: "Political Opinion",  imgURL: "assets/politicalOpinion.png" },
    { name: "Minority", imgURL: "assets/minority.png" },
    { name: "Nationality",  imgURL: "assets/nationality.png",},
    { name: "Birth",  imgURL: "assets/birth.png",},
    { name: "Other",  imgURL: "assets/other.png",}
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