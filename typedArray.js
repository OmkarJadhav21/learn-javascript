// ++++++++++++++++++++ Typed Array ++++++++++++++++++++
const typedArray1 = new Int16Array(8);
typedArray1[0] = 32223;
console.log(typedArray1.byteOffset);

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);