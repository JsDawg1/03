 const fname = document.querySelector("#Fninput");
const lname = document.querySelector("#lninput");
const mail = document.querySelector("#mail");
const msg = document.querySelector("#msg");
const check = document.querySelector("#checkBox");
const btn = document.querySelector("#submit");


btn.addEventListener("click", main);
 


function checkInputs(){
    var result = false;
    var radio1 = document.querySelector("#gen-radio");
    var radio2 = document.querySelector("#support-radio");
    var errorMsg = document.querySelector(".query>p.error");
    radio1.addEventListener("click", (event)=>{
        radio1.checked = true;
    })
    radio2.addEventListener("click", (event)=>{
        radio2.checked=true;
    })
    if(radio1.checked||radio2.checked){
        errorMsg.style.display = '';
        result = true;
    }
    else{
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
    }
    
    
    var errorMsg1 = document.querySelector("#fName > p.error");
    var errorMsg2 = document.querySelector("#lName > p.error");

    if(fname.value===""){
        errorMsg1.style.display = "block";
        errorMsg1.style.color = "red";
    }
    else{
        errorMsg1.style.display = '';
        result = true;
    }

    if(lname.value===""){
        errorMsg2.style.display = "block";
        errorMsg2.style.color = "red";
    }
    else{
        errorMsg2.style.display = '';
        result = true;
    }


    
  
    var errorMsg = document.querySelector(".email>p.error")
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(mail.value) && mail.value!==""){
        errorMsg.style.display = '';
        result = true;
    }
    else{
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
    }
    
 
    var errorMsg = document.querySelector(".message>p.error") ;
    if(msg.value === ""){
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
    }
    else{
        errorMsg.style.display = '';
        result = true;
    } 


    var errorMsg = document.querySelector(".check>p.error") ;
    check.addEventListener("click", (event)=>{{
        check.checked = true;
    }})

    if(check.checked){
        errorMsg.style.display = '';
        result = true;
    }
    else{
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
    }
    return result;
}





function main(){
    
    if(checkInputs()){
        console.log("We did it mate once again")
    }
    else{
        console.log("Hi")
    }
}
