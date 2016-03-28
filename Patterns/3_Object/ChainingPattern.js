/**
 * 체이닝 패턴: 객체에 연쇄적으로 메서드를 호출할 수 있도록 하는 패턴
 */
var obj = {
  value: 1,
  increment: function () {
    this.value += 1;
    return this;
  },
  add: function (v) {
    this.value += v;
    return this;
  },
  shout: function () {
    alert(this.value);
  }
};

// 메서드 체이닝 호출
obj.increment().add(3).shout(); // 5





