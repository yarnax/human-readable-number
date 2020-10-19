module.exports = function toReadable (number) {
  let textNumber = number.toString().split("");
  let answer = '';
  if (number === 0) return "zero";

  if (number>99) {
    switch (textNumber[textNumber.length-3]) {
      case "1":
        answer += "one hundred";
        break;
      case "2":
        answer += "two hundred";
        break;
      case "3":
        answer += "three hundred";
        break;
      case "4":
        answer += "four hundred";
        break;
      case "5":
        answer += "five hundred";
        break;
      case "6":
        answer += "six hundred";
        break;
      case "7":
        answer += "seven hundred";
        break;
      case "8":
        answer += "eight hundred";
        break;
      case "9":
        answer += "nine hundred";
        break;
      default:
        answer += "";
        break;    
    }
  }

  if (number>9) {
    switch (textNumber[textNumber.length-2]) {
      case "1":
        switch (textNumber[textNumber.length-1]) {
          case "1":
            answer += " eleven";
            break;
          case "2":
            answer += " twelve";
            break;
          case "3":
            answer += " thirteen";
            break;
          case "4":
            answer += " fourteen";
            break;
          case "5":
            answer += " fifteen";
            break;
          case "6":
            answer += " sixteen";
            break;
          case "7":
            answer += " seventeen";
            break;
          case "8":
            answer += " eighteen";
            break;
          case "9":
            answer += " nineteen";
            break;
          case "0":
            answer += " ten";
            break;
          default:
            break;
          }
        break;
      case "2":
        answer += " twenty";
        break;
      case "3":
        answer += " thirty";
        break;
      case "4":
        answer += " forty";
        break;
      case "5":
        answer += " fifty";
        break;
      case "6":
        answer += " sixty";
        break;
      case "7":
        answer += " seventy";
        break;
      case "8":
        answer += " eighty";
        break;
      case "9":
        answer += " ninety";
        break;
      default:
        answer += "";
        break;
      }
    }
  if (!(textNumber[textNumber.length-2]==="1")) {
    switch (textNumber[textNumber.length-1]) {
      case "1":
        answer += " one";
        break;
      case "2":
        answer += " two";
        break;
      case "3":
        answer += " three";
        break;
      case "4":
        answer += " four";
        break;
      case "5":
        answer += " five";
        break;
      case "6":
        answer += " six";
        break;
      case "7":
        answer += " seven";
        break;
      case "8":
        answer += " eight";
        break;
      case "9":
        answer += " nine";
        break;
      default:
        answer += "";
        break;    
    }
  }
  
  return answer.trim();
}
