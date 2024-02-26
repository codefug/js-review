// 실습 설명
// 여기 이번 주 온도를 섭씨로 기록한 배열이 있습니다.


// let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
// 그런데, 미국에서 오랫동안 살다 온 태오는 아직 섭씨온도가 익숙하지 않은데요. 불편한 태오를 위해 각각의 섭씨온도들을 화씨로 변환해 봅시다. 화씨로 변환하는 공식은 아래와 같습니다.


// // F: 화씨(fahrenheit), C: 섭씨(celsius)
// F = ( C * 9 / 5 ) + 32;
// 반복문을 이용해서 celsius 배열의 각 요소들을 화씨로 변환한 값을 fahrenheit 배열에 추가해 주세요.
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성하세요
celsiusTemps.forEach((value)=>{let F = (value * 9) / 5 + 32; fahrenheitTemps.push(F)})
// fahrenheitTemps 테스트
console.log(fahrenheitTemps);

// 실습 결과
// 코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.


// [
//   80.6,   77, 78.8,
//   71.6, 82.4, 80.6,
//   69.8
// ]