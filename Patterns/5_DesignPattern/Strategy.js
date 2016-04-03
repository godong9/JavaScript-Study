/**
 * 전략(Stragety)
 *
 * - 런타임에 알고리즘 선택. 사용자는 동일한 인터페이스를 유지하면서 특정한 작업을 처리할 알고리즘을 여러 가지 중에서 상황에 맞게 선택 가능
 */
// 데이터 유효성 검사 예제
var data = {
  first_name: "Super",
  last_name: "Man",
  age: "unknown",
  username: "o_0"
};

validator.config = {
  first_name: 'isNonEmpty',
  age: 'isNumber',
  username: 'isAlpahNum'
};

validator.validate(data);
if (validator.hasErrors()) {
  console.log(validator.messages.join("\n"));
}

// 값을 가지는지 확인
validator.types.isNonEmpty = {
  validate: function (value) {
    return value !== "";
  },
  instructions: "이 값은 필수입니다."
};

// 숫자 값인지 확인
validator.types.isNumber = {
  validate: function (value) {
    return !isNaN(value);
  },
  instructions: "숫자만 사용할 수 있습니다 예 1, 3.14 or 2010"
};

// 값이 문자와 숫자로만 이루어졌는지 확인
validator.types.isAlphaNum = {
  validate: function (value) {
    return !/[^a-z0-9]/i.test(value);
  },
  instructions: "특수 문자를 제외한 글자와 숫자만 사용할 수 있습니다."
};

// validator 객체
var validator = {
  // 사용할 수 있는 모든 검사 방법들
  types: {},

  // 현재 유효성 검사 세션의 에러 메시지들
  messages: [],

  // 현재 유효성 검사 설정
  // '데이터 필드명: 사용할 검사 방법'의 형식
  config: {},

  // 인터페이스 메서드
  // 'data'는 이름 => 값 쌍이다.
  validate: function (data) {
    var i, msg, type, checker, result_ok;

    // 모든 메시지를 초기화
    this.messages = [];

    for (i in data) {
      if (data.hasOwnProperty(i)) {
        type = this.config[i];
        checker = this.types[type];

        if (!type) {
          continue; // 설정된 검사 방법 없을 때 건너뜀
        }
        if (!checker) { // 설정이 존재하나 해당 검사 방법 없을 때 오류 발생
          throw {
            name: "ValidationError",
            message: type + "값을 처리할 유효성 검사기가 존재하지 않습니다."
          };
        }
        result_ok = checker.validate(data[i]);
        if (!result_ok) {
          msg = "\'" + i + "\' 값이 유효하지 않습니다." + checker.instructions;
        }
      }
    }
    return this.hasErrors();
  },

  // 도우미 메서드
  hasErrors: function () {
    return this.messages.length !== 0;
  }
};





