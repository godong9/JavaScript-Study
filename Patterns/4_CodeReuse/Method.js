/**
 * 메서드 빌려쓰기
 *
 * - call(), apply() 메서드를 활용 -> 빌려쓰려는 메서드의 this에 매개변수로 전달한 객체가 바인딩
 * - ECMAScript 5에서 Function.prototype에 bind() 메서드 추가됨
 */
// call() 예제
notmyobj.doStuff.call(myobj, param1, p2, p3);
// apply() 예제
notmyobj.doStuff.apply(myobj, [param1, p2, p3]);

// Array 메서드 빌려쓰기
function f() {
  var args = [].slice.call(arguments, 1, 3);
  return args;
}

f(1, 2, 3, 4, 5, 6); // [2, 3]이 반환


var one = {
  name: "object",
  say: function (greet) {
    return greet + ", " + this.name;
  }
};

var two = {
  name: "another object"
};

console.log(one.say.apply(two, ['hello'])); // "hello, another object"

// 함수를 변수에 할당한 경우 함수 안의 this는 전역 객체 가리킴
var say = one.say;
say('hoho'); // "hoho, undefined"

// 콜백 함수로 전달한 경우
var yetanother = {
  name: "Yet another object",
  method: function (callback) {
    return callback('Hola');
  }
};
yetanother.method(one.say); // "Hola, undefined"

// 메서드와 객체 바인딩
function bind(o, m) {
  return function () {
    return m.apply(o, [].slice.call(arguments));
  };
}

var twosay = bind(two, one.say);
twosay('yo'); // "yo, another object"


var newFunc = obj.someFunc.bind(myobj, 1, 2, 3);



