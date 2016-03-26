/**
 * JSON 리터럴: 객체 리터럴에서 프로퍼티명을 따옴표로 감싸야 함
 */
var a = {"name": "value", "some": [1, 2, 3]};

// JSON.parse()
var jstr = '{"mykey": "my value"}';
var data = JSON.parse(jstr);

console.log(data.mykey); // "my value"

// JSON.stringify()
var dog = {
  name: "Fido",
  dob: new Date(),
  legs: [1, 2, 3, 4]
};

var jsonstr = JSON.stringify(dog);

console.log(jsonstr); // "{"name":"Fido","dob":"2016-03-26T06:07:22.780Z","legs":[1,2,3,4]}"

