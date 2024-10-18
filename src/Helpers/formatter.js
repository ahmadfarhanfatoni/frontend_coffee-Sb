export const formatCurrency = (value, locale = 'id-ID', currency='IDR') => {
    
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(value);
};