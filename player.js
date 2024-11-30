let direction = "right"


class Player {
    constructor() {


      this.velocity = 0;
      this.gravity = 0;
      this.directions = [] 
      this.selectedDir = 0;
      this.options = ["up", "right", "left", "down"]
    
    }

    preload() {
      for (var i = 0; i < 4; i++) {
        this.directions[i] = loadImage("assets/flag-" + i + ".png");
      }
      }



      setup() {

      // starting placement
      this.x = 400;
      this.y = height / 2 - 75

    
        // player's size
        this.width = 150;
        this.height = 150;  
      }

    

      draw() {
        // this.velocity += this.gravity;
        // this.y += this.velocity;
    
        image(this.directions[this.selectedDir], this.x, this.y, this.width, this.height); 
    }

// to do: optimize us tooooo
// to do:  make the ifs dynamic
    moveRight(){
      if (this.x < 850) {
        direction = "right"
        this.x += 2 * this.velocity; 
        this.velocity += 0.02;  
         this.changeDirectionVector()
      }
      }

     moveLeft(){
      if (this.x > 165) {
        direction = "left"
          this.x -= 2 * this.velocity; 
          this.velocity += 0.02;   
          console.log(direction) 
          this.changeDirectionVector()
      }
        }

       moveUp(){
         if (this.y > 0){
          direction = "up"
            this.y -= 2 * this.velocity; 
            this.velocity += 0.02;  
            this.changeDirectionVector()
          }
        }

       moveDown(){
              if (this.y < 550){
              direction = "down"
              this.y += 2 * this.velocity; 
              this.velocity += 0.02;  
              this.changeDirectionVector()
        }
      }

        changeDirectionVector(){
          this.selectedDir = this.options.indexOf(direction)
        }
   
}