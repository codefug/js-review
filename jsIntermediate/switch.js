// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
function checkPrice(grade) {
  // 여기에 코드를 작성하세요
  let price = 0;
  switch (grade) {
    case "R":
      price = RPrice;
      break;

    case "VIP":
      price = VIPPrice;
      break;

    case "S":
      price = SPrice;
      break;

    case "A":
      price = APrice;
      break;
    default:
      console.log("VIP, R, S, A 중에서 하나를 선택해 주세요.");
      return;
  }
  console.log(`${grade}석은 ${price}만 원입니다.`);
}

// 테스트 코드
checkPrice("R");
checkPrice("VIP");
checkPrice("S");
checkPrice("A");
checkPrice("B");