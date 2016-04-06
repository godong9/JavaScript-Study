/**
 * 이벤트 처리
 */

var b = document.getElementById('clickme');
if (document.addEventListener) { // W3C
  b.addEventListener('click', myHandler, false);
} else if (document.attachEvent) { // IE
  b.attachEvent('onclick', myHandler);
} else { // 최후의 수단
  b.onclick = myHandler;
}

function myHandler(e) {
  var src, parts;

  // 이벤트 객체와 소스 엘리먼트를 가져옴
  e = e || window.event;
  src = e.target || e.srcElement;

  // 버튼의 라벨을 변경
  parts = src.innerHTML.split(": ");
  parts[1] = parseInt(parts[1], 10) + 1;
  src.innerHTML = parts[0] + ": " + parts[1];

  // 이벤트가 상위 노드로 전파되지 않게 한다.
  if (typeof e.stopPropagation === "function") {
    e.stopPropagation();
  }
  if (typeof e.cancelBubble !== "undefined") {
    e.cancelBubble = true;
  }
  // 기본 동작이 수행되지 않게 한다.
  if (typeof e.preventDefault === "function") {
    e.preventDefault();
  }
  if (typeof e.returnValue !== "undefined") {
    e.returnValue = false;
  }
}


/**
 * 이벤트 위임
 *
 * - 이벤트 버블링을 이용해서 개별 노드에 붙는 이벤트 리스너의 개수를 줄여줌 -> 감싸고 있는 div 엘리먼트에 하나의 이벤트 리스너만 붙임
 * - YUI3의 Y.delegate() 메서드
 */
function myHandler(e) {
  var src, parts;

  // 이벤트 객체와 소스 엘리먼트를 가져옴
  e = e || window.event;
  src = e.target || e.srcElement;

  if (src.nodeName.toLowerCase() !== "button") {
    return;
  }

  // 버튼의 라벨을 변경
  parts = src.innerHTML.split(": ");
  parts[1] = parseInt(parts[1], 10) + 1;
  src.innerHTML = parts[0] + ": " + parts[1];

  // 이벤트가 상위 노드로 전파되지 않게 한다.
  if (typeof e.stopPropagation === "function") {
    e.stopPropagation();
  }
  if (typeof e.cancelBubble !== "undefined") {
    e.cancelBubble = true;
  }
  // 기본 동작이 수행되지 않게 한다.
  if (typeof e.preventDefault === "function") {
    e.preventDefault();
  }
  if (typeof e.returnValue !== "undefined") {
    e.returnValue = false;
  }
}


