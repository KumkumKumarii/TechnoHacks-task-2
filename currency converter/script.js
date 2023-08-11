function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Conversion rates including INR
    const conversionRates = {
        USD: {
            EUR: 0.85,
            GBP: 0.73,
            INR: 74.8,
            USD: 1
        },
        EUR: {
            USD: 1.18,
            GBP: 0.86,
            INR: 88.5,
            EUR: 1
        },
        GBP: {
            USD: 1.37,
            EUR: 1.16,
            INR: 102.6,
            GBP: 1
        },
        INR: {
            USD: 0.013,
            EUR: 0.011,
            GBP: 0.0097,
            INR: 1
        }
    };

    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    document.getElementById('result').value = convertedAmount.toFixed(2);
}
