/* particles.js — lightweight gold aura behind portrait */
(function (){
  const canvas = document.getElementById("aura");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");

  let w, h, particles;
  const COUNT = 28;
  const GOLD = "rgba(212,175,55,"; // alpha appended
  const RESIZE = () => {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio,0,0,window.devicePixelRatio,0,0);
  };

  class P {
    constructor(){
      this.reset(true);
    }
    reset(init){
      const r = Math.min(w,h)/2;
      this.angle = Math.random()*Math.PI*2;
      this.radius = r*0.5 + Math.random()*r*0.45;
      this.size = 2 + Math.random()*3;
      this.speed = (0.001 + Math.random()*0.003) * (Math.random()<0.5?-1:1);
      this.alpha = 0.3 + Math.random()*0.5;
      if(init){
        this.x = w/2 + Math.cos(this.angle)*this.radius;
        this.y = h/2 + Math.sin(this.angle)*this.radius;
      }
    }
    step(){
      this.angle += this.speed;
      this.x = w/2 + Math.cos(this.angle)*this.radius;
      this.y = h/2 + Math.sin(this.angle)*this.radius;
      this.alpha += (Math.random()-0.5)*0.02;
      this.alpha = Math.max(0.15, Math.min(0.9, this.alpha));
    }
    draw(){
      const grad = ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size*4);
      grad.addColorStop(0, GOLD+(this.alpha)+")");
      grad.addColorStop(1, "rgba(212,175,55,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.size*4,0,Math.PI*2);
      ctx.fill();
    }
  }

  function init(){
    RESIZE();
    particles = Array.from({length: COUNT}, ()=>new P());
    requestAnimationFrame(tick);
  }

  function tick(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{p.step(); p.draw();});
    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", RESIZE);
  init();
})();
