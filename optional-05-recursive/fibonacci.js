function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return [0, 1];
  
  let hasil = fibonacci(n-1)
  hasil.push(hasil[hasil.length - 1] + hasil[hasil.length - 2]);
  return hasil;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
