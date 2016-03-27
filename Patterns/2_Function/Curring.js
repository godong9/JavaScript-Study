/**
 * 함수 적용 - apply, call
 */
var sayHi = function (who) {
  return "Hello" + (who ? ", " + who : "") + "!";
};

// 함수 호출
sayHi();
sayHi("world");

// 함수를 적용 (apply)
sayHi.apply(null, ["hello"]);

var alien = {
  sayHi: function (who) {
    return "Hello" + (who ? ", " + who : "") + "!";
  }
};

alien.sayHi('world');
sayHi.apply(alien, ["humans"]);

// call
sayHi.call(alien, "humans");


/**
 * 커링(Curring): 함수가 부분적인 적용을 이해하고 처리할 수 있도록 만드는 과정.
 */
// 커링된 add
function add(x, y) {
  var oldx = x, oldy = y;
  if (typeof oldy === "undefined") {
    return function (newy) {
      return oldx + newy;
    };
  }
  return x + y;
}

typeof add(5); // function
add(3)(4);

// 커링된 add. x가 암묵적으로 클로저에 저장되기 때문에 가능
function add(x, y) {
  if (typeof y === "undefined") {
    return function (y) {
      return x + y;
    };
  }
  return x + y;
}


/**
 * 범용 커링 함수
 */
function schonfinkelize(fn) {
  var slice = Array.prototype.slice,
      stored_args = slice.call(arguments, 1);
  return function () {
    var new_args = slice.call(arguments),
        args = stored_args.concat(new_args);
    return fn.apply(null, args);
  };
}

// 일반 함수
function add(x, y) {
  return x + y;
}

// 함수를 커링하여 새로운 함수 만듬
var newadd = schonfinkelize(add, 5);
newadd(4); // 9

// 반환되는 새로운 함수 바로 호출
schonfinkelize(add, 6)(7); // 13







