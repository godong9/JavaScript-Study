/**
 * 샌드박스 패턴
 */
// 샌드박스 사용법
new Sandbox(function (box) {
  // 여기에 코드가 들어감
});

// 모듈 'ajax'와 'event'를 사용하는 객체
Sandbox(['ajax', 'event'], function (box) {
  // console.log(box);
});

Sandbox('ajax', 'event', function (box) {
  // console.log(box);
});

// 쓸 수 있는 모듈 모두 사용
Sandbox('*', function (box) {
  // console.log(box);
});

Sandbox(function (box) {
  // console.log(box);
});

// 샌드박스 객체의 인스턴스를 여러 개 만드는 경우
Sandbox('dom', 'event', function (box) {

  Sandbox('ajax', function (box) {
    // 여기서 box 객체는 바깥쪽 함수의 box 객체와 다름
  });
});

// 모듈 추가하기
Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
  box.getElement = function () {};
  box.getStyle = function () {};
  box.foo = "bar";
};

Sandbox.modules.event = function (box) {
  // 필요에 따라 Sandbox 프로토타입에 접근 가능
  // box.constructor.prototype.m = "mmm";
  box.attachEvent = function () {};
  box.detachEvent = function () {};
};

Sandbox.modules.ajax = function (box) {
  box.makeRequest = function () {};
  box.getResponse = function () {};
};

// 생성자 구현
function Sandbox() {
  // arguments를 배열로 변경
  var args = Array.prototype.slice.call(arguments),
      // 마지막 인자는 콜백 함수
      callback = args.pop(),
      // 모듈은 배열로 전달될 수도 있고 개별 인자로 전달될 수도 있다.
      modules = (args[0] && typeof args[0] === "string") ? args : args[0],
      i;

  // 함수가 생성자로 호출되도록 보장
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }

  // this에 필요한 프로퍼티들을 추가
  this.a = 1;
  this.b = 2;

  // 코어 'this' 객체에 모듈을 추가
  // 모듈이 없거나 "*"이면 사용 가능한 모든 모듈을 사용
  if (!modules || modules === '*' || modules[0] === '*') {
    modules = [];
    for (i in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i);
      }
    }
  }

  // 필요한 모듈들을 초기화
  for (i = 0; i < modules.length; i += 1) {
    Sandbox.modules[modules[i]](this);
  }

  // 콟백 함수를 호출
  callback(this);
}

// 필요한 프로토타입 프로퍼티들을 추가
Sandbox.prototype = {
  name: "My Application",
  version: "1.0",
  getName: function () {
    return this.name;
  }
};
