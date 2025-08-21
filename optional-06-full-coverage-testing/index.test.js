import { test } from 'node:test';
import assert from 'node:assert';
import sum from "./index.js";

test('fungsi sum - menjumlahkan 2 bilangan positif', () => {
  assert.strictEqual(sum(1, 8), 9);
})
test('fungsi sum - mengembalikan 0 jika salah satu inputan negatif', () => {
  assert.strictEqual(sum(-1, 8), 0);
})
test('fungsi sum - mengembalikan 0 jika kedua inputan negatif', () => {
  assert.strictEqual(sum(-1, -8), 0);
})
test('fungsi sum - mengembalikan 0 jika inputan bukan merupakan angka', () => {
  assert.strictEqual(sum('1', 8), 0);
})
test('fungsi sum - mengembalikan 0 jika kedua inputan 0', () => {
  assert.strictEqual(sum(0, 0), 0);
})
test('fungsi sum - mengembalikan 0 jika salah satu inputan tidak ada', () => {
  assert.strictEqual(sum(1), 0);
})
test('fungsi sum - menjumlahkan angka desimal', () => {
  assert.strictEqual(sum(1.5, 5.5), 7);
})

