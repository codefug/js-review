// showTitle 함수를 완성해 주세요
function showTitle(e) {
  // 여기에 코드를 작성하세요
  const boolean = e.target.getAttribute("data-title");
  if (boolean) {
    const newNode = document.createElement("span");
    newNode.classList.add("title");
    newNode.textContent = boolean;
    e.target.append(newNode);
  }
}

// removeTitle 함수를 완성해 주세요
function removeTitle(e) {
  // 여기에 코드를 작성하세요
  const boolean = e.target.getAttribute("data-title");
  if (boolean) {
    e.target.lastElementChild.remove();
  }
}

const map = document.querySelector(".map");

// '대상'과 '타입'을 수정해 주세요
map.addEventListener("mouseover", showTitle);
map.addEventListener("mouseout", removeTitle);
