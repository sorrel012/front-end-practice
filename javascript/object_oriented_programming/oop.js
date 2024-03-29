String.prototype.yell = function () {
  console.log(this.toUpperCase());
};

Array.prototype.pop = function () {
  return 'I will never pop it off';
};

const nums = [2, 3, 4];

// // =========================팩토리 함수=========================
// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }
//
// const firstColor = makeColor(35, 255, 150);
// firstColor.hex();
// firstColor.rgb();
//
// const black = makeColor(0, 0, 0);
// black.rgb();
// black.hex();
//
//
// // =========================생성자 함수=========================
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
//
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };
//
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
//
// const color1 = new Color(255, 40, 100);

// =========================클래스=========================
class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `(${r}, ${g}, ${b})`;
  }
  rgb() {
    return `rgb${this.innerRGB()}`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const c1 = new Color(25, 67, 89, 'tomato');
