/**
 * 장식자(Decorator)
 *
 * - 런타임시 부가적인 기능을 객체에 동적으로 추가 가능
 * - 기대되는 행위를 사용자화하거나 설정 가능
 * - 기본적인 기능을 가지는 평범한 객체로 시작해서 사용 가능한 장식자들의 풀(pool)에서 원하는 것을 골라 객체에 기능을 덧붙여 감
 */
// 사용 방법
var sale = new Sale(100); // 가격은 100달러
sale = sale.decorate('fedtax'); // 연방세 추가
sale = sale.decorate('quebec'); // 지방세 추가
sale = sale.decorate('money'); // 통화 형식을 지정
sale.getPrice(); // "$112.88"

// 구현
function Sale(price) {
  this.price = price || 100;
}

Sale.prototype.getPrice = function () {
  return this.price;
};

Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice: function () {
    var price = this.uber.getPrice();
    price += price * 5 / 100;
    return price;
  }
};

Sale.decorators.quebec = {
  getPrice: function () {
    var price = this.uber.getPrice();
    price += price * 7.5 / 100;
    return price;
  }
};

Sale.decorators.money = {
  getPrice: function () {
    return "$" + this.uber.getPrice().toFixed(2);
  }
};

Sale.prototype.decorate = function (decorator) {
  var F = function () {},
      overrides = this.constructor.decorators[decorator],
      i, newobj;
  F.prototype = this;
  newobj = new F();
  newobj.uber = F.prototype;
  for (i in overrides) {
    if (overrides.hasOwnProperty(i)) {
      newobj[i] = overrides[i];
    }
  }
  return newobj;
};


// 목록을 사용한 구현
function Sale(price) {
  this.price = (price > 0) || 100;
  this.decorators_list = [];
}

Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice: function (price) {
    return price + price * 5 / 100;
  }
};

Sale.decorators.quebec = {
  getPrice: function (price) {
    return price + price * 7.5 / 100;
  }
};

Sale.decorators.money = {
  getPrice: function (price) {
    return "$" + price.toFixed(2);
  }
};

Sale.prototype.decorate = function (decorator) {
  this.decorators_list.push(decorator);
};

Sale.prototype.getPrice = function() {
  var price = this.price,
      i,
      max = this.decorators_list.length,
      name;
  for (i = 0; i < max; i += 1) {
    name = this.decorators_list[i];
    price = Sale.decorators[name].getPrice(price);
  }
  return price;
};



