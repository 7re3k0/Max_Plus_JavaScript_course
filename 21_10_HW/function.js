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

  document.getElementById('citiesPrintOutput').innerHTML = '<select style="margin:0;" id="cities">'+ options('Sofia', 'Zagreb', 'Istandbul') + '</select>';
  document.getElementById('citiesPrintOutput').style.display = 'block';

  function options() {
    var option_items = '';
    for (var i = 0; i < arguments.length; i++) {
      option_items += '<option>' + arguments[i] + '</option>';
    }
    return option_items;
  }
}
