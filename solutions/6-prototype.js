// BEGIN

export default function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}


const conversionRates = {
    usd: { eur: 0.7 },
    eur: { usd: 1.2 }
};


Money.prototype.getValue = function() {
    return this.value;
};

Money.prototype.getCurrency = function() {
    return this.currency;
};

Money.prototype.exchangeTo = function(newCurrency) {
    if (this.currency === newCurrency) {
        return new Money(this.value, this.currency);
    }

    const rate = conversionRates[this.currency][newCurrency];
    const newValue = this.value * rate;
    return new Money(newValue, newCurrency);
};

Money.prototype.add = function(money) {
    const convertedMoney = money.currency === this.currency
        ? money
        : money.exchangeTo(this.currency);

    const newValue = this.value + convertedMoney.getValue();
    return new Money(newValue, this.currency);
};

Money.prototype.format = function() {
    const options = {
        style: 'currency',
        currency: this.currency.toUpperCase(),
        minimumFractionDigits: 2
    };

    return this.value.toLocaleString(undefined, options);
};
// END
