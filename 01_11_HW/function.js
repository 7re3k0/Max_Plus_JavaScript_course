document.getElementsByTagName('table')[0].addEventListener('click',function (e) {
    console.log(e.target.value);
    if (e.target.tagName ) {

    }
    var input = document.getElementById('input');
    input.value += e.target.innerHTML;
    eval(input);
});
