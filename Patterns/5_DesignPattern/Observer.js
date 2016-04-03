/**
 * 감시자(Observer)
 *
 * - 주요 목적은 결합도를 낮추는 것. 커스텀 이벤트(custom event)라고 부르기도 함
 * - 어떤 객체가 다른 객체의 메서드를 호출하는 대신 객체의 특별한 행동을 구독해 알림을 받는다.
 * - 발행자(publisher)는 중요한 이벤트가 발생했을 때 모든 구독자(subscriber)에게 알려주며 주로 이벤트 객체의 형태로 메시지를 전달
 */
// 발행자 객체의 멤버들
// subscribers - 배열
// subscribe() - subscribers 배열에 구독자를 추가
// unsubscribe() - subscribers 배열에서 구독자를 제거
// publish() - subscribers를 순회하여 구독자들이 등록할 때 제공한 메서드들을 호출

var publisher = {
  subscribers: {
    any: [] // '이벤트 타입 : 구독자의 배열'의 형식
  },
  subscribe: function (fn, type) {
    type = type || 'any';
    if (typeof this.subscribers[type] === "undefined") {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  unsubscribe: function (fn, type) {
    this.visitSubscribers('unsubscriber', fn, type);
  },
  publish: function (publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  visitSubscribers: function (action, arg, type) {
    var pubtype = type || 'any',
        subscribers = this.subscribers[pubtype],
        i,
        max = subscribers.length;

    for (i = 0; i < max; i += 1) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
};

function makePublisher(o) {
  var i;
  for (i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
      o[i] = publisher[i];
    }
  }
  o.subscribers = {any: []};
}

// 발행자
var paper = {
  daily: function () {
    this.publish("big news today");
  },
  monthly: function () {
    this.publish("interesting analysis", "monthly");
  }
};

makePublisher(paper);

// 구독자
var joe = {
  drinkCoffee: function (paper) {
    console.log(paper + "를 읽었습니다.");
  },
  sundayPreNap: function (monthly) {
    console.log("잠들기 전에" + monthly + "를 읽고 있습니다.");
  }
};

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, 'monthly');

paper.daily(); // "big news today를 읽었습니다"
paper.daily(); // "big news today를 읽었습니다"
paper.daily(); // "big news today를 읽었습니다"
paper.monthly(); // "잠들기 전에 interesting analysis를 읽고 있습니다."





