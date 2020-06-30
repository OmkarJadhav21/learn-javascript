// +++++++++++++++++ SET ++++++++++++++++++++
// - Set stores only the unique values(removes duplication).
// - Data is stored in the form of key only which is of type any
// - Alternative to Set is Array

// Creation
let set = new Set();
let arraySet = new Set(["a", "b", "c", 3, "b", 2, "3", 3]);

console.log(arraySet);

// add
let obj = { signal: 'red', warning: 'stop' };
let objCpy = { signal: 'red', warning: 'stop' };
let myVar = "Javascript";
set.add(obj);
set.add(objCpy); //stores the data in map beacuse new object creation and differ in reference
set.add(myVar);
set.add("Javascript");  //discard this from storing because string value is already present
console.log(set);


// clear - clear all data in set
set.clear();

// delete - delete specific value from set
set.delete(objCpy);
// set.delete("Javascript");

// entries - return iterable with its [key,value] pair
console.log(set.entries());

// forEach -  returns nothing but can iterate set and gives it's value's only
set.forEach(ele => {
    console.log(ele);
})

//has - returns boolean for the key presence 
console.log(set.has(myVar)); //true
console.log(set.has("JAvascript"));  //false

// keys - return the keys in set in the form of values only
console.log('keys-->',set.keys());

// size - retuns size for set
console.log(set.size);

// values - returns the iterable values in set
console.log('values-->',set.values());
