/**
 Alex Kayser
*/

var btnMessage = document.getElementById('sendMessage');
let input = document.getElementById('message');
let output = document.getElementById('messageOutput');
var timeout = 2000; //two seconds
var clean;

btnMessage.onclick = function () {
    if (input.readOnly)
        return;

    if (input.value == '') {
        output.innerHTML = 'Opss..';

        setTimeout(() => {
            output.innerHTML = 'try again';
            setTimeout(() => {
                output.innerHTML = '';
            }, timeout);
        }, timeout);

        input.focus();
    } else {
        output.innerHTML = input.value;
        input.readOnly = true;
        clean = setInterval(() => {
            let txt = input.value;
            if (txt.length > 0) {
                input.value = txt.substring(0, txt.length - 1);
            } else {
                clearInterval(clean);
                input.readOnly = false;
                input.focus();
            }
        }, timeout / 20);
    }
}

input.addEventListener("keyup", () => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btnMessage.click();
    }
});