


console.log("hello world");

const form = document.querySelector("form");
const email = document.getElementById("email");

function sendEmail() {
    var emailid =email.value;
    const bodyMessage = ` email : ${email.value} `

Email.send({
    SecureToken: "15216fa5-4edd-4427-9063-a33eebe23954",
    To: "arableearthteam@gmail.com",
    From: "arableearthteam@gmail.com",
    Subject : "Subcription Details",
    Body : bodyMessage
}).then(
  message =>{
    if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent Successfully..!",
                    icon: "success"
                });
            };
    }
);
}


function checkInputs(){
    const items =document.querySelectorAll(".item");
    for(const item of items){

        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            return false;

        }

        if (items[0].value != "") {
            checkEmail();
        }
        items[0].addEventListener("keyup", () => {
            checkEmail();
        });



        item.addEventListener("keyup",()=>{
            if(item.value != ""){
                item.classList.remove("error");
                    item.parentElement.classList.remove("error");
            }
            else{
                itemm.classList.add("error");
                item.parentElement.classList.add("error");
            }
            });
    }
}

function checkEmail(){

    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt");

    const emailLength = email.value.trim().length;

    if (!email.value.match(emailRegex) || emailLength <= 15 || emailLength >= 50) {

        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a Valid Email Address"
            return false;
        }
        else {
            errorTxtEmail.innerText = "Email Address Can't be Blank "
            return false;
        }

        return false;
    }
    else {
        email.parentElement.classList.remove("error");
        email.parentElement.classList.remove("error");

        return true;
    }


}




form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

    if(!email.classList.contains("error")){

    sendEmail();
    form.reset();
     return false;
}
}
)



