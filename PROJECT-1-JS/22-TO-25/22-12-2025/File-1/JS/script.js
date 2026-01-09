function validateForm() 
{
    let email = prompt("Please Enter A Valid Email ID");
    let password = prompt("Password Must Be At Least 8 Characters Long");
    let confirmPassword = prompt("Password And Confirm Password Do Not Match");
    if (emailID.test(email)) 
    {
        alert("Please Enter A Valid Email ID");
        return false;
    }
    if (password.length < 6) 
    {
        alert("Password Must Be At Least 8 Characters Long");
        return false;
    }
    if (password !== confirmPassword) 
    {
        alert("Password And Confirm Password Do Not Match");
        return false;
    }
    alert("Form Submitted Successfully");
    return true;
}
document.getElementById("Email").value;
document.getElementById("Password").value;
document.getElementById("ConfirmPassword").value;
