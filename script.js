<script>
  const inputName = document.getElementById("inputName");
  
  inputName.addEventListener("input", function() {
    const typedValue = inputName.value.trim() || "預覽文字"; // 如果輸入框是空的，則顯示 "預覽文字"

    // 找到所有 class 為 preview-text 的元素（12 個框）
    document.querySelectorAll(".preview-text").forEach(element => {
      element.textContent = typedValue;

      // 根據是否輸入內容來改變顏色
      element.style.color = inputName.value ? "#333" : "#bbb";
    });
  });
</script>
