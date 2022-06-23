let states = {"nigeria": ['kano', 'jigawa', 'kaduna'], 
"america": ["utah", "washington", "carlifonia"], "saudiyya": ["jiddah", "madina", "real"]};

let taxData = {"nigeria": 5, "america": 20, "saudiyya": 2};
let countriesSelect = document.querySelector("#all_countries");
let statesSelect = document.querySelector("#all_states")
countriesSelect.addEventListener('change', (event)=> {
let country = event.target.value;
let dropdownStates = states[country];
statesSelect.disabled = false;
for ( let state of dropdownStates) {
    stateOption = `<option value='${state}'>${state}</option>`
    statesSelect.innerHTML += stateOption;
}
});
function calculate() {
    let amount = document.querySelector("#cost_amount").value;
    let country = document.querySelector("#all_countries").value;
    let result = document.querySelector("#result");
    let answer = amount * (taxData[country] / 100);
    result.innerText = `Your Total Tax Is: ${answer}`;
}