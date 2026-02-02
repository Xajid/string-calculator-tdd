import { add } from '../src/stringCalculator.js';

describe('String Calculator', () => {
    it('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
    });
});