/**
 * method() 메서드: prototype을 method()라는 메서드 속에 숨겨두는 문법 설탕
 */
var Person = function (name) {
  this.name = name;
}.
  method('getName', function () {
    return this.name
  }).
  method('setName', function (name) {
    this.name = name;
    return this;
  });

var a = new Person('Adam');
a.getName(); // 'Adam'
a.setName('Eve').getName(); // 'Eve'

// method() 구현
if (typeof Function.prototype.method !== "function") {
  Function.prototype.method = function (name, implementation) {
    this.prototype[name] = implementation;
    return this;
  };
}


