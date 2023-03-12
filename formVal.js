function validate()
{
    var userName= document.getElementById("username").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var cnfpassword= document.getElementById("cnfpassword").value;

    checkUserNamr(userName);
    checkeMail(email);
    checkPassword(password);
    matchPassword(password, cnfpassword);
}

function checkUserNamr(userName)
{
    if(userName.length>0)
    {
        
    }
}