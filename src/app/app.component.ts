import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Website';

  ww = window.innerWidth;
  wh = window.innerHeight;
  requestAnimFrame: any;

  @ViewChild('canvas')
  private canvas: ElementRef = {} as ElementRef;


  // pure javascrip random function ============
  random (min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  animate () {
    this.draw();
    window.requestAnimationFrame(() => this.animate);
  }

  ngAfterViewInit () {
    setInterval(() => {
      this.animate();
    }, 1000 / 60);
  }

  draw () {
    if (this.canvas) {
      //setup canvas enviroment
      let time = new Date().getTime() * 0.002;
      //console.log(time);
      const color1 = "rgba(191,191,191,0.3)";
      const color2 = "rgba(191,191,191,0.4)";

      let ctx = this.canvas.nativeElement.getContext("2d");
      if (ctx) {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        ctx.save();

        // random float to be used in the sin & cos
        let randomX = this.random(.2, .9);
        let randomY = this.random(.1, .2);

        // sin & cos for the movement of the triangles in the canvas
        let rectX = Math.cos(time * 1) * 1.5 + randomX;
        let rectY = Math.sin(time * 1) * 1.5 + randomY;
        let rectX2 = Math.cos(time * .7) * 3 + randomX;
        let rectY2 = Math.sin(time * .7) * 3 + randomY;
        let rectX3 = Math.cos(time * 1.4) * 4 + randomX;
        let rectY3 = Math.sin(time * 1.4) * 4 + randomY;

        //console.log(rectX + '-' + rectY + '-' + rectX2 + '-' + rectY2 + '-' + rectX3 + '-' + rectY3);

        //triangle gradiente ==========================================
        var triangle_gradient = ctx.createLinearGradient(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        triangle_gradient.addColorStop(0, color1);
        triangle_gradient.addColorStop(1, color2);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.canvas.nativeElement.width, 0);
        ctx.lineTo(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        ctx.lineTo(0, this.canvas.nativeElement.height);
        ctx.lineTo(0, 0);
        ctx.fillStyle = triangle_gradient;
        ctx.fill();


        //triangle group 1 ===========================================
        // triangle 1.1
        ctx.beginPath();
        ctx.moveTo(rectX2 + 120, rectY2 - 100);
        ctx.lineTo(rectX2 + 460, rectY2 + 80);
        ctx.lineTo(rectX2 + 26, rectY2 + 185);
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        //triangle 1.2
        ctx.beginPath();
        ctx.moveTo(rectX - 50, rectY - 25);
        ctx.lineTo(rectX + 270, rectY + 25);
        ctx.lineTo(rectX - 50, rectY + 195);
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        //triangle 1.3
        ctx.beginPath();
        ctx.moveTo(rectX3 - 140, rectY3 - 150);
        ctx.lineTo(rectX3 + 180, rectY3 + 210);
        ctx.lineTo(rectX3 - 225, rectY3 - 50);
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        //triangle group 2 ===========================================
        // triangle 2.1
        ctx.beginPath();
        ctx.moveTo(rectX + (this.canvas.nativeElement.width - 40), rectY - 30);
        ctx.lineTo(rectX + (this.canvas.nativeElement.width + 40), rectY + 190);
        ctx.lineTo(rectX + (this.canvas.nativeElement.width - 450), rectY + 120);
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        // triangle 2.2
        ctx.beginPath();
        ctx.moveTo(rectX3 + (this.canvas.nativeElement.width - 200), rectY3 - 240);
        ctx.lineTo(rectX3 + (this.canvas.nativeElement.width + 80), rectY3 - 240);
        ctx.lineTo(rectX3 + (this.canvas.nativeElement.width - 50), rectY3 + 460);
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        // triangle 2.3
        ctx.beginPath();
        ctx.moveTo(rectX2 + (this.canvas.nativeElement.width - 400), rectY2 + 140);
        ctx.lineTo(rectX2 + (this.canvas.nativeElement.width + 20), rectY2 + 200);
        ctx.lineTo(rectX2 + (this.canvas.nativeElement.width - 350), rectY2 + 370);
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        //triangle group 3 ===========================================
        // triangle 3.1
        ctx.beginPath();
        ctx.moveTo(rectX3 - 50, rectY3 + (this.canvas.nativeElement.height - 350));
        ctx.lineTo(rectX3 + 350, rectY3 + (this.canvas.nativeElement.height - 220));
        ctx.lineTo(rectX3 - 100, rectY3 + (this.canvas.nativeElement.height - 120));
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        // triangle 3.2
        ctx.beginPath();
        ctx.moveTo(rectX + 100, rectY + (this.canvas.nativeElement.height - 380));
        ctx.lineTo(rectX + 320, rectY + (this.canvas.nativeElement.height - 180));
        ctx.lineTo(rectX - 275, rectY + (this.canvas.nativeElement.height + 150));
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        // triangle 3.3
        ctx.beginPath();
        ctx.moveTo(rectX2 - 230, rectY2 + (this.canvas.nativeElement.height - 50));
        ctx.lineTo(rectX2 + 215, rectY2 + (this.canvas.nativeElement.height - 110));
        ctx.lineTo(rectX2 + 250, rectY2 + (this.canvas.nativeElement.height + 130));
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        //triangle group 4 ===========================================
        // triangle 4.1
        ctx.beginPath();
        ctx.moveTo(rectX3 + (this.canvas.nativeElement.width - 80), rectY3 + (this.canvas.nativeElement.height - 320));
        ctx.lineTo(rectX3 + (this.canvas.nativeElement.width + 250), rectY3 + (this.canvas.nativeElement.height + 220));
        ctx.lineTo(rectX3 + (this.canvas.nativeElement.width - 200), rectY3 + (this.canvas.nativeElement.height + 140));
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        // triangle 4.2
        ctx.beginPath();
        ctx.moveTo(rectX + (this.canvas.nativeElement.width - 100), rectY + (this.canvas.nativeElement.height - 160));
        ctx.lineTo(rectX + (this.canvas.nativeElement.width - 30), rectY + (this.canvas.nativeElement.height + 90));
        ctx.lineTo(rectX + (this.canvas.nativeElement.width - 420), rectY + (this.canvas.nativeElement.height + 60));
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        // triangle 4.3
        ctx.beginPath();
        ctx.moveTo(rectX2 + (this.canvas.nativeElement.width - 320), rectY2 + (this.canvas.nativeElement.height - 200));
        ctx.lineTo(rectX2 + (this.canvas.nativeElement.width - 50), rectY2 + (this.canvas.nativeElement.height - 20));
        ctx.lineTo(rectX2 + (this.canvas.nativeElement.width - 420), rectY2 + (this.canvas.nativeElement.height + 120));
        ctx.fillStyle = triangle_gradient;
        ctx.fill();

        ctx.restore();
        //this.animate();
      }
    }
  } //end function draw
}
