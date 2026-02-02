export function add(numbers: string): number {
    if (numbers === '') return 0;

    return numbers
        .split(',')
        .map(Number)
        .reduce((sum, n) => sum + n, 0);
}