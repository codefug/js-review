// 실습 설명
// 중학교 때 배운 '계승(팩토리얼)' 기억하시나요?

// 1부터 어떤 양의 정수 n까지의 정수를 모두 곱한 것을 말하며 n!로 나타낸다.

// "계승" 네이버 지식백과 바로가기

// 팩토리얼은 아래와 같이 계산합니다. 0!은 1이라는 점도 기억해주세요.


// 0! = 1
// 1! = 1
// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6
// 4! = 1 * 2 * 3 * 4 = 24
// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720
// 그러면, 파라미터로 양의 정수 n을 받고 n!을 계산해서 리턴해 주는 함수 factorial을 작성해 주세요.
function factorial(n) {
  let result = 1;
  if (n>=2){
    for (let index = n; index >= 2; index--) {
      result*=index;    
    }
  }
  // 여기에 코드를 작성해 주세요.

  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));

// 실습 결과
// 코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.

// 479001600
// 720
// 6
// 1