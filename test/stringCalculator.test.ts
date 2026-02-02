import { add } from '../src/stringCalculator.js';

describe('String Calculator', () => {
    it('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
    });
    it('returns number for single input', () => {
        expect(add('1')).toBe(1);
    });
});