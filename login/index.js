function check(form){
    if(form.userEmail.value == "mani" && form.password.value == "UE168063"){
        window.open('/home/mani/iwtProject/IWTProject/home/index.html', "_self")
    }else{
        alert("Authentication Error")
    }
}