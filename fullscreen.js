var button = document.querySelector(&#39;#containerGame .buttonGame1&#39;);
button.addEventListener(&#39;click&#39;, fullscreen, {passive: true});
// when you are in fullscreen, ESC and F11 may not be trigger by keydown listener. 
// so don&#39;t use it to detect exit fullscreen
document.addEventListener(&#39;keydown&#39;, function (e) {
  console.log(&#39;key press&#39; + e.keyCode);
});
// detect enter or exit fullscreen mode
document.addEventListener(&#39;webkitfullscreenchange&#39;, fullscreenChange, {passive: true});
document.addEventListener(&#39;mozfullscreenchange&#39;, fullscreenChange,{passive: true});
document.addEventListener(&#39;fullscreenchange&#39;, fullscreenChange, {passive: true});
document.addEventListener(&#39;MSFullscreenChange&#39;, fullscreenChange, {passive: true});

function fullscreen() {
  // check if fullscreen mode is available
  if (document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled) {
    
    // which element will be fullscreen
    var iframe = document.querySelector(&#39;#containerGame iframe&#39;);
    // Do fullscreen
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  }
  else {
    document.querySelector(&#39;.error&#39;).innerHTML = &#39;Your browser is not supported&#39;;
  }
}

function fullscreenChange() {
  if (document.fullscreenEnabled ||
       document.webkitIsFullScreen || 
       document.mozFullScreen ||
       document.msFullscreenElement) {
    console.log(&#39;enter fullscreen&#39;);
  }
  else {
    console.log(&#39;exit fullscreen&#39;);
  }
  // force to reload iframe once to prevent the iframe source didn&#39;t care about trying to resize the window
  // comment this line and you will see
  var iframe = document.querySelector(&#39;iframe&#39;);
  iframe.src = iframe.src;
}
