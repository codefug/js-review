let myVoca = {
  function: "함수",
  variable: "변수",
  constant: "상수",
  local: "지역의",
  global: "전반적인",
};

// 1. 이미 외운 단어 3개를 삭제해 주세요
// 여기에 코드를 작성하세요
function deleteObj(...name) {
  Array.from(name).forEach((element) => {
    delete myVoca[element];
  });
}
deleteObj("function", "constant", "local");

console.log(myVoca);
console.log(myVoca.constant);

// 2. 오늘 외울 단어 4개를 추가해 주세요
// 여기에 코드를 작성하세요
function addObj(meaning, ...name) {
  Array.from(name).forEach((element, index) => {
    myVoca[element] = meaning[index];
  });
}

addObj(
  ["확장하다", "내보내다", "불러오다", "기본값"],
  "extend",
  "export",
  "import",
  "default value"
);

console.log(myVoca);
console.log(myVoca.export);

// 3. default value의 뜻을 출력해 주세요
// 여기에 코드를 작성하세요
console.log(myVoca["default value"]);
