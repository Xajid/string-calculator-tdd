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
});