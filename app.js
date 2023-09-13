// console.log("hello Git");


// //Dom additional parent child

// var itemList = document.querySelector('#items');

// //parent node
// console.log(itemList.parentNode);
// //itemList.parentNode.style.backgroundColor = 'lightgrey';

// //parentElement same as above
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'lightgrey';

// //childNode
// console.log(itemList.childNodes);   //it is a list of elements. It also considers the line break in the code as 'text'. It also has the other item elements
// //moved the li tags into single line. observe the change

// //children
// console.log(itemList.children); //this gives htmlcollection instead of nodelist(above)
// //the above is not counting the line space
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'green';


// //firstchild and firstelementchild
// console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = 'Hello';


// //lastChild
// //LastElementChild

// console.log(itemList.lastChild);

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello World';


// //siblings
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //previouselementSibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'red';


// //create Element
// //create div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//add attribute
newDiv.setAttribute('title','hello div');

//create text node to insert
var newdivText = document.createTextNode('HEllo');

//add text to div
newDiv.appendChild(newdivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);


newDiv.style.fontSize = '30px';

//insert into html
container.insertBefore(newDiv, h1);


var itemContainer = document.querySelector('#items');
console.log(itemContainer);

itemContainer.insertBefore(newDiv,itemContainer.firstElementChild);

itemContainer.style.backgroundColor = 'lighgrey';
