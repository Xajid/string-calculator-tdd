import { add } from '../src/stringCalculator.js';

describe('String Calculator', () => {
    it('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
    });
    it('returns number for single input', () => {
        expect(add('1')).toBe(1);
    });
    it('returns sum of two comma-separated numbers', () => {
        expect(add('1,5')).toBe(6);
    });
    it('handles multiple numbers', () => {
        expect(add('1,2,3,4')).toBe(10);
    });
    it('handles new lines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });
    it('supports custom delimiter', () => {
        expect(add('//;\n1;2')).toBe(3);
    });
});