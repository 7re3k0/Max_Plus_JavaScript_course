// document.getElementById("posNegOutput").innerHTML = text;
// document.getElementById("posNegOutput").style.display = "inline";
var arr = [], i, x;

function minNumberArr() {
  arr = [1,4,6,-8,99,-98,3,478,-54,123,0];
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
  arr = [1,2,3,4,5,6];
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
