// Animations globales dynamiques
(function(){
  document.documentElement.classList.add('is-anim-init');

  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll('.reveal-on-scroll'));
  if(revealEls.length && 'IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },{ threshold: 0.15 });
    revealEls.forEach(el=> io.observe(el));
  } else {
    // Fallback
    revealEls.forEach(el=> el.classList.add('is-visible'));
  }

  /* Effet tilt 3D interactif */
  const tiltSelector = ['.portfolio-item', '.stage-gallery-button', '.button-ajouter'];
  const tiltEls = document.querySelectorAll(tiltSelector.join(','));
  const maxTilt = 12; // degrés
  tiltEls.forEach(el=>{
    el.classList.add('tiltable');
    const glow = document.createElement('span'); glow.className='tilt-glow'; el.appendChild(glow);
    function handle(e){
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left)/rect.width; // 0..1
      const y = (e.clientY - rect.top)/rect.height;
      const tiltX = (y - .5) * -2 * maxTilt;
      const tiltY = (x - .5) * 2 * maxTilt;
      el.dataset.tiltActive = 'true';
      el.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(6px)`;
      glow.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(169,123,255,0.55), transparent 70%)`;
    }
    function reset(){
      el.dataset.tiltActive = 'false';
      el.style.transform = '';
    }
    el.addEventListener('mousemove', handle);
    el.addEventListener('mouseleave', reset);
  });

  /* Barre de progression de scroll */
  let scrollBar = document.querySelector('.scroll-progress');
  if(!scrollBar){
    scrollBar = document.createElement('div');
    scrollBar.className='scroll-progress';
    document.body.appendChild(scrollBar);
  }
  function updateScrollBar(){
    const h = document.documentElement;
    const scrolled = (h.scrollTop)/(h.scrollHeight - h.clientHeight);
    scrollBar.style.transform = `scaleX(${scrolled})`;
  }
  window.addEventListener('scroll', updateScrollBar, { passive:true });
  updateScrollBar();

  /* Fade-in initial + fade-out sur navigation interne */
  document.body.classList.add('page-fade-in');
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(a && a.href && a.target !== '_blank' && a.origin === location.origin && !a.href.endsWith('#') && !a.hash){
      e.preventDefault();
      document.body.classList.add('page-fade-out');
      setTimeout(()=>{ location.href = a.href; }, 250);
    }
  });


  // Compteurs animés
  const counters = document.querySelectorAll('[data-count]');
  const animateCount = (el)=>{
    const target = parseInt(el.getAttribute('data-count'),10);
    if(isNaN(target)) return;
    const duration = prefersReduce ? 0 : 1600;
    const startTime = performance.now();
    const startVal = 0;
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
    function frame(now){
      const progress = Math.min(1, (now - startTime)/duration);
      const eased = easeOutCubic(progress);
      const current = Math.round(startVal + (target - startVal)*eased);
      el.textContent = current.toLocaleString('fr-FR');
      if(progress < 1) requestAnimationFrame(frame);
      else el.classList.add('count-animated');
    }
    if(duration===0){ el.textContent = target.toLocaleString('fr-FR'); el.classList.add('count-animated'); }
    else requestAnimationFrame(frame);
  };

  if(counters.length){
    if('IntersectionObserver' in window){
      const io2 = new IntersectionObserver((ents)=>{
        ents.forEach(en=>{
          if(en.isIntersecting){
            animateCount(en.target); io2.unobserve(en.target);
          }
        });
      },{ threshold: 0.4 });
      counters.forEach(c=> io2.observe(c));
    } else counters.forEach(animateCount);
  }

  // Parallax léger sur éléments .parallax-bg (translateY basé sur scroll)
  const parallaxEls = Array.from(document.querySelectorAll('.parallax-bg'));
  if(parallaxEls.length && !prefersReduce){
    let lastY = window.scrollY; let ticking=false;
    function update(){
      const h = window.innerHeight;
      parallaxEls.forEach(el=>{
        const rect = el.getBoundingClientRect();
        const ratio = (rect.top - h*0.5)/h; // -1 à 1 environ
        const translate = ratio * -40; // amplitude
        el.style.transform = `translateY(${translate.toFixed(2)}px)`;
      });
      ticking=false;
    }
    window.addEventListener('scroll', ()=>{ lastY = window.scrollY; if(!ticking){ requestAnimationFrame(update); ticking=true; } }, { passive:true });
    update();
  }

  // Ajouter classe décorative sur h2 pour micro-interaction si non déjà décoré
  document.querySelectorAll('h2').forEach(h=>{
    if(!h.classList.contains('heading-wave')){
      h.classList.add('heading-wave');
    }
  });

})();
