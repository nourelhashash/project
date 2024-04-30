function validateform(){
    var email=document.forms["myform"]["email"].value;
    var password=document.forms["myform"]["password"].value;
    
    if(email == "" || password == ""){
        alert("Email and password are required");
        return false;
    }
    
    if(email != "michelle@gmail.com"){
        alert("The email is invalid");
        return false;
    }
    
    if(password != "123456"){
        alert("The password is invalid");
        return false;
    }
    
    
    window.location.href = "home.html";
    return false; 
}
