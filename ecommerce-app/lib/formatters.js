const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
});

export function formatCurrency(amount) {
    return CURRENCY_FORMATTER.format(amount)
};

const Number_FORMATTER = new Intl.NumberFormat('en-US');

export function formatNumber(number)  {
    return Number_FORMATTER.format(number)
};