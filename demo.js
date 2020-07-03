var input = ['eat', 'tea', 'ate', 'tan', 'nat', 'bat'];;

var output = [];
for (let i = 0; i < input.length - 1; i++) {
    let first = input[i].split('').sort().toString();
    let baseArray=[input[i]];
    for (let j = i+1; j < input.length - 1; j++) {
        second = input[j].split('').sort().toString();;
        if (first === second) {
            baseArray.push(input[j]);
        }
    }
    if (baseArray.length>1) {
        output.push(baseArray)
    }
}
console.log('out - anagram', output);
