/**
 * 퍼사드(Facade)
 *
 * - 객체의 대체 인터페이스를 제공
 * - 메소드 호출들을 하나로 묶어주는 새로운 메서드 만듦
 */
var myevent = {
  // ...
  stop: function (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  // ...
};

// 브라우저 스크립팅
var myevent = {
  // ...
  stop: function (e) {
    // IE 이외의 모든 브라우저
    if (typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    if (typeof e.stopPropagation === "function") {
      e.stopPropagation();
    }
    // IE
    if (typeof e.returnValue === "boolean") {
      e.returnValue = false;
    }
    if (typeof e.cancelBubble === "boolean") {
      e.cancelBubble = true;
    }
  }
  // ...
};


