function answer(choose) {
  const result = document.getElementById("result");
  const btnA = document.getElementById("btnA");
  const btnB = document.getElementById("btnB");
  
  if (choose === "A") {
  result.textContent = "Correct!正解です！";
 btnB.disabled = true;
  } else {
    result.textContent ="不正解、正解は「A.50円」でした！";
 btnA.disabled = true;
  }
}
