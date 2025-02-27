// G = Game 

class Player {
    constructor(x, y, w, h, c){
        this.x = x;
        this.y = y;
        this.w = w; //width
        this.h = h; //heigth
        this.c = c; //color
        this.v = 5; // velocity
    }

    draw(ctx){
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    update(keys){ 
        if (keys ["w"]) this.y -= this.v;
        if (keys ["s"]) this.y += this.v;
        if (keys ["a"]) this.x -= this.v;
        if (keys ["d"]) this.x += this.v;
    }
}

const myPlayer = new Player(10, 10, 50, 50, "red");

const GCanvas = document.getElementById("GCanvas");
const ctx = GCanvas.getContext("2d");

const resizeCanvas =  () => {
   GCanvas.width = window.innerWidth;
   GCanvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let keys = {};
//                                   e.key = w, prida w:true     
window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

const GLoop = () => {
     ctx.clearRect(0, 0, GCanvas.width, GCanvas.height)

    console.log(keys);
// update
myPlayer.update(keys);
//draw
myPlayer.draw(ctx);
requestAnimationFrame(GLoop);
}

requestAnimationFrame(GLoop);