

var btnSubmit = document.getElementById("submitBtn");
var form = document.getElementById("myForm");
var userList = document.getElementById("users");
var username = document.getElementById("username");
var useremail = document.getElementById("useremail");
var deleteBtn = document.getElementsByClassName('deleteUser');

form.addEventListener('submit', submitMethod);
document.addEventListener('DOMContentLoaded', refreshUserDetails);
userList.addEventListener('click', UserDetailAlter);



function submitMethod(e){
    e.preventDefault();

    //var userCount = localStorage.length+1;

    if(username.value.length!=0 && useremail.value.length!=0){
        let obj = {
            name : username.value,
            email : useremail.value
        };
        localStorage.setItem(useremail.value, JSON.stringify(obj));
        alert('user added');
    }
    else{
        alert('Empty fields, please reenter with valid inputs');
    }
    window.location.reload();
    refreshUserDetails();
}





function refreshUserDetails(e){
    for(var i=0; i<localStorage.length; i++){
        var userdetails = JSON.parse(localStorage.getItem(localStorage.key(i)));

        //create a new list element
        var li = document.createElement('li');
        li.setAttribute('data-userKey',userdetails.email);
        li.appendChild(document.createTextNode(userdetails.name+"  "+userdetails.email));

        //add delete button
        var delBtn = document.createElement('button');
        delBtn.className = "deleteUser";
        delBtn.appendChild(document.createTextNode('delete')); 
        li.appendChild(delBtn);


        //add edit button
        var editBtn = document.createElement('button');
        editBtn.className = "EditUser";
        editBtn.appendChild(document.createTextNode('edit')); 
        li.appendChild(editBtn);

        userList.appendChild(li);


        //to clear the input fields after submit
        document.getElementById('username').value = '';
        document.getElementById('useremail').value = '';
    }
}





function UserDetailAlter(e){
    if(e.target.classList.contains('deleteUser')){
        var delUsr = e.target.parentElement;
        
        localStorage.removeItem(delUsr.getAttribute('data-userkey'));
        userList.removeChild(delUsr);
    }

    else if(e.target.classList.contains('EditUser')){
        var editUsr = e.target.parentElement;
        
        //remove from display
        userList.removeChild(editUsr);

        var userdetails = JSON.parse(localStorage.getItem(editUsr.getAttribute('data-userKey')));

        //populate input fields to enable edit
        username.value = userdetails.name;
        useremail.value = userdetails.email;
        
    }


}