<script>
  // 取得輸入框
  const inputName = document.getElementById("inputName");

  inputName.addEventListener("input", function () {
    const typedValue = inputName.value.trim() || "預覽字型"; // 如果輸入框為空，顯示 "預覽字型"

    // 取得所有上方文字 (main-text) 和下方文字 (sub-text)
    const mainTexts = document.querySelectorAll(".main-text");
    const subTexts = document.querySelectorAll(".sub-text");

    // 更新所有框的上方文字 (main-text) 為使用者輸入的內容
    mainTexts.forEach(element => {
      element.textContent = typedValue;
    });

    // 逐筆設定每個框的下方文字 (sub-text) 為 "字型1" ~ "字型12"
    subTexts.forEach((element, index) => {
      element.textContent = `字型${index + 1}`; // 依序顯示「字型1、字型2、...、字型12」
    });
  });
</script>
