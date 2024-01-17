let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let button = document.querySelector("button.captBtn");
let div = document.querySelector("div.captcha");
let input = document.querySelector("input#input");
let p = document.querySelector("p#notCorrect");

generateData();

button.addEventListener("click", function () {
  console.log(generate);
  if (input.value === generate) {
    p.innerText = "Successful!";
    p.style.color = "#00a876";
    alert("Successful!");
  } else {
    p.innerText = "The values ​​are not entered correctly!";
    p.style.color = "#d30101";
    p.style.opacity = "1";
    generateData();
  }
});

function generateData() {
  generate =
    characters.charAt(Math.random() * 62) +
    characters.charAt(Math.random() * 62) +
    characters.charAt(Math.random() * 62) +
    characters.charAt(Math.random() * 62);

  div.innerText = generate;
}
