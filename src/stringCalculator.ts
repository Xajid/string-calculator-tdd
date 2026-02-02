export function add(numbers: string): number {
    if (numbers === '') return 0;

    let delimiter = /,|\n/;
    let numbersPart = numbers;

    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        const customDelimiter = parts[0]?.substring(2) || ',';
        delimiter = new RegExp(customDelimiter);
        numbersPart = parts[1] || '';
    }

    return numbersPart
        .split(delimiter)
        .map(Number)
        .reduce((sum, n) => sum + n, 0);
}