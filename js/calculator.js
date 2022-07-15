
// const buttonValue = getButonValue('b-7');


// console.log(buttonValue);
// function updateInputValue(buttonClicked) {
//     const inputfild = document.getElementById('input-fild');
//     inputfild.value = buttonClicked;
// }
const allButton = document.getElementsByClassName('button');
const inputfild = document.getElementById('input-fild');
for (const button of allButton) {
    button.setAttribute('cursor', 'pointer');
    button.addEventListener('click', function (event) {
        const buttonText = event.target.innerText;
        switch (buttonText) {
            case 'C':
                inputfild.value = '';
                break;
            case '←':
                if (inputfild.value) {

                    inputfild.value = inputfild.value.slice(0, -1);
                }
                break;
            case '=':
                try {

                    inputfild.value = eval(inputfild.value);
                } catch {
                    inputfild.value = "Error!"
                }
                break;
            default:
                inputfild.value += buttonText;
        }
        // const buttonValue = parseFloat(buttonText);
        // updateInputValue(buttonValue);
        // const inputfild = document.getElementById('input-fild');
        // inputfild.value = buttonText;
        // console.log(buttonText);
    })

}

