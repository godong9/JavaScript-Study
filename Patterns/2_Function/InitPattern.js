/**
 * 즉시 객체 초기화: init이 완료되고 나면 객체에 접근 불가
 */
({
  // 여기에 설정 값(설정 상수들을 정의
  maxwidth: 600,
  maxheight: 400,

  // 유틸리티 메서드
  gimmeMax: function() {
    return this.maxwidth + "x" + this.maxheight;
  },

  // 초기화
  init: function () {
    console.log(this.gimmeMax());
    // 기타 초기화 작업들
  }
}).init();






