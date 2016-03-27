// Function expression (Anonymous function) => 함수의 name 프로퍼티가 빈 문자열
var add = function (a, b) {
  return a + b;
};

// Named function expression => 함수의 name 프로퍼티에 함수 name 할당
var add = function add(a, b) {
  return a + b;
};

// Function declaration
function add(a, b) {
  return a + b;
}




