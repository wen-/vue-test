window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function smoothwheel(obj = {}) {
  this.elem = document.getElementById(obj.elem) || document.documentElement || document.body;
  this.running = false;
  var that = this,container,
    currentY = 0,
    targetY = 0,
    oldY = 0,
    maxScrollTop = 0,
    minScrollTop,
    direction,
    onRenderCallback = null,
    fricton = 0.95, //值越大减速越慢
    vy = 0,
    stepAmt = 1,
    minMovement = 0.1;

  var updateScrollTarget = function(amt) {
    targetY += amt;
    vy += (targetY - oldY) * stepAmt;
    oldY = targetY;
  };
  var render = function() {
    if (vy < -minMovement || vy > minMovement) {
      currentY = currentY + vy;
      if (currentY > maxScrollTop) {
        currentY = vy = 0;
      } else if (currentY < minScrollTop) {
        vy = 0;
        currentY = minScrollTop;
      }

      container.scrollTop = (-currentY);

      vy *= fricton;

      console.log("currentY:", currentY);
      if (onRenderCallback) {
        onRenderCallback();
      }
    }
  };
  this.animateLoop = function() {
    if (!that.running) return;
    requestAnimFrame(that.animateLoop);
    render();
  };
  this.onWheel = function(e) {
    (e.currentTarget.nodeName!='BODY' && e.currentTarget.nodeName!='HTML') && e.preventDefault();
    var evt = e;

    var delta = evt.detail ? evt.detail * -1 : evt.wheelDelta / 40;
    var dir = delta < 0 ? -1 : 1;
    if (dir != direction) {
      vy = 0;
      direction = dir;
    }

    //重置当前，以防发生非滚轮滚动(滚动条拖动等)
    currentY = -container.scrollTop;

    console.log("delta:", delta);
    updateScrollTarget(delta);
  };

  if (!("ontouchstart" in window)) {
    container = this.elem;
    container.addEventListener("mousewheel", this.onWheel);
    container.addEventListener("DOMMouseScroll", this.onWheel);

    //将target/old/current Y设置为与当前滚动位置匹配，以防止跳转到容器顶部
    targetY = oldY = container.scrollTop;
    currentY = -targetY;

    minScrollTop = container.clientHeight - container.scrollHeight;
    if (obj.onRender) {
      onRenderCallback = obj.onRender;
    }
    if (!this.running) {
      this.running = true;
      this.animateLoop();
    }
  }
}

smoothwheel.prototype.disabled = function() {
    this.running = false;
    this.elem.removeEventListener("mousewheel", this.onWheel);
    this.elem.removeEventListener("DOMMouseScroll", this.onWheel);
};
smoothwheel.prototype.enabled = function() {
    this.running = true;
    this.animateLoop();
    this.elem.addEventListener("mousewheel", this.onWheel);
    this.elem.addEventListener("DOMMouseScroll", this.onWheel);
};
