
//get the DOM elements
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var search = document.getElementById('filter');


//create a listner to perform add li on submit
form.addEventListener('submit',addListElem);
itemList.addEventListener('click',removeLi);
search.addEventListener('keyup',searchFilter);




//function to add li on submit
function addListElem(e){
    //prevent default action of submit
    e.preventDefault();

    //get the value from input field
    var itemText = document.getElementById('item').value + " " + document.getElementById("description").value;


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


function searchFilter(e){
    //convert the search text to lower case
    var searchText = e.target.value.toLowerCase();
    //search lowercase of each listed item
    var items = document.getElementsByClassName('list-group-item');
    //convert this html collections to array
    Array.from(items).forEach(
        function(item){
            var itemName = item.firstChild.textContent.toLowerCase();
            if(itemName.indexOf(searchText) != -1){
                item.style.display = 'block';
            }
            else{
                item.style.display = 'none';
            }

        }
    );

}