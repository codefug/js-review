// 실습 설명
// 재훈이는 요즘 커피 공부에 빠져 있습니다.
// 에스프레소를 기본으로 하는 커피 메뉴의 레시피를 배웠는데요.

// 아메리카노는 에스프레소에 물을 더한 메뉴이고, 카페라떼는 에스프레소에 우유를 더한 메뉴라고 배웠습니다.

// 그래서 이 레시피를 배열로 한번 정리해 보려고 아래와 같이 코드를 작성했습니다.


// let espresso = ['espresso'];

// let americano = espresso;
// americano.push('water');

// let caffeLatte = espresso;
// caffeLatte.push('milk');

// // 테스트 코드
// console.log(espresso);
// console.log(americano);
// console.log(caffeLatte);
// 나름대로 효율적으로 코드를 작성했다고 생각했는데, 막상 코드를 실행해보니 이상한 결과가 나왔는데요.


// [ 'espresso', 'water', 'milk' ]
// [ 'espresso', 'water', 'milk' ]
// [ 'espresso', 'water', 'milk' ]
// 재훈이가 겪은 문제를 해결하면서, 카페 모카(caffeMocha) 와 바닐라 라떼(vanillaLatte) 레시피도 만들어 주세요.
// 모카는 에스프레소에 우유와 초코 시럽을, 바닐라 라떼는 에스프레소에, 우유와 바닐라 시럽을 더한 메뉴입니다.

// 아래 코드중 잘못된 부분을 수정해 주세요
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요
const caffeMocha = caffeLatte.slice()
caffeMocha.push('chocolateSyrup');
const vanillaLatte = caffeLatte.slice()
vanillaLatte.push("vanillaSyrup");

// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);

// 코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.

// [ 'espresso' ]
// [ 'espresso', 'water' ]
// [ 'espresso', 'milk' ]
// [ 'espresso', 'milk', 'chocolateSyrup' ]
// [ 'espresso', 'milk', 'vanillaSyrup' ]