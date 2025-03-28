// 取得輸入框
const inputName = document.getElementById("nameInput");

// 當使用者在輸入框輸入內容時
inputName.addEventListener("input", function () {
  const typedValue = inputName.value.trim(); // 使用者真正輸入的文字(去除頭尾空白)

  // 取得所有 main-text 與 sub-text 元素
  const mainTexts = document.querySelectorAll(".main-text");
  const subTexts  = document.querySelectorAll(".sub-text");

  // 依照使用者是否有輸入文字，更新 main-text 的內容與樣式
  mainTexts.forEach(element => {
    if (typedValue === "") {
      element.textContent = "預覽字型";    // 顯示預設文字
      element.classList.add("placeholder-text"); 
    } else {
      element.textContent = typedValue;   // 顯示使用者輸入文字
      element.classList.remove("placeholder-text");
    }
  });
  // 依序設定字型1~字型12的文字（若只有部分字型，也可自行調整）
  subTexts.forEach((element, index) => {
    // ★ 這裡使用 ES6 反引號 (Template Literal) 進行字串插值
    element.textContent = 字型${index + 1};
  });
});
