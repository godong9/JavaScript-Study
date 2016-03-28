/**
 * 비공개 함수를 공개 메서드로 노출: 자바스크립트에서 함수는 값 복사이기 때문에 가능
 *
 * - var a = function() { console.log("A"); }
 * - var b = a;
 * - b = function() { console.log("B"); }
 * - console.log(a); // function() { console.log("A"); }
 * - console.log(b); // function() { console.log("B"); }
 */
var myarray;

(function () {
  var astr = "[object Array]",
    toString = Object.prototype.toString;

  function isArray(a) {
    return toString.call(a) === astr;
  }

  function indexOf(haystack, needle) {
    var i = 0,
      max = haystack.length;
    for (; i < max; i += 1) {
      if (haystack[i] === needle) {
        return i;
      }
    }
    return -1;
  }

  // 공개적인 접근이 허용되는 기능들
  myarray = {
    isArray: isArray,
    indexOf: indexOf,
    inArray: indexOf
  };

}());

myarray.isArray([1,2]); // true
myarray.indexOf(["a", "b", "z"], "z"); // 2
myarray.inArray(["a", "b", "z"], "z"); // 2

myarray.indexOf = null;
myarray.inArray(["a", "b", "z"], "z"); // 2. 비공개 함수 indexOf는 안전하게 보호되기 때문에 정상 동작


