import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('sum should add two positive number correctly' , () => {
    const result = sum(2, 3);
    assert.strictEqual(result, 5);
});

test('sum should add negative numbers correctly', () => {
    const result = sum(-5, -7);
    assert.strictEqual(result, -12);
});

test('sum should work with zero', () => {
    const result = sum(0, 10);
    assert.strictEqual(result, 10);
});