/**
 * 콜백 패턴
 *
 * - 함수는 객체이기 때문에 함수를 다른 함수에 인자로 전달 가능
 */
function writeCode(callback) {
  // Do wirte code
  callback();
}

function introduceBugs() {
  // Do make bug
}

writeCode(introduceBugs);

// another example
var findNodes = function (callback) {
  var i = 100000,
    nodes = [],
    found;

  // 콜백 함수를 호출할 수 있는지 확인
  if (typeof callback !== "function") {
    callback = false;
  }

  while (i) {
    i -= 1;
    // logic

    if (callback) {
      callback(found);
    }

    nodes.push(found);
  }
  return nodes;
};

// 콜백과 유효범위 - 콜백 메서드가 자신이 속해있는 객체를 참조하기 위해 this를 사용하면 예상치 않게 동작
var myapp = {};
myapp.color = "green";
myapp.paint = function (node) {
  node.style.color = this.color;
};

findNodes(myapp.paint); // this.color 에서 this 가 전역 객체를 참조하기 때문에 잘못된 동작

// 아래와 같이 수정
var findNodes = function (callback, callback_obj) {
  if (typeof callback === "string") {
    callback = callback_obj[callback];
  }
  //...
  if (typeof callback === "function") {
    callback.call(callback_obj, found);
  }
  //...
};

findNodes(myapp.paint, myapp);
findNodes("paint", myapp);


// 비동기 이벤트 리스너
document.addEventListener("click", console.log, false);


// 타임아웃 - setTimeout(), setInterval()
var thePlotThickens = function () {
  console.log('500ms later...');
};
setTimeout(thePlotThickens, 500);


