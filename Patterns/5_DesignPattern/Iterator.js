/**
 * 반복자(Iterator)
 *
 * - 데이터의 저장된 내부구조는 복잡하더라도 개별 요소에 쉽게 접근할 수 있는 방법 제공
 * - next(), hasNext() 등의 메서드 제공
 */
var agg = (function () {
  var index = 0,
      data = [1, 2, 3, 4, 5],
      length = data.length;

  return {
    next: function () {
      var element;
      if (!this.hasNext()) {
        return null;
      }
      element = data[index];
      index = index + 1;
      return element;
    },
    hasNext: function () {
      return index < length;
    },
    rewind: function () {
      index = 0;
    },
    current: function () {
      return data[index];
    }
  };
}());

var element;

while (element = agg.next()) {
  console.log(element);
}

