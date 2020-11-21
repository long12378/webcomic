"use strict";


// Xử lí display form login và signup
var login=document.getElementById('change-login');
var signup=document.getElementById('change-signup');

signup.addEventListener("click",function(){
	document.getElementById('containerF-signup').style.display="block";
	document.getElementById('containerF-login').style.display="none";
	login.style.backgroundColor="white";
	signup.style.backgroundColor="rgba(231, 209, 178, 0.5)";
})
login.addEventListener("click",function(){
	document.getElementById('containerF-login').style.display="block";
	document.getElementById('containerF-signup').style.display="none";
	login.style.backgroundColor="rgba(231, 209, 178, 0.5)";
	signup.style.backgroundColor="white";
})