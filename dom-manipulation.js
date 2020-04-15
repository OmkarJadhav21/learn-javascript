// let previousText = document.getElementById("heading").textContent;
document.getElementById("heading").textContent = 'Hiii boss';   // Setting string content to HTML element
// document.getElementById("heading").innerHTML = `<span>${message}</span>`;  // Setting HTML content to HTML element
let htmlData = document.getElementById("heading").innerText  // Setting HTML content to HTML element;
console.log(htmlData);


function changeCssClass() {
    let headingElemnt = document.getElementById("heading");
    let btnElemnt = document.getElementById("btn");
    
    headingElemnt.classList.toggle('border');
    let checkIfClassExist = headingElemnt.classList.contains('border');
    btnElemnt.innerText = checkIfClassExist ? 'Remove class' : 'Add class';
}

