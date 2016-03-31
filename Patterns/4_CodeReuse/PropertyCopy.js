/**
 * 프로퍼티 복사를 통한 상속 패턴
 *
 * - 객체가 다른 객체의 기능을 단순히 복사를 통해 가져옴
 */
// 얕은 복사(shallow copy)
function extend(parent, child) {
  var i;
  child = child || {};
  for (i in parent) {
    if (parent.hasOwnProperty(i)) {
      child[i] = parent[i];
    }
  }
  return child;
}

var dad = {name: "Adam"};
var kid = extend(dad);
kid.name; // "Adam"


// 깊은 복사
function extendDeep(parent, child) {
  var i,
      toStr = Object.prototype.toString,
      astr = "[object Array]";

  child = child || {};

  for (i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === "object") {
        child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
        extendDeep(parent[i], child[i]);
      } else {
        child[i] = parent[i];
      }
    }
  }
  return child;
}


