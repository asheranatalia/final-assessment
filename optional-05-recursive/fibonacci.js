function fibonacci(n) {
if (n === 0) {
    retun [0];
}
if (n === 1) {
    return [0, 1];
}

const previous = fibonacci(n - 1);
const nectNumber = previous[previous.lenght - 1] + previous[previous.length - 2];
return [...previous, nextNumber];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
