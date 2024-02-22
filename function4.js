// 사회초년생 동식이는 요즘 재테크 공부를 열심히 하고 있습니다.
// 차곡차곡 월급을 모아서 적당히 목돈을 만들었는데요. 목돈을 나눠서 조금씩 적금을 드는 것보다는 정기예금을 넣는 게 더 유리하다는 걸 배웠습니다.

// 마침 은행을 갔더니 이자율 4%에 세금까지 내지 않아도 되는 정기예금 상품을 추천받아서 그동안 조금씩 모은 돈을 1년 동안 넣어두기로 하고 왔는데요.

// 즐거운 마음으로 집에 돌아와서 1년 뒤에 얼마를 받을 수 있을지를 계산하는 코드를 작성해 보려고 합니다.

// 검색해보니 이자 금액을 계산하기 위한 식은 아래와 같은데요.

// 맡긴 금액(원) * 맡기는 기간(년) * 이자율(%) / 100

// 맡긴 금액(amount)과 맡기는 기간(term), 이자율(rate)을 입력받으면 이자 금액을 계산해서 결괏값을 전달해 주는 interestCalculator 함수를 작성해 주세요.

// 함수를 잘 작성하셨다면 아래와 같이 출력되어야 합니다.
// 여기에 코드를 작성하세요
function interestCalculator(money,term,rate){
  return money*term*rate/100;
}

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');

// 실습 결과

// 맡긴 금액은 3650000원 입니다.
// 이자는 146000원 입니다.
// 최종 받을 금액은 3796000원 입니다.s