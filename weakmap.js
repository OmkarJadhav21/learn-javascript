// ++++++++++++++++++++++ WeakMap ++++++++++++++++++++
/* 
- WeakMap is collection which holds the data in the forms of key and value pair.
- WeakMap accepts only 'object' as a key.
- WeakMap is not iterable.
- WeakMap remembers the original insertion order of the keys.
- WeakMap doesn't have a 'keys(),forEach(),entries(),value()' method beacuse it stores object as a key
- WeakMap doesn't have a 'size' property
- WeakMap handles garbage collection wisely -delete garbage values from weakmap
*/

// Create
let weakmap = new WeakMap();  //1st way
let weakmapNon = new WeakMap(  //2nd way
    [
        [{ id: 2, name: 'non recommanded' }, "don't use this method"],
        [{ mykey: 'non recommaned' }, "don't use"]
    ]
)

// Add data in weakmap
let myKey = { signal: 'red', notice: 'stop' };
let myValue = { signal: 'redVal', notice: 'stopVal' };

weakmap.set(myKey, myValue);
weakmap.set({ id: 2, name: 'vall' }, 'it is value')  //works fine
// weakmap.set('id', 3);  //Invalid key to weakmap

console.log(weakmap);


// delete - delete specific key from weakmap
// weakmap.delete(myKey);  //works fine
weakmap.delete({ id: 2, name: 'vall' }); //cannot delete
console.log('wk---', weakmap);

// get
console.log('wk---', weakmap.get(myKey));

// has
console.log('wk---key', weakmap.has(myKey));
console.log('wk---obbj', weakmap.has({ id: 2, name: 'vall' }));

// WeakMap handles garbage collection well
let garbageWeakMap = new WeakMap();
let sampleObj = { sap: 'technology', field: 'business' };

garbageWeakMap.set(sampleObj, 'myValll');
console.log('garbageWeakMap before deleting reference', garbageWeakMap.get(sampleObj));
sampleObj = null;
console.log('garbageWeakMap after deleting reference', garbageWeakMap, garbageWeakMap.get(sampleObj));

