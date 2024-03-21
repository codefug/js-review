const N = 180;
// 여기에 코드를 작성하세요
let sum = 0,
  i = 1;

while (i <= 180) {
  if (180 % i) {
    i;
  } else {
    console.log(i);
    sum += 1;
  }
  i++;
}
console.log(`${N}의 약수는 총 ${sum}개입니다.`);