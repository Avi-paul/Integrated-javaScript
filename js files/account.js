document.getElementById('deposite-btn').addEventListener('click',function(){
    const inputDepositeAmount=document.getElementById('deposite-amount').value;
    const oldDepositeAmount=document.getElementById('deposite-a/c').innerText;
    const oldTotalAmount=document.getElementById('total-a/c').innerText;
    
    const currentDepositeAccount=parseFloat(oldDepositeAmount)+parseFloat(inputDepositeAmount);
    const currentTotalAccount=parseFloat(oldTotalAmount)+parseFloat(inputDepositeAmount);
    document.getElementById('deposite-a/c').innerText=currentDepositeAccount;
    document.getElementById('total-a/c').innerText=currentTotalAccount;
    document.getElementById('deposite-amount').value='';
})

