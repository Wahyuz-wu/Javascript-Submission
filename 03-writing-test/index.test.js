import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from "./index.js";

test('sum test correctly', () => {
    const A = 10;
    const B = 5;
    
    const hasil = sum(A, B);

    const hasil_akhir = 15;
    assert.equal(hasil, hasil_akhir);
})