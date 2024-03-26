const input = document.querySelector("#input");

function checker() {
  const words = document.querySelectorAll(".word");
  if (words.length === 0) {
    alert("Success!👏");
    if (confirm("retry?")) {
      window.location.reload();
    }
  }
}

// 여기에 코드를 작성하세요
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const words = document.querySelectorAll("span");
    for (const word of words) {
      if (input.value === word.getAttribute("data-word")) {
        word.remove();
        input.value = "";
        checker();
      }
    }
  }
});
