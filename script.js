"use strict";

const labels = document.querySelectorAll("label");


labels.forEach(lable => {
  lable.innerHTML = lable.innerText
    .split("")
    .map((letter, i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`).join("")
})