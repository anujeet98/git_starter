

var btnSubmit = document.getElementById("submitBtn");
var form = document.getElementById("myForm");


form.addEventListener('submit', submitMethod);

function submitMethod(e){
    e.preventDefault();
    var username = document.getElementById("username").value;
    var useremail = document.getElementById("useremail").value;
    var userCount = localStorage.length+1;

    if(username.length!=0 && useremail.length!=0){
        let obj = {
            name : username,
            email : useremail
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


document.addEventListener('DOMContentLoaded', refreshUserDetails);


function refreshUserDetails(e){
    for(var i=0; i<localStorage.length; i++){
        var userdetails = JSON.parse(localStorage.getItem(localStorage.key(i)));

        var li = document.createElement('li');
        li.appendChild(document.createTextNode(userdetails.name+"  "+userdetails.email));
        document.getElementById("users").appendChild(li);

        document.getElementById('username').value = '';
        document.getElementById('useremail').value = '';
    }
}