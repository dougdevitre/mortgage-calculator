document.getElementById('mortgage-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loan-term').value) * 12;

    const insurance = parseFloat(document.getElementById('insurance').value);
    const taxes = parseFloat(document.getElementById('taxes').value);
    const hoaFees = parseFloat(document.getElementById('hoa-fees').value);
    const utilities = parseFloat(document.getElementById('utilities').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    const totalMonthlyPayment = monthlyPayment + insurance + taxes + hoaFees + utilities + internet;

    document.getElementById('total-monthly-payment').innerText = `$${totalMonthlyPayment.toFixed(2)}`;
});

function calculateMonthlyPayment(principal, rate, term) {
    if (rate === 0) {
        return principal / term;
    } else {
        return (principal * rate) / (1 - Math.pow(1 + rate, -term));
    }
}
