// 실습 설명
// 숫자형을 담고 있는 변수들(material1, material3, material5)과 문자열을 담고 있는 변수들(material2, material4)이 있습니다. 변수들끼리 연산해서 result1에는 문자열 '34'를, result2에는 숫자형 34를 만들어 담아 주세요. 단, 변수가 아닌 숫자를 직접 사용하지 마세요. result1과, result2는 반드시 material1~5 변수들과 연산식으로만 할당해야 합니다.

// 실습 결과

// 34
// string
// 34
// number

// 숫자형과 문자열 재료
let material1 = 3;
let material2 = "3";
let material3 = 10;
let material4 = "4";
let material5 = 4;

// 연산 결과
let result1;
let result2;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 할당
// 여기에 코드를 작성하세요
result1 = material2 + material4;
result2 = material1 * material3 + material5;

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);

// null, defined 안나와서 내가 적는 코드

console.log(null == undefined); // true 자동 형변환이 되기 때문이다.
console.log(null === undefined); // false 자동 형변환이 되지 않기 때문
