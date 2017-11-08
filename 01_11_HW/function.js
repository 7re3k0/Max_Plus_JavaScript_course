document.getElementsByTagName('table')[0].addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement,
  text = target.textContent || text.innerHTML;
  var input = document.getElementById('input'),
    clearBtn = document.getElementById('clearBtn'),
    result = document.getElementById('result'),
    equal = document.getElementById('equal');

  if (target == input || target == result) {
    return;
  } else if (target == clearBtn) {
    input.value = '';
    return;
  } else if (target == equal) {
    var tempResult = input.value;
    result.innerHTML = eval(tempResult);
    input.value = '';
    return ;
  } else {
    input.value += text;
    return;
  }
}, false);

function bgChange(x) {
  x.style.background = '#f4f5f6';
};

function bgNormal(x) {
  x.style.background = 'white';
}

document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      var input = document.getElementById('input'),
      result = document.getElementById('result');
      var tempResult = input.value;
      result.innerHTML = eval(tempResult);
      input.value = '';
      return ;
    }
});
