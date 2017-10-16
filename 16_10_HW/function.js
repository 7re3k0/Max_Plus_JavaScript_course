function posNegFunction() {
  var x, text;

  x = document.getElementById("posNeg").value;

  if (isNaN(x)) {
    text = "Това не е число";
  } else if (x > 0) {
    text = "Положително";
  } else if (x < 0) {
    text = "Отрицателно";
  } else {
    text = "Нула";
  }
  document.getElementById("posNegOutput").innerHTML = text;
  document.getElementById("posNegOutput").style.display = "inline";
};

function biggestFunction() {
  var a, b, c, text;

  a = Number(document.getElementById("a").value);
  b = Number(document.getElementById("b").value);
  c = Number(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    text = "Едно от 3те не е число";
  } else {
    if (a > b) {
      if (a > c) {
        text = a + " e най-голямото число.";
      } else {
        text = c + " e най-голямото число.";
      }
    } else if (b > a) {
      if (b > c) {
        text = b + " e най-голямото число.";
      } else {
        text = c + " e най-голямото число.";
      }
    } else {
      text = c + " e най-голямото число.";
    };

    document.getElementById("biggestOutput").innerHTML = text;
    document.getElementById("biggestOutput").style.display = "inline";
  };
}

function divideByThree() {
  var i, text, array = [];
  for (i = 0; i <= 100; i++) {
    if (i === 0) {

    } else if (i % 3 === 0) {
      array.push(i);
    }
    text = array;
    document.getElementById("divideByThreeOutput").innerHTML = text;
    document.getElementById("divideByThreeOutput").style.display = "inline";
  }
};

function backwardsCount() {
  var i, text, array = [];

  for (i = 0; i <= 20; i++) {
    array.push(i);
  }
  text = array.reverse();
  document.getElementById("backwardsCountOutput").innerHTML = text;
  document.getElementById("backwardsCountOutput").style.display = "inline";
};

function languageCheck() {
  var language, text, params, paramsIndex, paramsIndexLg;
  params = document.getElementById("Languages");
  paramsIndex = params.options[params.selectedIndex].value;
  paramsIndexLg = params.options[params.selectedIndex].text;

  text = paramsIndex;
  language = paramsIndexLg;
  document.getElementById("lg").innerHTML = language;
  document.getElementById("lg").style.display = "inline";
  document.getElementById("languageCheckOutput").innerHTML = text;
  document.getElementById("languageCheckOutput").style.display = "inline";

};

function scoreCheck() {
  var text, score;

  score = Number(document.getElementById("score").value);
  switch (true) {
    case score >= 91:
      text = "Отличен 6";
      break;
    case score >= 81:
      text = "Много добър 5";
      break;
    case score >= 71:
      text = "Добър 4";
      break;
    case score >= 61:
      text = "Среден 3";
      break;
    default:
      text = "Слаб 2";
  }
  document.getElementById("scoreCheckOutput").innerHTML = text;
  document.getElementById("scoreCheckOutput").style.display = "inline";

};

function monthCheck() {
  var monthNum, text;
  monthNum = Number(document.getElementById("monthNum").value);
  switch (monthNum) {
    case 1:
      text = "Януари";
      break;
    case 2:
      text = "Февруари";
      break;
    case 3:
      text = "Март";
      break;
    case 4:
      text = "Април";
      break;
    case 5:
      text = "Май";
      break;
    case 6:
      text = "Юни";
      break;
    case 7:
      text = "Юли";
      break;
    case 8:
      text = "Август";
      break;
    case 9:
      text = "Септември";
      break;
    case 10:
      text = "Октомври";
      break;
    case 11:
      text = "Ноември";
      break;
    case 12:
      text = "Декември";
      break;
    default:
      text = "Моля изберете число от 1 до 12";
  }


  document.getElementById("monthCheckOutput").innerHTML = text;
  document.getElementById("monthCheckOutput").style.display = "inline";

};

function multiplicationTable() {
  var i, y, c;
  console.log("Упражнение 8: Таблица за Умножение:");
  for (i = 1; i < 11; i++) {
    for (y = 1; y < 11; y++) {
      c = i + " x " + y + " = " + i * y;
      console.log(c);
    }
  }
};

multiplicationTable();
