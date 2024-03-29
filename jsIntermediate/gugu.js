// 실습 설명
// 반복문을 사용해서 구구단 프로그램을 만들어 봅시다. for문과 while문 중 어떤 반복문을 사용해도 상관없습니다.

// 참고로 이 문제는 '중첩 반복문'이라는 개념을 사용해야 하는데요. 중첩 반복문은 반복문의 동작 부분 안에 또 다른 반복문을 넣는 것을 이야기합니다. 따로 설명해 드리지 않은 개념이지만, 조금 고민하다 보면 여러분이 직접 알아낼 수도 있어요. 한번 생각해 보시고, 도저히 안 떠오르실 때 힌트를 참고해 주세요.

// 자동 채점 과제입니다. 띄어쓰기와 오탈자에 유의해 주세요.
// 실습 결과

// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// .
// .
// .
// 9 * 7 = 63
// 9 * 8 = 72
// 9 1 9 = 81

for (let index = 1; index < 10; index++) {
    for (let jndex = 0; jndex < 10; jndex++) {
        console.log(`${index} * ${jndex} = ${index*jndex}`);        
    }
}