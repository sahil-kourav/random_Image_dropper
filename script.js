let ary = [
  "./assets/img1.png",
  "./assets/img2.png",
  "./assets/img3.png",
  "./assets/img4.png",
  "./assets/img5.png",
  "./assets/img6.png",
  "./assets/img7.png",
  "./assets/img8.png",
  "./assets/img9.png",
  "./assets/img10.png",
];

let btn = document.querySelector("button");
let img = document.createElement("img");
let body = document.querySelector("body");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * ary.length);
  let x = Math.random() * 90;
  let y = Math.random() * 90;
  let rot = Math.random() * 360;

  let img = document.createElement("img");
  img.setAttribute("src", ary[num]);
  img.style.left = x + "%";
  img.style.top = y + "%";
  img.style.rotate = rot + "deg";
});
