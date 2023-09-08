export function ReadableDate(timestamp: string | null): string {
    if (timestamp === null) {
        // Obsługa przypadku, gdy timestamp jest null
        return ""; // Możesz zwrócić pusty łańcuch lub inny wartość, która wskazuje, że data jest nieokreślona.
    }

    const date = new Date(parseInt(timestamp, 10) * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const FormatedDate = `${day}.${month}.${year}`;

    return FormatedDate;
}
