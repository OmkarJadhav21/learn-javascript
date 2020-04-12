// ++++++++   LOOPS  ++++++++
// 1) For loop
// 2) While loop
// 3) Do_while loop
// Break statement
// Continue statement

let sampleObj = {
    name: 'Sample',
    college: 'ABC College',
    roll: 'Developer',
    prn: '012221333'
};

let sampleArray = ['sampleName', 'ABC college', 'Developer', '012221333'];

// for
// forOf
// forIn - Specially for object
// forEach

console.log('_______FOR LOOP________');
for (let i = 0; i < sampleArray.length; i++) { //Array
    const element = sampleArray[i];
    console.log(element);
}
console.log('_____FOR_OF for array________');
for (const iterator of sampleArray) { //Array
    console.log(iterator);
}
console.log('______FOR_IN for array_______');
for (const key in sampleArray) {  //Array
    const element = sampleArray[key];
    console.log(element);
}
console.log('______FOR_Each for array_______');
sampleArray.forEach(ele => {
    console.log(ele);
})

console.log('_____FOR_OF for Object________');
for (const iterator of Object.entries(sampleObj)) { //Object is making iterable
    console.log(iterator);
}
console.log('______FOR_IN for object_______');
for (const key in sampleObj) {  //Object
    if (sampleObj.hasOwnProperty(key)) {
        const element = sampleObj[key];
        console.log(element);
    }
}
console.log('______FOR_EACH using Object method_______');
Object.keys(sampleObj).forEach((ele, index) => {   //Object
    console.log('index is ' + index + ' and elemt is ' + ele);
});


//2) WHILE LOOP
console.log('__________WHILE LOOP__________');

// If condition in while is always true then it is going for infinity loop
// while(true(DONT TRY)){
//     console.log('Your pc get Hanged');
// }
let i = 0;
while (i < 10) {
    i++;
    console.log('loop iterated for idex ' + i);
}

console.log('_____While Loop Decrement_______');
let j = 10;
while (j > 0) {
    j--;
    console.log('loop iterated for idex ' + j);
}

// 3) Do ...While loop
// Excecutes atleast once
console.log('_____Do_While Loop _______');
let p = 0;
do {
    console.log('I execute atleast once' + p);
} while (p > 0);

// Difference between while and Do while
// Do-while - Executes atleast once
// While - Doesn't excecutes until the condition is true

while (p > 0) {
    console.log('I Didn"t executes until condition is true' + p);
}

console.log('_________Continue Statement_________');
// Continue - Skip the current iteration
let myArr = [1, 'Sample', 3, 'Skip_me', 5, 'Break_me', 7, 8];

for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i];
    if (element === 'Skip_me' || element===5) {  //skip element 'Skip ME' and 5 from iteration
        continue;
    }
    console.log('index is ' + i + ' and element is ' + element);
}

console.log('_______Break Statement___________');
// Break - Break/stop the loop from current condition
for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i];
    if (element === 'Break_me') {
        break;
    }
    console.log('index is ' + i + ' and element is ' + element);
}


console.log('_____________BOTH IN ONE MIXED ARRAY______________');
let mixed = [1,2,3,4,5];    //continue + break 
// We cannot use continue after break;
for (let index = 0; index < mixed.length; index++) {
    const element = mixed[index];
    if (element===3) {
        sendConsole(element);
        continue;
    }
    if (element===4) {
        break;
    }
}
console.log('_____________BOTH IN ONE______________');

for (let index = 0; index < mixed.length; index++) {
    const element = mixed[index];
    if (element===3) {
        sendConsole(3);
        break;
    }
    continue;
}

function sendConsole(param){
    console.log('from send Console-->',param);
}



// __________ JAVASCRIPT EXECUTION AND PARSER _____________
// var toll; =  var toll = undefined;

var toll;  //Global
function abc(){
    var toll=5;
    console.log('Functional scope toll',toll); 

    function pqr() {
        console.log('nested function');
    }
}
console.log('Global toll1',toll);

// Global scope  - Globally declared var and obj are always pointed to the global 'window' object   
// window.toll = Global scope
// window.abc = Global scope

// window.abc.toll = functional scope
// window.abc.pqr = functional scope