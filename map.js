// +++++++++++++++++ MAP ++++++++++++++++=
/* 
- Map is collection which holds the data in the forms of key and value pair.
- Map accepts either object/primitive values as a key.
- Map is iterable
- Map remembers the original insertion order of the keys.
- Map doesn't handle garbage collection wisely - It will not delete reference from map

*/


function getName() {
    return 'Kalyani'
}

let samp = { rollNo: 244, registraionNo: 'PRN3455' };
let assignData;


// Create map
let map = new Map();   // 1st way
let recipeMap = new Map([  //2nd way
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// Adding data in map
map.set('id', 1);
map.set('name', getName());
map.set('age', 25);
map.set('raw', 'raWDdad');   // Adding string key name
map.set(samp, 'COEP_Reference,Pune');  // Adding object reference as key in Map
map.set(assignData = { rollNo: 244, registraionNo: 'PRN3455' }, 'COEP_Direct,Pune');  // Adding object as key in Map

// Chaining in map
map.set('1', 'str1').set(2, 'num1').set(3, 'bool1');

// get - Returns particular elements value for the provided key
console.log(map.get('name'));  //returns value
console.log(map.get('outOfkey'));  // returns undefined because of key is unavailable

// Deleting single element from map
map.delete('raw');
map.delete(samp);  // Deleting by using the reference from map;
map.delete(assignData); // Cannot delete this newly created key from map


// clear - clear all the values in map
// map.clear();

// entries - returns iterables (key+value pair) for map
console.log(map, map.entries());


// forEach - Iterate values for particular element
map.forEach(el => {
    console.log(el);
})

// values - Returns iterable (only values) for map values
console.log(map.values());

// keys - Returns iterable (only keys) for map keys
console.log(map.keys());

// keys - Returns boolean value if it is present in the map
console.log(map.has('raw'));  //F
console.log(map.has('id'));  //T


// keys - Returns size for map
console.log(map.size);


// Map - garbage collection not handled well-
let garbageMap = new Map();
let sampleObj = { sap: 'technology', field: 'business' };

garbageMap.set(sampleObj, 'myValll');
console.log('garbageMap before deleting reference', garbageMap, garbageMap.get(sampleObj));
sampleObj = null;
garbageMap.forEach(ele => console.log('We can access--', ele));  //though the reference of sample object is cleared ,but still it is accessible inside the map in foreach
console.log('keys', garbageMap.keys());
console.log('garbageMap after deleting reference', garbageMap, garbageMap.get(sampleObj));




/*
INTERVIEW QUE - Return an subArray (with its first and last Index which) having maximum sum.
let ar = [-4, 5, -2, 6, -1, 7, 3, -2, 8];
let sub = [];
let total = 0;
let firstIndex;
for (let i = 0; i < ar.length - 1; i++) {
    let sl = ar.slice(i)
    let compTotal = sl.reduce((prev, current) => prev + current, 0)
    if (total < compTotal) {
        total = compTotal;
        sub = sl;
        firstIndex = i
    }
}
console.log(sub, total,firstIndex);
 */






// __________Storage in array

// [
//     {
//         id: 1,
//         name: 'omkar'
//     },
//     {
//         id: 1,
//         name: 'omkar'
//     }
// ]

// __________Storage in map
// [
//     [
//         {
//             key: 'id',
//             value: 1
//         },
//         {
//             key: 'name',
//             value: 'omkar'
//         }
//     ],
//     [
//         {
//             key: samp,
//             // key: { rollNo: 244, registraionNo: 'PRN3455' },
//             value: 'COEP Pune'
//         }
//     ]
// ]