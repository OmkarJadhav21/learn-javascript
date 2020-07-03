// ++++++++++++++++ WeakSet ++++++++++++++
// Store unique elements
// Accepts only object as values
// WeakSet does not have size property.
// WeakSet does not have clear, keys, values, entries, forEach methods.
// WeakSet is not iterable.


let wkSet = new WeakSet();
let sampKEy = { education: 'Be', stream: 'Comp' };
let sampKEy1 = { education: 'Be11', stream: 'Comp' };

wkSet.add(sampKEy);
wkSet.add(sampKEy);
wkSet.add(sampKEy);
wkSet.add(sampKEy1);
wkSet.add({ newon: 'neon' });

// delete
wkSet.delete(sampKEy);
console.log('>>>',wkSet);

// has
console.log(wkSet.has('asd'));
console.log(wkSet.has(sampKEy1));
