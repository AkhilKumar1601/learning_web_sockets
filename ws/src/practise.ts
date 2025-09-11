const buf = Buffer.from([1,3,5]);
console.log(buf instanceof Uint8Array);

const arr = new Uint8Array([65,66,67]);
const buffer = Buffer.from([65,66,67]);
console.log(arr.toString());
console.log(buffer.toString());
