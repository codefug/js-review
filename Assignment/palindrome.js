// 실습 설명
// "토마토"나 "기러기"처럼 거꾸로 읽어도 똑같은 단어를 '팰린드롬(palindrome)'이라고 부릅니다.

// 팰린드롬 여부를 확인하는 함수 isPalindrome을 작성하려고 하는데요. isPalindrome은 파라미터 word가 팰린드롬이면 true를 리턴하고 팰린드롬이 아니면 false를 리턴합니다.

// 예를 들어서 "racecar"과 "토마토"는 거꾸로 읽어도 똑같기 때문에 true가 출력되어야 합니다. 그리고 "hello"는 거꾸로 읽으면 "olleh"가 되기 때문에 false가 나와야 하는 거죠.

// 실습 결과
// 코드를 잘 작성하셨다면, 다음과 같은 결과가 출력되어야 합니다.

// true
// false
// true
// true
// false
// true
function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  for (let index = 0; index<word.length;index++){
    if (index > Math.floor((word.length - 1) / 2)) {
      return true;
    }
    if (word[index] != word[word.length - 1 - index]) {
      return false;
    }
  };
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));