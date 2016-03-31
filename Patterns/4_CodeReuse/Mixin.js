/**
 * 믹스-인
 *
 * - 여러 객체에서 복사해온 것을 한 객체 안에 섞어 넣음
 * - 부모들과의 연결 고리는 끊어진 상태
 */
function mix() {
  var arg, prop, child = {};
  for (arg = 0; arg < arguments.length; arg += 1) {
    for (prop in arguments[arg]) {
      if (arguments[arg].hasOwnProperty(prop)) {
        child[prop] = arguments[arg][prop];
      }
    }
  }
  return child;
}

var cake = mix(
  {eggs: 2, large: true},
  {butter: 1, salted: true},
  {flour: "3 cups"},
  {sugar: "sure!"}
);





