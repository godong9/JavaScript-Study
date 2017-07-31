
function firstPromise(param) {
  console.log('first promise param:', param);
  return new Promise(function (resolve, reject) {
    if (param) {
      resolve('first promise resolve');
    } else {
      reject('first promise reject');
    }
  });
}

function secondPromise(param) {
  console.log('second promise param:', param);
  return new Promise(function (resolve, reject) {
    if (param) {
      resolve('second promise resolve');
    } else {
      reject('second promise reject');
    }
  });
}

function finalHandler(param) {
  console.log('final handler param:', param);
  return new Promise(function (resolve, reject) {
    if (param) {
      resolve('final handler resolve');
    } else {
      reject('final handler reject');
    }
  });

}


/**
 * Promise 한개일 때
 *
 * ====================== 결과 ======================
 *  first promise param: first
 *  first promise resolve
 * =================================================
 */
firstPromise('first')
  .then(function (result) {
    console.log('result: ', result);
  });


/**
 * then 안에서 Promise 명시적으로 return 할 경우
 * : firstPromise -> secondPromse -> finalHandler
 *
 * ====================== 결과 ======================
 *  first promise param: first
 *  second promise param: first promise resolve
 *  final handler param: second promise resolve
 * =================================================
 */
firstPromise('first').then(function (param) {
  return secondPromise(param);
}).then(finalHandler);

// 위 코드와 동일
firstPromise('first').then(param => secondPromise(param)).then(finalHandler);


/**
 * then 안에서 Promise return 안할 경우
 * : firstPromise -> sencondePromise, finalHanlder (sencondePromise에서 undefined 리턴)
 *
 * ====================== 결과 ======================
 *  first promise param: first
 *  second promise param: first promise resolve
 *  final handler param: undefined
 * =================================================
 */
firstPromise('first').then(function (param) {
  secondPromise(param);
}).then(finalHandler);


/**
 * then 안에서 Promise 포함된 함수 실행
 * : firstPromise, secondPromise -> finalHandler (firstPromise의 리턴값을 finalHandler에서 받음)
 *
 * ====================== 결과 ======================
 *  first promise param: first
 *  second promise param: undefined
 *  final handler param: first promise resolve
 * =================================================
 */
firstPromise('first').then(secondPromise()).then(finalHandler);


/**
 * then 안에서 Promise 전달
 * : firstPromise -> secondPromise -> finalHandler
 *
 * ====================== 결과 ======================
 *  first promise param: first
 *  second promise param: first promise resolve
 *  final handler param: second promise resolve
 * =================================================
 */
firstPromise('first').then(secondPromise).then(finalHandler);
