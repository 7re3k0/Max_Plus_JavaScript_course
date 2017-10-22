function printName() {
  var yourName = document.getElementById('yourName').value;

  function execPrint(name) {
    document.getElementById('printNameOutput').innerHTML = 'Здравейте, <span class="highlight">' + name + '!</span>';
    document.getElementById('printNameOutput').style.display = 'inline';
  };

  execPrint(yourName);
}

function converter() {
  var ammount_input = document.getElementById('ammount').value,
    currency_iput = document.getElementById('currency').value,
    currency_iput = currency_iput.toUpperCase();

  document.getElementById('converterOutput').innerHTML = 'Това в лева е = <span class="highlight">' + converting_to_bgn(ammount_input, currency_iput) + '</span>';
  document.getElementById('converterOutput').style.display = 'inline';

  function converting_to_bgn(ammount, currency) {
    if (currency == 'USD') {
      //USD to BGN 1.65538
      return ammount * 1.65538 + ' BGN';

    } else if (currency == 'EUR') {
      // EUR to BGN 1.95583
      return ammount * 1.95583 + ' BGN';

    } else if (currency == 'GBP') {
      // GBP to BGN 2.18273
      return ammount * 2.18273 + ' BGN';

    } else if (currency == 'CHF') {
      //CHF to BGN 1.68184
      return ammount * 1.68184 + ' BGN';

    } else {
      return 'Не работим с тази валута!'
    }
  };

}

function mathAction() {
  var number_1 = document.getElementById('number_1').value,
    number_2 = document.getElementById('number_2').value,
    action = document.getElementById('action').value;

  number_1 = Number(number_1);
  number_2 = Number(number_2);

  document.getElementById('mathActionOutput').innerHTML = number_1 + ' ' + action + ' ' + number_2 + ' <span class="highlight">=</span> ' + calculation(number_1, number_2, action);
  document.getElementById('mathActionOutput').style.display = 'block';

  function calculation(num1, num2, calculator) {
    if (calculator == '*') {
      return num1 * num2;
    } else if (calculator == '/') {
      return num1 / num2;
    } else if (calculator == '+') {
      return num1 + num2;
    } else if (calculator == '-') {
      return num1 - num2;
    }
  }
}


function citiesPrint() {

  document.getElementById('citiesPrintOutput').innerHTML = '<select style="margin:0;" id="cities">' + options('Sofia', 'Zagreb', 'Istandbul') + '</select>';
  document.getElementById('citiesPrintOutput').style.display = 'block';

  function options() {
    var option_items = '';
    for (var i = 0; i < arguments.length; i++) {
      option_items += '<option>' + arguments[i] + '</option>';
    }
    return option_items;
  }
}

function shopping_cart() {
  var produkt = '',
    brojkka = '',
    price = '',
    output = document.getElementById('shopping_cartOutput');
  var shopping_Cart = [];
  shopping_Cart[0] = [];
  shopping_Cart[1] = [];
  shopping_Cart[2] = [];
  shopping_Cart[3] = [];
  shopping_Cart[0]['prdukt'] = "qjca";
  shopping_Cart[0]['brojkka'] = "12";
  shopping_Cart[0]['price'] = "5";
  shopping_Cart[1]['prdukt'] = "mlqko";
  shopping_Cart[1]['brojkka'] = "1";
  shopping_Cart[1]['price'] = "2";
  shopping_Cart[2]['prdukt'] = "hlqb";
  shopping_Cart[2]['brojkka'] = "1";
  shopping_Cart[2]['price'] = "1";
  shopping_Cart[3]['prdukt'] = "bira";
  shopping_Cart[3]['brojkka'] = "1";
  shopping_Cart[3]['price'] = "1";
  for (var i = 0; i < shopping_Cart.length; i++) {
    produkt += '<div>' + shopping_Cart[i]['prdukt'] + '</div>';
    brojkka += '<div>' + shopping_Cart[i]['brojkka'] + '</div>';
    price += '<div>' + shopping_Cart[i]['price'] + '</div>';
  }
  output.innerHTML = '<div class="table"><div class="left col"><h4>Продукт</h4>' + produkt + '</div><div class="mid col"><h4>Бройка</h4>' + brojkka + '</div><div class="right col"><h4>Цена</h4>' + price + '</div>';
  output.style.display = 'flex';
}

function numToWords() {
  var input = document.getElementById('num_input').value,
    digits = [],
    output = document.getElementById('numToWordsOutput'),
    ones = ['','едно','две','три','четири', 'пет','шест','седем', 'осем', 'девет'],
    tiltwenty = ['десет','единадесет', 'дванадесет', 'тринадесет','четиринадесет','петнадесет','шестнадесет','седемнадесет','осемнадесет', 'деветнадесет'],
    tens = ['','','двадесет','тридесет','четиредесет','петдесет','шестдесет','седемдесет','осемдесет', 'деветдесет'];

  if (input == 0 || input >= 100) {
    alert('Моля изберете число само от 1 до 99!');
  } else {
    //split "input" to an array
    input = input.split("");

    for (var i = 0; i < input.length; i++) {
      //convert the "string digits" to nymbers again and push in new array
      input[i] = Number(input[i]);
      digits.push(input[i]);
    }

    if (digits.length == 1) {
      output.innerHTML = '<span style="text-transform: capitalize;">' + ones[digits[0]] + '</span>';
      output.style.display = 'inline';
    } else {
      if (digits[0] != 1 && digits[1] == 0) {
        output.innerHTML = '<span style="text-transform: capitalize;">' + tens[digits[0]] + '</span>';
        output.style.display = 'inline';
      } else if (digits[0] == 1 && digits[1] == 0) {
        output.innerHTML = '<span style="text-transform: capitalize;">' + tiltwenty[0] + '</span>';
        output.style.display = 'inline';
      } else if (digits[0] == 1 && digits[1] != 0) {
        output.innerHTML = '<span style="text-transform: capitalize;">' + tiltwenty[digits[1]] + '</span>';
        output.style.display = 'inline';
      } else {
        output.innerHTML = '<span style="text-transform: capitalize;">' + tens[digits[0]] + '</span> и ' + ones[digits[1]];
        output.style.display = 'inline';
      }
    }
    }
  }
