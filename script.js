 <!-- JavaScript -->
  <script>
    // 取得輸入框
    const inputName = document.getElementById("nameInput");
    inputName.addEventListener("input", function () {
      const typedValue = inputName.value.trim(); // 使用者輸入的文字
      // 取得所有 main-text 與 sub-text 元素
      const mainTexts = document.querySelectorAll(".main-text");
      const subTexts = document.querySelectorAll(".sub-text");
      // 更新 main-text 顯示的內容與樣式
      mainTexts.forEach(element => {
        if (typedValue === "") {
          element.textContent = "預覽字型"; // 顯示預設文字
          element.classList.add("placeholder-text"); // 加上變小字 class
        } else {
          element.textContent = typedValue; // 顯示使用者輸入文字
          element.classList.remove("placeholder-text"); // 移除變小字 class
        }
      });
      // 依序設定字型1~字型12的文字
      subTexts.forEach((element, index) => {
        element.textContent = 字型${index + 1};
      });
    });
  </script>
</body>
</html>

  <!-- JavaScript -->
  <script>
    // 當使用者輸入文字時，更新上方那行 (main-text) 的內容
    document.getElementById("nameInput").addEventListener("input", function() {
      const typedText = this.value.trim() || "預覽字型";

      // 選取所有 .main-text 元素 (上面那行)
      document.querySelectorAll(".main-text").forEach(elem => {
        elem.textContent = typedText;
      });
    });
  </script>
</body>
</html>

<script>
  // 取得輸入框
  const inputName = document.getElementById("nameInput");
  inputName.addEventListener("input", function () {
    const typedValue = inputName.value.trim(); // 使用者輸入的文字
    // 取得所有 main-text 與 sub-text 元素
    const mainTexts = document.querySelectorAll(".main-text");
    const subTexts = document.querySelectorAll(".sub-text");
    // 更新 main-text 顯示的內容與樣式
    mainTexts.forEach(element => {
      if (typedValue === "") {
        element.textContent = "預覽字型"; // 顯示預設文字
        element.classList.add("placeholder-text"); // 加上變小字 class
      } else {
        element.textContent = typedValue; // 顯示使用者輸入文字
        element.classList.remove("placeholder-text"); // 移除變小字 class
      }
    });
    // 依序設定字型1~字型12的文字
    subTexts.forEach((element, index) => {
      element.textContent = 字型${index + 1};
    });
  });
</script>
