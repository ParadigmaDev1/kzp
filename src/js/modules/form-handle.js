export const formHandle = () => {

    function addSpecialist(input) {
        input.value = +input.value + 1;
    }

    function removeSpecialist(input) {
        input.value = +input.value - 1;
        input.value = input.value < 1 
            ? 1
            : input.value;
    }


    let formExtended = document.querySelectorAll('.form-extended');

    formExtended.forEach(formItem => {
        if (formItem) {
            let formBtnCountPlus = formItem.querySelector('.form__btn-count-plus');
            let formBtnCountMinus = formItem.querySelector('.form__btn-count-minus');
            let inputPositiveNumber = formItem.querySelector('.input__valid-positive-number');

            formBtnCountPlus.addEventListener('click', () => addSpecialist(inputPositiveNumber));
            formBtnCountMinus.addEventListener('click', () => removeSpecialist(inputPositiveNumber));
        }
    })

}


