// CURSOR
(function() {
  var cur = document.getElementById('cur');
  var ring = document.getElementById('cur-ring');
  var mx = window.innerWidth/2, my = window.innerHeight/2;
  var tx = mx, ty = my;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top = my + 'px';
  });

  function animRing() {
    tx += (mx - tx) * 0.15;
    ty += (my - ty) * 0.15;
    ring.style.left = tx + 'px';
    ring.style.top = ty + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  document.addEventListener('mousedown', function(e) {
    spawnLeaf(e.clientX, e.clientY);
  });

  document.addEventListener('mouseover', function(e) {
    if (e.target.closest('a') || e.target.closest('button')) {
      cur.style.width = '26px';
      cur.style.height = '26px';
    } else {
      cur.style.width = '18px';
      cur.style.height = '18px';
    }
  });

  var leaves = ['🍃','🌿','🍀','🌱'];
  function spawnLeaf(x, y) {
    for (var i = 0; i < 4; i++) {
      (function(i) {
        setTimeout(function() {
          var el = document.createElement('div');
          el.className = 'c-leaf';
          el.textContent = leaves[Math.floor(Math.random() * leaves.length)];
          el.style.cssText = 'position:fixed;pointer-events:none;z-index:99997;font-size:'
            + (12 + Math.random()*10) + 'px;left:'
            + (x + (Math.random()-.5)*30) + 'px;top:'
            + (y + (Math.random()-.5)*20) + 'px;';
          document.body.appendChild(el);
          setTimeout(function() { el.remove(); }, 1200);
        }, i * 60);
      })(i);
    }
  }
})();

// SHOWCASE CANVAS
(function() {
  var srcs = ['pro.PNG', 'Pro2.jpeg', 'pro.PNG', 'Pro2.jpeg'];
  var texts = ['Reduces Hair Fall','Stimulates New Growth','Fights Dandruff','100% Pure Herbal Formula'];
  var canvas = document.getElementById('showcaseCanvas');
  var ctx = canvas.getContext('2d');
  var loaded = [], cur = 0, fadeProg = 0, fadingOut = false;
  var lastSwitch = 0, zoom = 1, zoomDir = 1;

  function resize() {
    canvas.width = canvas.offsetWidth || 800;
    canvas.height = canvas.offsetHeight || 460;
  }
  resize();
  window.addEventListener('resize', resize);

  function drawCover(img, alpha) {
    if (!img) return;
    var cw = canvas.width, ch = canvas.height;
    var scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    var dw = img.naturalWidth * scale * zoom;
    var dh = img.naturalHeight * scale * zoom;
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    ctx.drawImage(img, (cw-dw)/2, (ch-dh)/2, dw, dh);
    ctx.restore();
  }

  function setDot(i) {
    for (var j = 0; j < 4; j++) {
      var d = document.getElementById('d'+j);
      if (d) d.className = (j===i) ? 'sdot active' : 'sdot';
    }
  }

  function setText(i) {
    var el = document.getElementById('showcaseText');
    if (!el) return;
    el.style.opacity = 0;
    setTimeout(function() {
      el.textContent = texts[i];
      el.style.opacity = 1;
    }, 350);
  }

  var loadCount = 0;
  for (var i = 0; i < srcs.length; i++) {
    (function(idx) {
      var img = new Image();
      img.onload = function() {
        loaded[idx] = img;
        loadCount++;
        if (loadCount === srcs.length) {
          lastSwitch = Date.now();
          loop();
        }
      };
      img.src = srcs[idx];
    })(i);
  }

  function loop() {
    resize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var now = Date.now();
    zoom += zoomDir * 0.0003;
    if (zoom > 1.06) zoomDir = -1;
    if (zoom < 1.0) zoomDir = 1;
    if (!fadingOut) {
      drawCover(loaded[cur], 1);
      if (now - lastSwitch > 3500) {
        fadingOut = true;
        fadeProg = 0;
      }
    } else {
      fadeProg += 1000 / (900 * 60);
      var nxt = (cur + 1) % srcs.length;
      drawCover(loaded[cur], 1 - fadeProg);
      drawCover(loaded[nxt], fadeProg);
      if (fadeProg >= 1) {
        fadingOut = false;
        cur = nxt;
        lastSwitch = now;
        zoom = 1; zoomDir = 1;
        setDot(cur);
        setText(cur);
      }
    }
    requestAnimationFrame(loop);
  }

  setDot(0);
  setText(0);
})();