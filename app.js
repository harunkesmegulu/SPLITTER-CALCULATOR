const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");

// const select = document.querySelector(".button");
// let number1;
// let number2;
// let number3;
// let number4;
// let number5;
// let number6;
// let amount;
// let total;
// let islem;
button1.addEventListener("click", (e) => {
  number1 = e.target;
  number1.style.backgroundColor = "black";
  number2.style.backgroundColor = "hsl(183, 100%, 15%)";
  number3.style.backgroundColor = "hsl(183, 100%, 15%)";
  number4.style.backgroundColor = "hsl(183, 100%, 15%)";
  number5.style.backgroundColor = "hsl(183, 100%, 15%)";
  islem = "btn1";

  // span.innerHTML = number1;
});
let sonuc = 0;
const hesapla = function (bill, islem) {
  switch (islem) {
    case "btn1":
      sonuc = (bill * 5) / 100;

    case "btn2":
      sonuc = (bill * 10) / 100;
    case "btn1":
      sonuc = (bill * 15) / 100;

    case "btn1":
      sonuc = (bill * 25) / 100;

    case "btn1":
      sonuc = (bill * 50) / 100;
    case "btn1":
      sonuc = (bill * random(0 - 100)) / 100;
  }
  return sonuc;
};

const amaunt1 = sonuc;
const total1 = numberpeople * sonuc;
