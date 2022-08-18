document.getElementById('log-in-btn').addEventListener('click',function(){
    const inputEmail=document.getElementById('input-email');
    const email= inputEmail.value;
    const inputPassword=document.getElementById('input-password');
    const password=inputPassword.value;
    console.log(email,password)
    if(email==='avijit@gmail.com'&& password==='avijit'){
        window.location.href='account.html' 
    }else{
        alert('please give correct info')
    }
    inputEmail.value='';
    inputPassword.value='';

})