//Excercise 2:
var box = document.getElementById('box2'),
position = 0,
moveBox = setInterval(movement, 1)
function movement() {
  if (position == 500) {
    // clearInterval(box);
  } else {
    position++;
    box.style.left = position + 'px';
  }
};

//Excercise 3: don't understand the task

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
