function validate(){
    if(document.myForm.empNum.value==""){
        document.getElementById("empNumError").innerHTML = "Please Enter your Employee Number";
        return false;
    }

    if(document.myForm.firstName.value==""){
        document.getElementById("firstnameError").innerHTML = "Please Enter your first name";
        return false;
    }

    if(document.myForm.lastName.value==""){
        document.getElementById("lastnameError").innerHTML = "Please Enter your last name";
        return false;
    }

    if(document.myForm.empDept.value==""){
        document.getElementById("empDeptError").innerHTML = "Please Enter your Department";
        return false;
    }

    if(document.myForm.position.value==""){
        document.getElementById("positionError").innerHTML = "Please Enter your Position";
        return false;
    }

    if(document.myForm.contact.value==""){
        document.getElementById("contactError").innerHTML = "Please Enter your Contact Number";
        return false;
    }

    if(document.myForm.salary.value==""){
        document.getElementById("salaryError").innerHTML = "Please Enter your Salary";
        return false;
    }

    if(document.myForm.user.value==""){
        document.getElementById("userError").innerHTML = "Please provide a Username";
        return false;
    }

    if(document.myForm.email.value==""){
        document.getElementById("emailError").innerHTML= "Please Enter your Email";
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter valid Email Address");
            return false;
        }
    }

}

