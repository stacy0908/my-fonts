<script>
  // 取得輸入框
  const inputName = document.getElementById("nameInput");

  inputName.addEventListener("input", function () {
    const typedValue = inputName.value.trim(); // 取得使用者輸入的內容

    // 取得所有上方文字 (main-text) 和下方文字 (sub-text)
    const mainTexts = document.querySelectorAll(".main-text");
    const subTexts = document.querySelectorAll(".sub-text");

    // 更新所有框的上方文字 (main-text)
    mainTexts.forEach(element => {
      if (typedValue === "") {
        element.textContent = "預覽字型"; // 當輸入框為空，顯示 "預覽字型"
        element.classList.add("placeholder-text"); // 添加 class 讓字變小
      } else {
        element.textContent = typedValue; // 顯示使用者輸入的內容
        element.classList.remove("placeholder-text"); // 移除 class 讓字體恢復正常大小
      }
    });

    // 逐筆設定每個框的下方文字 (sub-text) 為 "字型1" ~ "字型12"
    subTexts.forEach((element, index) => {
      element.textContent = `字型${index + 1}`; // 依序顯示「字型1、字型2、...、字型12」
    });
  });
</script>
