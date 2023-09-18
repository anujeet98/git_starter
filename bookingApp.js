

var btnSubmit = document.getElementById("submitBtn");
var form = document.getElementById("myForm");
var userList = document.getElementById("users");
var username = document.getElementById("username");
var useremail = document.getElementById("useremail");
var deleteBtn = document.getElementsByClassName('deleteUser');

form.addEventListener('submit', submitMethod);
document.addEventListener('DOMContentLoaded', refreshUserDetails);
userList.addEventListener('click', deleteUserDetails);



function submitMethod(e){
    e.preventDefault();

    var userCount = localStorage.length+1;

    if(username.value.length!=0 && useremail.value.length!=0){
        let obj = {
            name : username.value,
            email : useremail.value
        };
        localStorage.setItem('userdetails'+userCount, JSON.stringify(obj));
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

        var li = document.createElement('li');
        li.setAttribute('data-userKey',userdetails.name);
        li.appendChild(document.createTextNode(userdetails.name+"  "+userdetails.email));

        var delBtn = document.createElement('button');
        delBtn.className = "deleteUser";
        delBtn.appendChild(document.createTextNode('delete')); 
        li.appendChild(delBtn);

        userList.appendChild(li);


        //to clear the input fields after submit
        document.getElementById('username').value = '';
        document.getElementById('useremail').value = '';
    }
}





function deleteUserDetails(e){
    if(e.target.classList.contains('deleteUser')){
        var delUsr = e.target.parentElement;
        userList.removeChild(delUsr);
        //localStorage.removeItem(delUsr.getAttribute('data-userkey'));
    }


}