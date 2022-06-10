const billAmount = document.getElementById('bill-amount');
const cashGiven = document.getElementById('cash-given');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('error-msg');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000, 500, 100, 20, 10, 5 ,1];

checkBtn.addEventListener("click", function validateAmount() {
    hideMessage();
    if(billAmount.value > 0) {
        if(cashGiven.value > billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage('Ready to wash some plates?');
        }
    } else{
        showMessage('Invalid Bill Amount');
    }
} )

function calculateChange(amountToBeReturned) {
    for( let i = 0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];

        noOfNotes[i].textContent = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}