var btn = document.getElementById('order-now-1');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");
	
	
	var name = document.getElementById('name-1').value;
	var email = document.getElementById('email-1').value;
	var itemname = "AQUA DI GIO";
	var quantity = document.getElementById('quantity-item-1').value;
	var homeaddress = document.getElementById('address-1').value;
	
	
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})





var btn = document.getElementById('order-now-2');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-2').value;
	var email = document.getElementById('email-2').value;
	var itemname = "AVENTUS-CREED";
	var quantity = document.getElementById('quantity-item-2').value;
	var homeaddress = document.getElementById('address-2').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity+ '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})





var btn = document.getElementById('order-now-3');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-3').value;
	var email = document.getElementById('email-3').value;
	var itemname = "BVLGARI EXTREME";
	var quantity = document.getElementById('quantity-item-3').value;
	var homeaddress = document.getElementById('address-3').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity+ '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})





var btn = document.getElementById('order-now-4');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-4').value;
	var email = document.getElementById('email-4').value;
	var itemname = "BVLGARI AQUA";
	var quantity = document.getElementById('quantity-item-4').value;
	var homeaddress = document.getElementById('address-4').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
	
var btn = document.getElementById('order-now-5');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-5').value;
	var email = document.getElementById('email-5').value;
	var itemname = "CK ONE";
	var quantity = document.getElementById('quantity-item-5').value;
	var homeaddress = document.getElementById('address-5').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
var btn = document.getElementById('order-now-6');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-6').value;
	var email = document.getElementById('email-6').value;
	var itemname = "CK ETERNITY";
	var quantity = document.getElementById('quantity-item-6').value;
	var homeaddress = document.getElementById('address-6').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	var btn = document.getElementById('order-now-7');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-7').value;
	var email = document.getElementById('email-7').value;
	var itemname = "EROS DAVIDOFF";
	var quantity = document.getElementById('quantity-item-7').value;
	var homeaddress = document.getElementById('address-7').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
		var btn = document.getElementById('order-now-8');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-8').value;
	var email = document.getElementById('email-8').value;
	var itemname = "FARENHEIT DIOR";
	var quantity = document.getElementById('quantity-item-8').value;
	var homeaddress = document.getElementById('address-8').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
		var btn = document.getElementById('order-now-9');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-9').value;
	var email = document.getElementById('email-9').value;
	var itemname = "HUGO BOSS";
	var quantity = document.getElementById('quantity-item-9').value;
	var homeaddress = document.getElementById('address-9').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
		var btn = document.getElementById('order-now-10');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-10').value;
	var email = document.getElementById('email-10').value;
	var itemname = "INVICTUS";
	var quantity = document.getElementById('quantity-item-10').value;
	var homeaddress = document.getElementById('address-10').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
		var btn = document.getElementById('order-now-11');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-11').value;
	var email = document.getElementById('email-11').value;
	var itemname = "ISSEY MIYAKE";
	var quantity = document.getElementById('quantity-item-11').value;
	var homeaddress = document.getElementById('address-11').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
		var btn = document.getElementById('order-now-12');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-12').value;
	var email = document.getElementById('email-12').value;
	var itemname = "KENNETH COLE BLACK";
	var quantity = document.getElementById('quantity-item-12').value;
	var homeaddress = document.getElementById('address-12').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
		var btn = document.getElementById('order-now-13');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-13').value;
	var email = document.getElementById('email-13').value;
	var itemname = "LACOSTE BLACK";
	var quantity = document.getElementById('quantity-item-13').value;
	var homeaddress = document.getElementById('address-13').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
	
	
			var btn = document.getElementById('order-now-14');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-14').value;
	var email = document.getElementById('email-14').value;
	var itemname = "LACOSTE RED";
	var quantity = document.getElementById('quantity-item-14').value;
	var homeaddress = document.getElementById('address-14').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
	
				var btn = document.getElementById('order-now-15');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-15').value;
	var email = document.getElementById('email-15').value;
	var itemname = "LACOSTE ESSENTIAL";
	var quantity = document.getElementById('quantity-item-15').value;
	var homeaddress = document.getElementById('address-15').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
		
				var btn = document.getElementById('order-now-16');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-16').value;
	var email = document.getElementById('email-16').value;
	var itemname = "LACOSTE WHITE";
	var quantity = document.getElementById('quantity-item-16').value;
	var homeaddress = document.getElementById('address-16').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
		
				var btn = document.getElementById('order-now-17');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-17').value;
	var email = document.getElementById('email-17').value;
	var itemname = "LEGEND MONTBLANC";
	var quantity = document.getElementById('quantity-item-17').value;
	var homeaddress = document.getElementById('address-17').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
		
				var btn = document.getElementById('order-now-18');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-18').value;
	var email = document.getElementById('email-18').value;
	var itemname = "LIGHTBLUE DG MEN";
	var quantity = document.getElementById('quantity-item-18').value;
	var homeaddress = document.getElementById('address-18').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	
		
				var btn = document.getElementById('order-now-19');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-19').value;
	var email = document.getElementById('email-19').value;
	var itemname = "POLO BLUE";
	var quantity = document.getElementById('quantity-item-19').value;
	var homeaddress = document.getElementById('address-19').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
		
	
		
				var btn = document.getElementById('order-now-20');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-20').value;
	var email = document.getElementById('email-20').value;
	var itemname = "PERRY ELLIS";
	var quantity = document.getElementById('quantity-item-20').value;
	var homeaddress = document.getElementById('address-20').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
		
	
		
				var btn = document.getElementById('order-now-21');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-21').value;
	var email = document.getElementById('email-21').value;
	var itemname = "ONE MILLION PACO";
	var quantity = document.getElementById('quantity-item-21').value;
	var homeaddress = document.getElementById('address-21').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
		
	
		
				var btn = document.getElementById('order-now-22');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-22').value;
	var email = document.getElementById('email-22').value;
	var itemname = "212";
	var quantity = document.getElementById('quantity-item-22').value;
	var homeaddress = document.getElementById('address-22').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})


	
	
		
				var btn = document.getElementById('order-now-23');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-23').value;
	var email = document.getElementById('email-23').value;
	var itemname = "BVLGARI AQUA";
	var quantity = document.getElementById('quantity-item-23').value;
	var homeaddress = document.getElementById('address-23').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
			
	
		
				var btn = document.getElementById('order-now-24');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-24').value;
	var email = document.getElementById('email-24').value;
	var itemname = "POLO SPORT";
	var quantity = document.getElementById('quantity-item-24').value;
	var homeaddress = document.getElementById('address-24').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
		
	
		
				var btn = document.getElementById('order-now-25');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-25').value;
	var email = document.getElementById('email-25').value;
	var itemname = "SWISS ARMY";
	var quantity = document.getElementById('quantity-item-25').value;
	var homeaddress = document.getElementById('address-25').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	var btn = document.getElementById('order-now-26');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-26').value;
	var email = document.getElementById('email-26').value;
	var itemname = "BE DELICIOUS DKNY";
	var quantity = document.getElementById('quantity-item-26').value;
	var homeaddress = document.getElementById('address-26').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-27');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-27').value;
	var email = document.getElementById('email-27').value;
	var itemname = "BOMBSHELL VIC SECRET";
	var quantity = document.getElementById('quantity-item-27').value;
	var homeaddress = document.getElementById('address-27').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
		
	var btn = document.getElementById('order-now-28');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-28').value;
	var email = document.getElementById('email-28').value;
	var itemname = "BRIGHT CRYSTAL VERSACE";
	var quantity = document.getElementById('quantity-item-28').value;
	var homeaddress = document.getElementById('address-28').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-29');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-29').value;
	var email = document.getElementById('email-29').value;
	var itemname = "BURBERRY WEEKEND";
	var quantity = document.getElementById('quantity-item-29').value;
	var homeaddress = document.getElementById('address-29').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-30');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-30').value;
	var email = document.getElementById('email-30').value;
	var itemname = "CHANEL CHANCE";
	var quantity = document.getElementById('quantity-item-30').value;
	var homeaddress = document.getElementById('address-30').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-31');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-31').value;
	var email = document.getElementById('email-31').value;
	var itemname = "CLINIQUE HAPPY";
	var quantity = document.getElementById('quantity-item-31').value;
	var homeaddress = document.getElementById('address-31').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-32');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-32').value;
	var email = document.getElementById('email-32').value;
	var itemname = "CLOUD BY ARIANA GRANDE";
	var quantity = document.getElementById('quantity-item-32').value;
	var homeaddress = document.getElementById('address-32').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-33');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-33').value;
	var email = document.getElementById('email-33').value;
	var itemname = "CUCUMBER MELON BB";
	var quantity = document.getElementById('quantity-item-33').value;
	var homeaddress = document.getElementById('address-33').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-34');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-34').value;
	var email = document.getElementById('email-34').value;
	var itemname = "ECLAT D ARPEGE";
	var quantity = document.getElementById('quantity-item-34').value;
	var homeaddress = document.getElementById('address-34').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-35');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-35').value;
	var email = document.getElementById('email-35').value;
	var itemname = "FANTASY BY BRITNEY SPEARS";
	var quantity = document.getElementById('quantity-item-35').value;
	var homeaddress = document.getElementById('address-35').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
		
	var btn = document.getElementById('order-now-36');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-36').value;
	var email = document.getElementById('email-36').value;
	var itemname = "GUESS";
	var quantity = document.getElementById('quantity-item-36').value;
	var homeaddress = document.getElementById('address-36').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
			
	var btn = document.getElementById('order-now-37');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-37').value;
	var email = document.getElementById('email-37').value;
	var itemname = "GREEN TEA ELIZABETH ARDEN";
	var quantity = document.getElementById('quantity-item-37').value;
	var homeaddress = document.getElementById('address-37').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
			
	var btn = document.getElementById('order-now-38');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-38').value;
	var email = document.getElementById('email-38').value;
	var itemname = "INCANTO SHINE SALVATORRE FERR";
	var quantity = document.getElementById('quantity-item-38').value;
	var homeaddress = document.getElementById('address-38').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
			
	var btn = document.getElementById('order-now-39');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-39').value;
	var email = document.getElementById('email-39').value;
	var itemname = "JO MALONE NECTARINE BLOSSOM HONEY";
	var quantity = document.getElementById('quantity-item-39').value;
	var homeaddress = document.getElementById('address-39').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
			
	var btn = document.getElementById('order-now-40');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-40').value;
	var email = document.getElementById('email-40').value;
	var itemname = "JO MALONE ENGLISH PEAR";
	var quantity = document.getElementById('quantity-item-40').value;
	var homeaddress = document.getElementById('address-40').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
				
	var btn = document.getElementById('order-now-41');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-41').value;
	var email = document.getElementById('email-41').value;
	var itemname = "LIGHT BLUE DG WOMEN";
	var quantity = document.getElementById('quantity-item-41').value;
	var homeaddress = document.getElementById('address-41').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
				
	var btn = document.getElementById('order-now-42');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-42').value;
	var email = document.getElementById('email-42').value;
	var itemname = "MEOW KATY PERRY";
	var quantity = document.getElementById('quantity-item-42').value;
	var homeaddress = document.getElementById('address-42').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
				
	var btn = document.getElementById('order-now-43');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-43').value;
	var email = document.getElementById('email-43').value;
	var itemname = "MOONSPARKLE ESCADA";
	var quantity = document.getElementById('quantity-item-43').value;
	var homeaddress = document.getElementById('address-43').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
				
	var btn = document.getElementById('order-now-44');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-44').value;
	var email = document.getElementById('email-44').value;
	var itemname = "OMNIA AMETHYSTE BVLGARI";
	var quantity = document.getElementById('quantity-item-44').value;
	var homeaddress = document.getElementById('address-44').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
					
	var btn = document.getElementById('order-now-45');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-45').value;
	var email = document.getElementById('email-45').value;
	var itemname = "ONE DIRECTION";
	var quantity = document.getElementById('quantity-item-45').value;
	var homeaddress = document.getElementById('address-45').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
					
	var btn = document.getElementById('order-now-46');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-46').value;
	var email = document.getElementById('email-46').value;
	var itemname = "PARIS HILTON";
	var quantity = document.getElementById('quantity-item-46').value;
	var homeaddress = document.getElementById('address-46').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
					
	var btn = document.getElementById('order-now-47');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-47').value;
	var email = document.getElementById('email-47').value;
	var itemname = "PERRY ELLIS";
	var quantity = document.getElementById('quantity-item-47').value;
	var homeaddress = document.getElementById('address-47').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
					
	var btn = document.getElementById('order-now-48');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-48').value;
	var email = document.getElementById('email-48').value;
	var itemname = "PURE SEDUCTION VICTORIA";
	var quantity = document.getElementById('quantity-item-48').value;
	var homeaddress = document.getElementById('address-48').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
						
	var btn = document.getElementById('order-now-49');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-49').value;
	var email = document.getElementById('email-49').value;
	var itemname = "SELENA GOMEZ";
	var quantity = document.getElementById('quantity-item-49').value;
	var homeaddress = document.getElementById('address-49').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
							
	var btn = document.getElementById('order-now-50');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-50').value;
	var email = document.getElementById('email-50').value;
	var itemname = "SWEET PEA BB";
	var quantity = document.getElementById('quantity-item-50').value;
	var homeaddress = document.getElementById('address-50').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
							
	var btn = document.getElementById('order-now-51');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-51').value;
	var email = document.getElementById('email-51').value;
	var itemname = "TOMMY GIRL";
	var quantity = document.getElementById('quantity-item-51').value;
	var homeaddress = document.getElementById('address-51').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
							
	var btn = document.getElementById('order-now-52');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-52').value;
	var email = document.getElementById('email-52').value;
	var itemname = "TOUCH OF PINK";
	var quantity = document.getElementById('quantity-item-52').value;
	var homeaddress = document.getElementById('address-52').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
							
	var btn = document.getElementById('order-now-53');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-53').value;
	var email = document.getElementById('email-53').value;
	var itemname = "VANILLA LACE VICTORIA'S SECRET";
	var quantity = document.getElementById('quantity-item-53').value;
	var homeaddress = document.getElementById('address-53').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
		var btn = document.getElementById('order-now-54');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-54').value;
	var email = document.getElementById('email-54').value;
	var itemname = "CLINIQUE HAPPY MEN";
	var quantity = document.getElementById('quantity-item-54').value;
	var homeaddress = document.getElementById('address-54').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})
	
	
			var btn = document.getElementById('order-now-55');
btn.addEventListener('click', function(e) {
    e.preventDefault()
	alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email to verify your order, we'll send an email to the email you provided (our email may be marked as spam, please check spam). Have a nice day!");	
	
	var name = document.getElementById('name-55').value;
	var email = document.getElementById('email-55').value;
	var itemname = "SAUVAGE DIOR";
	var quantity = document.getElementById('quantity-item-55').value;
	var homeaddress = document.getElementById('address-55').value;
	var mail = 'name: '+name +'<br/> email: ' + email + '<br/> item: ' +  itemname + '<br/> quantity: ' + quantity + '<br/> Home Address: ' + homeaddress;
	           
	
	
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "accscent@outlook.ph",
    Password : "5AB00F3056B9D60C0369328869A353C6F8A7",
    To :  "accscent@outlook.ph",
    From : "gabenone7@gmail.com",
    Subject : "ORDER",
    Body : mail,
}).then(
    message => alert(message)
);	
	})