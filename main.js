

var titleVar = document.getElementById('main-header');

titleVar.style.borderBottom = 'solid 3px black';


var pageHead = document.getElementById('page-header');

pageHead.style.fontWeight = 'bold';
pageHead.style.color = 'green';


var items = document.getElementsByClassName('list-group-item');

for(var i=0; i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}

// items[2].style.backgroundColor = 'green';


var listTag = document.getElementsByTagName('li');
// console.log(listTag);

// for(var i=0; i<listTag.length;i++){
//     listTag[i].style.fontWeight = 'bold';
// }


var itemSelect = document.querySelector('.list-group-item:nth-child(2)');

itemSelect.style.backgroundColor = 'lightgreen';

var itemHidden = document.querySelector('.list-group-item:nth-child(3)');
itemHidden.style.visibility = 'hidden';


var itemHighlight = document.querySelectorAll('.list-group-item');
itemHighlight[1].style.color = 'green';

var oddHighlight = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<oddHighlight.length;i++){
    oddHighlight[i].style.backgroundColor = 'green';
}