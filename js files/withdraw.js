document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputWithdrawField=document.getElementById('withdraw-amount');
    const inputWithdrawAmountString=inputWithdrawField.value;
    const  inputWithdrawAmount=parseFloat(inputWithdrawAmountString);
    inputWithdrawField.value='';
    if (isNaN(inputWithdrawAmount)) {
        alert("Please provide a number");
        return;
    }

    const oldWithdrawAccount=document.getElementById('withdraw-a/c');
    const oldWithdrawAmountString=oldWithdrawAccount.innerText;
    const oldWithdrawAmount=parseFloat(oldWithdrawAmountString);


   

    const oldTotalAccount=document.getElementById('total-a/c');
    const oldTotalAmountString=oldTotalAccount.innerText;
    const oldTotalAmount=parseFloat(oldTotalAmountString);

    if(inputWithdrawAmount>oldTotalAmount){
        alert("Insufficient balance");
        return;
    }
     const currentWithdrawAccount=oldWithdrawAmount+inputWithdrawAmount;
     oldWithdrawAccount.innerText=currentWithdrawAccount;

    const currentTotalAccount=oldTotalAmount-inputWithdrawAmount;
    oldTotalAccount.innerText=currentTotalAccount;
   
})