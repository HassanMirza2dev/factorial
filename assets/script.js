let result = document.querySelector("#result");
let check = document.querySelector("#check");
let number_error = document.createElement("span")
let input_prarent = document.querySelector(".input_prarent")
number_error.innerHTML=`
number must be greater than 0
`
check.addEventListener("click", () => {

    let number = document.querySelector("#number").value;
    let factorial = 1; 
    if(number<=0){
   input_prarent.appendChild(number_error);
   return
    }
    else if(number>0){
   input_prarent.removeChild(number_error);
    }
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }

    result.textContent = number + " = " + factorial;


    document.querySelector("#number").value = "";

});
