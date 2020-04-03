// Arrays  - Collection of different/same data types;
var arrayFirst = new Array('a', 'b', 'c',21,'d','e',21,'d');  //1

// // 2-4 =2
// 234,'string','data' = 2
// 234,string,234,string data;

// // 2-5 =3
// 234,'string','data'

// let ATM = [2000,100,500,200];
// let userInput = 2000;
// var isCashAvail = ATM.includes(userInput===2000?2000:0);
// console.log(isCashAvail);

var arraySecond =['kk',121,true]; //2   -length-5 (starts from 1) ,last index-4(starts from 0)
 arraySecond[3] = 'changed';  //modify/mutate
 delete arraySecond[3];  //delete from array - empty

var newArray1 = arraySecond.concat(arrayFirst);
var newArray2 = arrayFirst.concat(arraySecond);

console.log(arraySecond[1]+ arrayFirst[1]);
// console.log('arrayFirst',arrayFirst.copyWithin(0,2,4));
const iterator = arrayFirst.entries();
console.log(iterator.next().value)   //returns a new array of (index,value) pair for each element when next().value calls
console.log(iterator.next().value)   //returns a new array of (index,value) pair for each element when next().value calls

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13,41];
console.log(array1.every(isBelowThreshold));  //whether each ele satisty the given condition or not

// arrayFirst.fill('f')        //Fill each index with specified value f
// arrayFirst.fill('g',3,4)   //Fill index 3 with specified value g

var onlyNumbersArray = arrayFirst.filter(ele=>typeof ele==='number');    //return filterd array with specified condition
console.log('onlyNumbersArray',onlyNumbersArray);
var findElement = arrayFirst.find(ele=>typeof ele==='number');
console.log(findElement);    //returns specified object/element which we want else return -1

var indexOfLessTwenty= arrayFirst.findIndex(ele=>ele<20)
console.log(indexOfLessTwenty);    //returns index of specified object/element which we want else return -1

for (let i = 0; i < arrayFirst.length; i++) {
    const element = arrayFirst[i];
} //traditional forach

var stringFilter = [];
var numberFilter = [];
arrayFirst.forEach((ele,index)=>{
    ele && typeof ele==='string'?stringFilter.push(ele):numberFilter.push(ele);
    
    // if (ele && typeof ele==='string') {
    //     stringFilter.push(ele)
    //     return;
    // }
    //     numberFilter.push(ele)
})

// stringFilter = arrayFirst.filter(ele=>ele && typeof ele==='string');

// numberFilter = arrayFirst.filter(ele=>{
//     if (ele && typeof ele==='number') {
//         return ele;
//     }
// })
console.log('myARRRR',stringFilter,numberFilter);

console.log(stringFilter,numberFilter);
console.log(arrayFirst.includes(21));
console.log(arrayFirst.indexOf('d',5));

var dateArray =['10','Jan','2019'];
console.log(dateArray.join('-'));  //return string of joined elements in array.

var keysIterator = arrayFirst.keys();  //returns iterator, from which we can iterate keys
for (const key of keysIterator) {
    // console.log(arrayFirst[key] +` is present on the location no `+ key);
}

console.log(arrayFirst.lastIndexOf('c'));   //returns last occurrence of specified element;

console.log(arrayFirst.length); //return length of array (starts from 1)

let originalArray = [10,20,30,222];
console.log(originalArray);
let modified = originalArray.map(ele=>ele-10);    //return new modified array
originalArray.pop();  // removes last element of array
originalArray.push('omkar');  //add element to last index of array
originalArray.pop();  // removes last element from array
let add = originalArray.shift();  //Remove fist element from array and returns removed element
originalArray.unshift([111,222,333,444]);  //Add element(as array or single value) at 0th index in array
console.log(modified,originalArray,add);

// push(array -last -add);
// pop (array -last -remove);
// unshift(array -fist -add);
// shift(array -first -remove);
let calculateSum = [10,20,3,40,33];

// var forLoopSum= 0;
// for (let i = 0; i < calculateSum.length; i++) {
//     const element = calculateSum[i];
//     forLoopSum = element+forLoopSum;
// }
console.log('ARRAY--->',calculateSum);

let reducerSum = calculateSum.reduce((total, elemet)=>{
    console.log('Iterate from first index to last-->(Acc,Cuurent))',total,elemet);
    return total+elemet
});  //without initializing value
let reducerSumWithValue = calculateSum.reduce((total, elemet)=>total*elemet,50);  //with initial value 50
console.log(reducerSum,reducerSumWithValue);

let rightArray = [122,20,331,32,541];
console.log('ARRAY---Right--->',rightArray);
let reduceRightAns = rightArray.reduceRight((acc,current,cuureIndex,myarr)=>{
console.log('iterate from last index to first-->(Acc,Cuurent)', acc,current,cuureIndex,myarr);
return acc+current
})
console.log('reduceRightAns',reduceRightAns);

console.log(arrayFirst,arrayFirst.reverse());  //reversig the array

let sliceer = rightArray.slice(1,4)
console.log(rightArray,sliceer);

var myCondition = (ele)=>ele%3===0;
console.log('SOME - ', rightArray.some(myCondition));  //Whether any ONE satisfy the condition or not
console.log('EVERY -', rightArray.every(myCondition));  //Whether EACH element satisfy the condition or not

// let ascending = rightArray.sort((a,b)=>a-b);//ascending
// console.log('ascending',ascending); 
// let descending = rightArray.sort((a,b)=>b-a);
// console.log('descending',descending); //descending
let deletedData = rightArray.splice(2,3)
console.log('deletedData',rightArray, deletedData);   //returns the deleted array and delete from original array
console.log(arrayFirst.toLocaleString('hi-IN', { style: 'currency', currency: 'INR' }));  //convsert array to single Local string;
console.log(arrayFirst.toString());  //convert array to single string
console.log(arrayFirst.values());  //returns iterable of 'values' in array
console.log(arrayFirst.keys());  //returns iterable of 'keys' in array


// Diffrence between finIndex and indexOf
// findIndex - Work for non-primitive datatypes well
      let nonPrimArray = [ {id : 1 , name : 'omkar' },{ id : 2 , name : 'Kalyani' } ];
      let primDataArray =[ 'Omkar' , 21 , 'Kalyani' , true ];
      var checkForOmkar = (ele)=>ele.name==='Kalyani';
      let b = nonPrimArray[0];
        console.log(nonPrimArray.indexOf(b));
        console.log(nonPrimArray.indexOf(  {id:1,name:'omkar'} ));
        console.log(nonPrimArray.findIndex(checkForOmkar));
        console.log(primDataArray.indexOf('Kalyani'));   //Accepts only values not predicate 
        console.log(primDataArray.findIndex(myCondition));   //Accepts predicate/function

        
// indexOf - Work for primitive datatypes;
// rightArray.join - return string
// rightArray.concat - concat 2 arrays;


// rightArray.every -every element check 
// rightArray.some  - some/any one of them

// // forloop
// rightArray.filter
// rightArray.forEach
// rightArray.map

// // index -first occurance
// rightArray.findIndex
// arrayFirst.indexOf

// // index -last occurance
// arrayFirst.lastIndexOf

// // Iterable
// rightArray.entries
// arrayFirst.keys -index
// arrayFirst.values -values

// array1.reduceRight
// array1.reduce

// array1.slice - divide array without changing original array
// array1.splice - divide array by changing original array


let sampleArray = [
    {
        id:1,
        name:'omkar',
        education:'be'
    },
    {
        id:2,
        name:'kalyani',
        education:'be'
    },
    {
        id:3,
        name:'xyz',
        education:'bsc'
    },
    {
        id:4,
        name:'abc',
        education:'diploma'
    }
];

console.log(sampleArray.find(ele=>ele.id==3));
let beMember = sampleArray.filter(wwl=>wwl.education==='be');
console.log(beMember);
