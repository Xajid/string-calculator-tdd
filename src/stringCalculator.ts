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

    const nums = numbersPart.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return nums.reduce((sum, n) => sum + n, 0);
}