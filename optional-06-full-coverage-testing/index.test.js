import test from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

// Test: Menjumlahkan dua angka positif
test('sum of two positive numbers should return correct result', () =>{
    assert.strictEqual(sum(3, 7), 10);
});

// Test: Jika salah satu parameter bukan angka
test('sum should return 0 when first argument is not a number', () => {
    assert.strictEqual(sum('3', 5), 0);
});

test('sum should return 0 when second argument is not a number', function () {
        assert.strictEqual(sum(5, '7', 0));
    });

test('sum should return 0 when both arguments are not numbers', () => {
    assert.strictEqual(sum('3', '7'), 0);
});

// Test: Jika salah satu angka negatif
test('sum should return 0 when first number is negative', () => {
    assert.strictEqual(sum(-3, 5), 0);
});

test('sum should return 0 when second number is negative', () => {
    assert.strictEqual(sum(3, -5), 0);
});

test('sum should return 0 when both numbers are negative', () => {
    assert.strictEqual(sum(-3, -5), 0);
});