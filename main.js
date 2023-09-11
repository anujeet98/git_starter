

var titleVar = document.getElementById('main-header');

titleVar.style.borderBottom = 'solid 3px black';


var pageHead = document.getElementById('page-header');

pageHead.style.fontWeight = 'bold';
pageHead.style.color = 'green';


var items = document.getElementsByClassName('list-group-item');

// for(var i=0; i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

items[2].style.backgroundColor = 'green';

// console.log(items[2].style);


var listTag = document.getElementsByTagName('li');
console.log(listTag);

for(var i=0; i<listTag.length;i++){
    listTag[i].style.fontWeight = 'bold';
}