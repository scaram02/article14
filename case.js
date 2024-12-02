let cases = [
    { case: "apple", category: "+", color: "green"},{ case: "banana", category: "-", color: "red"},
   {case: "hmmm", category: "+", color: "green"},{case: "fourth", category: "-", color: 'red'}
  ];
  
 

  class Case {
    constructor() {
      this.x = Math.random() * (900 - 300) + 300;
      this.y = 0;
    //   this.width = 49; 
    //   this.height = 49;
  
      this.randomCase = cases[Math.floor(Math.random() * cases.length)]; 
      this.case = this.randomCase.case;
      this.category = this.randomCase.category;
      this.color = this.randomCase.color
    }
  
    preload() {
    //   this.img = loadImage(this.imgUrl);

    }
  
    setup() {
        // if (this.randomCase.category == "-"){
        //     color = "red"
        // } else {
        //   color = 'green'
        // }
    }
  
    draw() {
     push()
     // falls as long as y < 700 aka not at bottom of screen, otherwise pools
      if (this.y > 700) {
        this.y = 700;
      } else {
        this.y++;
      }
   fill(this.randomCase.color)
   textSize(24)
   textWidth(200)
      text(this.randomCase.category +this.randomCase.case + this.randomCase.category, this.x, this.y);
      pop()
    }
  }