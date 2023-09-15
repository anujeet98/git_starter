
//get the DOM elements
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


//create a listner to perform add li on submit
form.addEventListener('submit',addListElem);
itemList.addEventListener('click',removeLi);




//function to add li on submit
function addListElem(e){
    //prevent default action of submit
    e.preventDefault();

    //get the value from input field
    var itemText = document.getElementById('item').value;

    //create a li element
    var li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(itemText));
    
    //create delete button and append it
    var delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    //append the new li to itemList
    itemList.appendChild(li);

}


function removeLi(e){
    if(e.target.classList.contains('delete')){
        var delItem = e.target.parentElement;
        itemList.removeChild(delItem);
    }
}