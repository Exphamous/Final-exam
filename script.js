function calculateFutureValue() {
    const principal = parseFloat(document.getElementById('principal').value);
    const investment = parseFloat(document.getElementById('investment').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    if (
        isNaN(principal) || isNaN(investment) || isNaN(rate) || isNaN(years) ||
        principal < 0 || investment < 0 || rate < 0 || years <= 0
    ) {
        document.getElementById('result').textContent = "Please enter valid input values.";
        return;
    }
    const monthlyRate = rate / 12;
    const totalMonths = years * 12;
    let futureValue = principal * Math.pow(1 + monthlyRate, totalMonths);
    for (let i = 1; i <= totalMonths; i++) {
        futureValue += investment * Math.pow(1 + monthlyRate, totalMonths - i);
    }

    document.getElementById('result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
