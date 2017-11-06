//Excercise 3: don't understand the task
var id = document.getElementById('list'),
array = ['Първо', 'Второ', 'Трето'],
id2 = document.getElementById('list2'),
array2 = ['Четвърто', 'Пето', 'Шесто'];

function listCreateFunc(a, b) {
  for (var i = 0; i < b.length; i++) {
    var li = document.createElement('LI');
    li.innerHTML = b[i];
    a.appendChild(li);
  }
}
function listCreate() {
  listCreateFunc(id,array);
}
function listCreate2(){
  listCreateFunc(id2,array2);
}

//END

//Excercise 4:
var num = 0;
var a;
var toggle = false;
function toggleInterval() {
        //If timer isn't active on button press, activate it
        if (toggle == false) {

          //Set timer to be active
          toggle = true;

          a = setInterval(function () {
              num++;
              document.getElementById('setInterval').innerHTML = num;

              //Write the current number at which the timer is to a storeage item called 'currentText'
              sessionStorage.setItem('currentText', num);
          }, 500);

        //If timer is active on button press, stop the timer
        } else if (toggle == true) {
          //Set timer to be inactive
          toggle = false;

          //Write the stored number from 'currentText' to the timer
          document.getElementById('setInterval').innerHTML = sessionStorage.getItem('currentText');

          //Stop the timer
          clearInterval(a);
        };

}
//END
