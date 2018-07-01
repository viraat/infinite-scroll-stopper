


function main() {

  // change facebook 

  var e = document.getElementById("pageTitle");
  e.id = "somethingelse";

  document.title = "Facebook"

  var trythisthing = setInterval(removeTitle, 1)


  // document.getElementsByTagName('head')[0].innerHTML = "test";


	// alert('run!')
	// just place a div at top right,.
	



  var div = document.createElement('div');
	div.style.position = 'relative';
	div.style.top = 0;
	div.style.right = 0;
	// div.textContent = 'Injected!';
	div.setAttribute("id", "scrolloffmenu");

	var enable_button = document.createElement('button');
	enable_button.textContent = 'dyou wanna be a lame and enable scrolling again cuz '; 
  enable_button.id = "enable";
	div.appendChild(enable_button);

	var disable_button = document.createElement('button');
	disable_button.textContent = 'yo dude disable scrolling';
  disable_button.id = "disable";
	div.appendChild(disable_button);

  var status = document.createElement('div');
  status.id = "status";
  div.appendChild(status);
	document.body.appendChild(div);

  // console.log(document.getElementsByClassName("_45mq"))
  // document.getElementsByClass("_45mq")[0].appendChild(div2);
  var div2 = document.createElement('span');
  div2.style.position = 'relative';
  div2.style.top = 0;
  div2.style.right = 0;
  div2.setAttribute("id2", "wbwgrid");



  /*var myTableRows = [
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}],
      [{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."},{"th":"."}]
  ];

  var table = document.createElement("table");
  for(var rowIndex in myTableRows) {
      var row = document.createElement("tr");
      for(var colIndex in myTableRows[rowIndex]) {
          for(var tag in myTableRows[rowIndex][colIndex]) {
              var cell = document.createElement(tag);
              var cellContents = document.createTextNode(myTableRows[rowIndex][colIndex][tag]);
              cell.appendChild(cellContents);
              row.appendChild(cell);
          }
      }
      table.appendChild(row);
  }
  document.getElementsByClassName("_45mq")[0].appendChild(table);
  table.id = "wbwtable"*/


  var newtable = document.createElement('div');

  newtable.innerHTML=tableCreate();


  newtable.textContent= "";

  /*var newtable = tableCreate();*/



  

  document.getElementsByClassName("_45mq")[0].appendChild(newtable);
  newtable.id = 'tabble'

  var i = 0;
  var tableUpdate = setTimeout(myUpdate, 1000, i);

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

function tableCreate() {
    var body = document.getElementsByClassName('_45mq')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '0');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
             
                var td = document.createElement('td');
                td.className = 'updategriddy';
                td.appendChild(document.createTextNode(''))
                /*i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;*/
                tr.appendChild(td)
            
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
    tbl.id = 'testest';
    // body.id('testest')
    // tbl.id('testtest');
}

function myUpdate(i) {
  document.getElementsByClassName('updategriddy')[i].innerHTML += '.';
    if (i < 100){
      setTimeout(myUpdate, 1000, i+1)
        }
    }

function removeTitle() {
  document.title = "Facebook"
}