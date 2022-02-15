function generate_pin() {
    const pin = Math.round(Math.random() * 1000);
    const pinString = pin + '';
    const pinLength = pinString.length;
    if (pinLength == 3) {
        document.getElementById('pin_output').value = pin;
    }
    else {
        generate_pin();
    }
}

document.getElementById('keyPad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const prevInput = document.getElementById('typed_numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            prevInput.value = '';
        }
    }
    else {
        const prevNumber = prevInput.value;
        const current = prevNumber + number;
        document.getElementById('typed_numbers').value = current;
    }
})
//pin verify
function pinVerify() {
    const pin = document.getElementById('pin_output').value;
    const getNumbers = document.getElementById('typed_numbers').value;

    const errorMessage = document.getElementById('notify_fail');
    const successMessage = document.getElementById('notify_success');

    if (pin == getNumbers) {

        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

    }
    else {

        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';


    }
}
