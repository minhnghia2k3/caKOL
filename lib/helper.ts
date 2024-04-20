export function formatCurrency(amount: number) {
    const formatted = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
    return formatted;
}

export function formatDate(inputDateString: string) {
    // Create a new Date object from the input date string
    const dateObject = new Date(inputDateString);

    // Extract day, month, and year components from the date object
    const day = dateObject.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if needed
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Get month (+1 because months are zero-based) and pad with leading zero if needed
    const year = dateObject.getFullYear(); // Get full year

    // Construct the formatted date string in DD/MM/YYYY format
    const formattedDateString = `${day}/${month}/${year}`;

    return formattedDateString;
}
