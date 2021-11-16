import { GlowParticle } from './glowparticle.js';

const COLORS = [
  { r: 255, g: 249, b: 220 },
  { r: 243, g: 218, b: 254 },
  { r: 245, g: 253, b: 234 },
  { r: 235, g: 253, b: 204 },
  { r: 255, g: 225, b: 241 },
];

export class Canvas {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.querySelector('#root').appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.totalParticles = 7;
    this.particles = [];
    this.maxRadius = 40;
    this.minRadius = 20;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      let item = new GlowParticle(
        Math.random() * this.stageWidth, //x
        Math.random() * this.stageHeight, //y
        (Math.random() + 1) * this.minRadius, // radius
        COLORS[curColor], //rgb
      );

      if (i % 2 === 0) {
        item = new GlowParticle(
          Math.random() * this.stageWidth, //x
          Math.random() * this.stageHeight, //y
          (Math.random() + 1) * this.maxRadius, // radius
          COLORS[curColor], //rgb
        );
      }

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }

      this.particles[i] = item;
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}

// window.onload = () => {
//   new Canvas();
// };
