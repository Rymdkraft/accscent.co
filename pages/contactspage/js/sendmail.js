var btn = document.getElementById('btnsend');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	
	
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message1 = document.getElementById('message').value;
	
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> subject: ' +  subject + '<br/> message: ' + message1;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : subject,
    Body : mail,
}).then(
    message => alert(message)
);	
	})