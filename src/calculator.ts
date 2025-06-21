/**
 * 四則演算を行うシンプルな計算機クラス
 */
export class Calculator {
    /**
     * 加算
     */
    add(a: number, b: number): number {
        return a + b;
    }

    /**
     * 減算
     */
    subtract(a: number, b: number): number {
        return a - b;
    }

    /**
     * 乗算
     */
    multiply(a: number, b: number): number {
        return a * b;
    }

    /**
     * 除算
     */
    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    /**
     * 複数の数値の合計を計算
     */
    sum(numbers: number[]): number {
        return numbers.reduce((acc, num) => acc + num, 0);
    }

    /**
     * 複数の数値の平均を計算
     */
    average(numbers: number[]): number {
        if (numbers.length === 0) {
            throw new Error('Cannot calculate average of empty array');
        }
        return this.sum(numbers) / numbers.length;
    }
}