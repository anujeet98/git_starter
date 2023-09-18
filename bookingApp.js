

var btnSubmit = document.getElementById("submitBtn");
var form = document.getElementById("myForm");


form.addEventListener('submit', submitMethod);

function submitMethod(e){
    e.preventDefault();
    var username = document.getElementById("username").value;
    var useremail = document.getElementById("useremail").value;
    var userCount = localStorage.length+1;

    localStorage.setItem('userdetails'+userCount, username+" "+useremail);
    alert('user added');
}