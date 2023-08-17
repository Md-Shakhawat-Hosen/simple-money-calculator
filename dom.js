function calculateTotal() {
    const income = parseInt(document.getElementById("income").value);
    const food = parseInt(document.getElementById("food").value);
    const rent = parseInt(document.getElementById("rent").value);
    const clothes = parseInt(document.getElementById("clothes").value);


    const total = income - (food+rent+clothes);

    document.getElementById("expenses").innerText = food + rent + clothes;
    document.getElementById('balance').innerText = total;


}

function SavingAmount() {
    const saveValue = parseInt(document.getElementById('save-input').value);

    const income = parseInt(document.getElementById('income').value);

     let result = (saveValue / 100) * income;

     document.getElementById('save-amount').innerText = result;

     const balance = document.getElementById('balance').innerText;
     document.getElementById('remain-balance').innerText = parseInt(balance)-result;


}
