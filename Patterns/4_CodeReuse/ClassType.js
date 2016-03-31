/**
 * 클래스 방식의 상속
 */

// 부모 생성자
function Parent(name) {
  this.name = name || 'Adam';
}

// 생성자의 프로토타입에 기능을 추가
Parent.prototype.say = function () {
  return this.name;
};

// 아무 내용이 없는 자식 생성자
function Child(name) {

}

// 상속
inherit(Child, Parent);


/**
 * 클래스 방식의 상속 패턴 #1 - 기본 패턴
 *
 * - 프로토타입이 부모 생성자 함수로 생성한 객체 인스턴스를 가리킴
 * - 부모 객체의 프로토타입에 추가된 프로퍼티와 메서드 부모 객체 자신의 프로퍼티도 모두 상속
 * - 자식 생성자에 인자를 넘겨도 부모 생성자에 전달하지 못하는 문제 존재
 */
function inherit(C, P) {
  C.prototype = new P();
}


/**
 * 클래스 방식의 상속 패턴 #2 - 생성자 빌려쓰기
 *
 * - 부모 생성자 함수의 this에 자식 객체를 바인딩한 다음 자식 생성자가 받은 인자들을 모두 넘겨줌
 * - 부모 생성자 함수 내부의 this에 추가도된 프로퍼티만 상속. 프로토타입에 추가된 멤버는 상속되지 않음
 * - 자식 객체는 상속된 멤버의 복사본을 물려받게 됨
 */
function Child(a, c, b, d) {
  Parent.apply(this, arguments);
}

// 예제
function Article() {
  this.tags = ['js', 'css'];
}
var article = new Article();

// 클래스 방식의 상속 패턴 #1 - 기본 패턴
function BlogPost() {}
BlogPost.prototype = article;
var blog = new BlogPost();

// 클래스 방식의 상속 패턴 #2 - 생성자 빌려쓰기
function StaticPage() {
  Article.call(this);
}
var page = new StaticPage();

console.log(article.hasOwnProperty(('tags'))); // true
console.log(blog.hasOwnProperty(('tags'))); // false
console.log(page.hasOwnProperty(('tags'))); // true

blog.tags.push('html');
page.tags.push('php');
console.log(article.tags.join(', ')); // "js, css, html"

// 생성자 빌려쓰기를 적용한 다중 상속. 중복 프로퍼티 존재시 마지막 프로퍼티 값으로 덮어씀
function Cat() {
  this.legs = 4;
  this.say = function () {
    return "meaowww";
  }
}

function Bird() {
  this.wings = 2;
  this.fly = true;
}

function CatWings() {
  Cat.apply(this);
  Bird.apply(this);
}

var jane = new CatWings();
console.dir(jane); // fly: true, legs: 4, wings:2, say: function()


/**
 * 클래스 방식의 상속 패턴 #3 - 생성자 빌려쓰고 프로토타입 지정해주기
 *
 * - 자식 객체는 부모가 가진 자신만의 프로퍼티의 복사본을 가지게 되는 동시에 부모의 프로토타입 멤버에 대한 참조 또한 물려받음
 * - 부모 생성자를 비효율적으로 두 번 호출하는 단점 존재
 */
function Child(a, c, b, d) {
  Parent.apply(this, arguments);
}
Child.prototype = new Parent();

// 부모 생성자
function Parent(name) {
  this.name = name || 'Adam';
}

// 생성자의 프로토타입에 기능을 추가
Parent.prototype.say = function () {
  return this.name;
};

// 자식 생성자
function Child(name) {
  Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child("Patrick");
console.log(kid.name); // "Patrick"
console.log(kid.say()); // "Patrick"
delete kid.name;
console.log(kid.say()); // "Adam"


/**
 * 클래스 방식의 상속 패턴 #4 - 프로토타입 공유
 *
 * - 부모의 프로토타입을 똑같이 자식의 프로토타입으로 지정
 * - 자식이 프로토타입을 수정하면 부모와 다른 자식들의 프로토타입에도 영향 미침
 */
function inherit(C, P) {
  C.prototype = P.prototype;
}


/**
 * 클래스 방식의 상속 패턴 #5 - 임시 생성자
 *
 * - 부모와 자식의 프로토타입 사이에 직접적인 링크 끊음
 */
function inherit(C, P) {
  var f = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
}

// 상위 클래스 저장
function inherit(C, P) {
  var f = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype; // super 같은 역할
}

// 생성자 포인터 재설정
function inherit(C, P) {
  var F = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype;
  C.prototype.constructor = C;
}

// 임시 생성자 한 번만 만들어두고 임시 생성자의 프로토타입만 변경
var inherit = (function () {
  var F = function () {};
  return function (C, P) {
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
  };
}());


/**
 * Klass
 */
var klass = function (Parent, props) {
  var Child, F, i;

  // 새로운 생성자
  Child = function () {
    if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
      Child.uber.__construct.apply(this, arguments);
    }
    if (Child.prototype.hasOwnProperty("__construct")) {
      Child.prototype.__construct.apply(this, arguments);
    }
  };

  // 상속
  Parent = Parent || Object;
  F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.uber = Parent.prototype;
  Child.prototype.constructor = Child;

  // 구현 메서드 추가
  for (i in props) {
    if (props.hasOwnProperty(i)) {
      Child.prototype[i] = props[i];
    }
  }

  // 클래스 반환
  return Child;
};













