var arr = [],
  i,
  x,
  numberInput1,
  numberInput2;


function minNumberArr() {
  arr = [1, 4, 6, -8, 99, -98, 3, 478, -54, 123, 0];
  x = [];
  for (i = 0; i < arr.length; i++) {
    if (x == undefined) {
      x = arr[i];
    } else if (x > arr[i]) {
      x = arr[i];
    }
  }
  document.getElementById('minNumberArrOutput').innerHTML = 'Най-малката стойност е <span class="highlight">' + x + '</span>';
  document.getElementById('minNumberArrOutput').style.display = 'inline';
  arr = [];
  x = [];
};

function sumArr() {
  arr = [1, 2, 3, 4, 5, 6];
  x = undefined;
  for (i = 0; i < arr.length; i++) {
    if (x == undefined) {
      x = arr[i];
    } else {
      x += arr[i];
    }
  }
  document.getElementById('sumArrOutput').innerHTML = 'Сбора на масива е ' + x;
  document.getElementById('sumArrOutput').style.display = 'inline';
  arr = [];
  x = undefined;
};

function minMaxFunc() {
  function starEndArr(startNumber, endNumber) {
    if (isNaN(startNumber) || isNaN(endNumber)) {
      document.getElementById('minMaxFuncOutput').innerHTML = 'Едно от двете не е число';
      document.getElementById('minMaxFuncOutput').style.display = 'inline';
    } else {
      if (startNumber < endNumber) {
        for (i = startNumber; i <= endNumber; i++) {
          arr.push(i);
        };
      } else {
        for (i = startNumber; i >= endNumber; i--) {
          arr.push(i);
        };
      }
    };
    document.getElementById('minMaxFuncOutput').innerHTML = 'Числата са в конзолата';
    document.getElementById('minMaxFuncOutput').style.display = 'inline';
    console.log(arr);
    arr = [];
  }
  numberInput1 = Number(document.getElementById('numInput1').value);
  numberInput2 = Number(document.getElementById('numInput2').value);
  starEndArr(numberInput1, numberInput2);
}

function reverseArr() {
  arr = [1, 2, 3, 4, 5, 6];
  x = [];
  for (i = 0; i < arr.length; i++) {
    x.unshift(arr[i]);
  }
  document.getElementById('reverseArrOutput').innerHTML = 'Обратния масив е [' + x + ']';
  document.getElementById('reverseArrOutput').style.display = 'inline';
  arr = [];
  x = undefined;
}

function veggieList() {
  arr = ['Cabbage', 'Radish', 'Lettuce', 'Leek', 'Pepper'];
  for (i = 0; i < arr.length; i++) {
    if (x == undefined) {
      x = '<li><span class="list-item">' + arr[i] + '</span></li>'
    } else {
      x += '<li><span class="list-item">' + arr[i] + '</span></li>';
    }
  }

  document.getElementById('veggieListOutput').innerHTML = '<ul id="vegetables">' + x + '</ul>';
  document.getElementById('veggieListOutput').style.display = 'block';
  window.scrollTo(0, document.body.scrollHeight);
  arr = [];
  x = undefined;
};
