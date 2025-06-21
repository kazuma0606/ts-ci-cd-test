import { Calculator } from './calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        it('should add two positive numbers correctly', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        it('should handle negative numbers', () => {
            expect(calculator.add(-1, -2)).toBe(-3);
            expect(calculator.add(-1, 2)).toBe(1);
        });

        it('should handle decimal numbers', () => {
            expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
        });
    });

    describe('subtract', () => {
        it('should subtract two positive numbers correctly', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        });

        it('should handle negative results', () => {
            expect(calculator.subtract(3, 5)).toBe(-2);
        });

        it('should handle negative numbers', () => {
            expect(calculator.subtract(-1, -2)).toBe(1);
        });
    });

    describe('multiply', () => {
        it('should multiply two positive numbers correctly', () => {
            expect(calculator.multiply(3, 4)).toBe(12);
        });

        it('should handle zero multiplication', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
            expect(calculator.multiply(0, 5)).toBe(0);
        });

        it('should handle negative numbers', () => {
            expect(calculator.multiply(-2, 3)).toBe(-6);
            expect(calculator.multiply(-2, -3)).toBe(6);
        });
    });

    describe('divide', () => {
        it('should divide two positive numbers correctly', () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });

        it('should handle decimal results', () => {
            expect(calculator.divide(10, 3)).toBeCloseTo(3.333333);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
        });

        it('should handle negative numbers', () => {
            expect(calculator.divide(-10, 2)).toBe(-5);
            expect(calculator.divide(-10, -2)).toBe(5);
        });
    });

    describe('sum', () => {
        it('should calculate sum of multiple numbers', () => {
            expect(calculator.sum([1, 2, 3, 4, 5])).toBe(15);
        });

        it('should handle empty array', () => {
            expect(calculator.sum([])).toBe(0);
        });

        it('should handle negative numbers', () => {
            expect(calculator.sum([-1, -2, 3])).toBe(0);
        });
    });

    describe('average', () => {
        it('should calculate average of multiple numbers', () => {
            expect(calculator.average([2, 4, 6])).toBe(4);
        });

        it('should handle single number', () => {
            expect(calculator.average([5])).toBe(5);
        });

        it('should throw error for empty array', () => {
            expect(() => calculator.average([])).toThrow('Cannot calculate average of empty array');
        });

        it('should handle decimal averages', () => {
            expect(calculator.average([1, 2, 3])).toBeCloseTo(2);
        });
    });
});