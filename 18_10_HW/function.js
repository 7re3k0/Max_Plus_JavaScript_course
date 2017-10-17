var arr = [],
  i,
  x,
  numberInput1,
  numberInput2;


function minNumberArr() {
  arr = [1, 4, 6, -8, 99, -98, 3, 478, -54, 123, 0];
  for (i = 0; i < arr.length; i++) {
    if (x == undefined) {
      x = arr[i];
    } else if (x > arr[i]) {
      x = arr[i];
    }
  }
  document.getElementById('minNumberArrOutput').innerHTML = x;
  document.getElementById('minNumberArrOutput').style.display = 'inline';
};

function sumArr() {
  arr = [1, 2, 3, 4, 5, 6];
  for (i = 0; i < arr.length; i++) {
    if (x == undefined) {
      x = arr[i];
    } else {
      x += arr[i];
    }
  }
  document.getElementById('sumArrOutput').innerHTML = x;
  document.getElementById('sumArrOutput').style.display = 'inline';
};

function minMaxFunc() {
  function starEndArr(startNumber, endNumber) {
    if (isNaN(startNumber) || isNaN(endNumber)) {
      console.log('Едно от двете не е число');
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
  document.getElementById('reverseArrOutput').innerHTML = '[' + x + ']';
  document.getElementById('reverseArrOutput').style.display = 'inline';
}

function veggieList() {
  arr = ['Cabbage', 'Radish', 'Lettuce', 'Leek', 'Pepper'];
  for (i = 0; i < arr.length; i++) {
    if (x == undefined) {
      x = '<li>' + arr[i] + '</li>'
    } else {
      x += '<li>' + arr[i] + '</li>';
    }
  }
  
  document.getElementById('veggieListOutput').innerHTML = '<ul id="vegetables">' + x + '</ul>';
  document.getElementById('veggieListOutput').style.display = 'block';
};
