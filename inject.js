


function main() {
	// alert('run!')
	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'relative';
	div.style.top = 0;
	div.style.right = 0;
	// div.textContent = 'Injected!';
	div.setAttribute("id", "scrolloffmenu");

	var enable_button = document.createElement('button')
	enable_button.textContent = 'enable scrolling'
	div.appendChild(enable_button)

	var disable_button = document.createElement('button')
	disable_button.textContent = 'disable scrolling'
	div.appendChild(disable_button)
	document.body.appendChild(div);

}

main()
// disableScroll()

document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', main);
});

document.getElementById("enable").onclick = function() {
  enableScroll();
  document.getElementById("status").innerHTML = "enabled";
    document.getElementById("status").className = "enabled";
};

document.getElementById("disable").onclick = function() {
  disableScroll();
  document.getElementById("status").innerHTML = "disabled";
  document.getElementById("status").className = "disabled";
};



// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
