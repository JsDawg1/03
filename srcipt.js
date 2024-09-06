const container = document.querySelector(".container")
const fName = document.querySelector("#fname")
const lName = document.querySelector("#lname");
const mail = document.querySelector("#mail")
const gen = document.querySelector("#general")
const sup = document.querySelector("#support")
const msg = document.querySelector("#Message")
const check = document.querySelector("#checkBox")
const submit = document.querySelector("#submit");
const error1 = document.querySelector("#enterVal")
 
 
submit.addEventListener("click", submitForm);

function submitForm(){
    if(checkAll()){
        console.log("form submitted");
        error1.style.cssText = "display: none"
         
    }
    else{
        error1.style.cssText = "display: block"
     }
    
}
function checkAll() {
     
    let condition = false;    // This will return true if all conditions are met
    let radioCheck = false;   // Used to ensure at least one radio button is selected

    // Check if at least one radio button is selected
    if (gen.checked === true || sup.checked === true) {
        radioCheck = true;
    }

    // Ensure all required fields are filled and conditions are met
    if (fName.value !== "" && lName.value !== "" && mail.value !== "" && msg.value !== "" && radioCheck) {
        condition = true;
    }

    return condition;
}
