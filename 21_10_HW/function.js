function printName() {
  var yourName = document.getElementById('yourName').value;

  function execPrint(name) {
    document.getElementById('printNameOutput').innerHTML = 'Здравейте, <span class="highlight">' + name + '!</span>';
    document.getElementById('printNameOutput').style.display = 'inline';
  };

  execPrint(yourName);
}
