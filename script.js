<script>
  const inputName = document.getElementById("inputName");
  const leftText = document.getElementById("leftText");
  const rightText = document.getElementById("rightText");

  inputName.addEventListener("input", function() {
    const typedValue = inputName.value.trim();

    // 更新兩個白色框內的文字
    leftText.textContent = typedValue || "預覽文字"; 
    rightText.textContent = typedValue || "預覽文字"; 

    // 只改變顏色，不改變字體大小
    if (typedValue) {
      leftText.style.color = "#333"; /* ✅ 變深色 */
      rightText.style.color = "#333"; /* ✅ 變深色 */
    } else {
      leftText.style.color = "#bbb"; /* ✅ 保持淺色 */
      rightText.style.color = "#bbb"; /* ✅ 保持淺色 */
    }
  });
</script>
