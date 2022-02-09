module.exports = function toReadable (number) {


  const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    500: "five hundred",
    600: "six hundred",
    700: "seven hundred",
    800: "eight hundred",
    900: "nine hundred",
  };

    let dozens = number - number % 10;
    let ones = number % 10;
    let hundred = number - number % 100;

    if (number < 20) {
      return obj[number];
    };

    if (number < 100) {
      if (number % 10 === 0) {
        return obj[number];
      } else {
        return `${obj[dozens]} ${obj[ones]}`;
      }
    }
    if (number < 1000) {
      if (number % 100 === 0) {
        return obj[number];
      }else if ((number - hundred) < 20) {
        return `${obj[hundred]} ${obj[number - hundred]}`;
      } else if (number % 10 === 0) {
        return `${obj[hundred]} ${obj[number - hundred]}`;
      } else {
        return `${obj[hundred]} ${obj[number % 100 - ones]} ${obj[ones]}`;
      }
    }
}
