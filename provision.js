
class Provision {
  constructor() {

  this.urls = []
  this.provisions = []
  this.xs = []
  this.ys = []
  // provision's size
  this.width = 100;
  this.height = 100;  
  }

  preload() {
    // for (var i = 0; i < 2; i++) {
    //   this.provisions[i] = loadImage(this.urls[i]);
    //   this.ys[i] = Math.floor(Math.random() * (600 - 200 + 1) + 100);
    //   this.xs[i] =  Math.floor(Math.random() * (900 - 300 + 1) + 100); 
    // }
    }



    setup() {


  
      
    }

  

    draw() {

      for (var i=0; i < this.provisions.length; i++){
      image(this.provisions[i], this.xs[i], this.ys[i], this.width, this.height); 
      }
  }


}
