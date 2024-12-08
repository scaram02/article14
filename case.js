let cases = [
    {case: "No different prison detainment lengths by ethnicity", category: "+", color: "green"}, {case: "No discrimination by association", category: "+", color: "green"}, {case: "No bans on LGBTQ+ events", category: "+", color: "green"}, {case: "Condemnation of hate crimes against Roma", category: "+", color: "green"}, {case: "Disability benefits the same based on guardianship + residence", category: "+", color: "green"},{case: "Hiring decisions cannot be gender-based", category: "+", color: "green"},{case: "HIV health status cannot impact visas", category: "+", color: "green"}, {case: "Guardianship cannot revoke right to vote", category: "+", color: "green"}, {case: "No discrimination if you equally DENY these rights", category: "-", color: "red"}, {case: `Indirect discrimination not defined`, category: "-", color: "red"},  {case: "No way to control for discrimination through unconscious bias", category: "-", color: "red"}, {case: "AI determines some asylum case outcomes",category: "-", color: "red"}
  ];


  class Case {
    constructor() {
      this.x = Math.random() * (900 - 300) + 300;
      this.y = 0;
      this.width;
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

  this.width = textWidth(this.randomCase.case)
      text(this.randomCase.category +this.randomCase.case + this.randomCase.category, this.x, this.y);
      pop()
    }
  }