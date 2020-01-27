document.getElementById("contacttaster").addEventListener("click", function(){
	var ime = document.getElementById("contactime").value;
	var regIme = /^[A-Z][a-z]{1,10}$/
	if(regIme.test(ime)){
		document.getElementById("errIme").innerHTML = "";
		document.getElementById("contactime").style.border= "1px solid grey";
	}
	else{
		document.getElementById("errIme").innerHTML = "*";
		document.getElementById("contactime").style.border= "2px solid red";
	}
	var prezime = document.getElementById("contactprezime").value;
	var regPrezime = /^[A-Z][a-z]{1,15}$/
	if(regPrezime.test(prezime)){
		document.getElementById("errPrezime").innerHTML = "";
		document.getElementById("contactprezime").style.border= "1px solid grey";
	}
	else{
		document.getElementById("errPrezime").innerHTML = "*";
		document.getElementById("contactprezime").style.border= "2px solid red";
	}
	var redniBrojSelektovanog = document.getElementById("contactlista").selectedIndex;
	if(redniBrojSelektovanog != 0){
		document.getElementById("errGod").innerHTML = "";
		document.getElementById("contactlista").style.border= "";
		document.getElementById("errGod").style.color= "";
	}
	else{
		document.getElementById("errGod").innerHTML = "*";
		document.getElementById("contactlista").style.border= "2px solid red";
		document.getElementById("errGod").style.color= "red";
	}
});
document.getElementById("contactime").addEventListener("blur", function(){
	var ime = document.getElementById("contactime").value;
	var regIme = /^[A-Z][a-z]{1,10}$/
	if(regIme.test(ime)){
		document.getElementById("errIme").innerHTML = "";
		document.getElementById("contactime").style.border= "1px solid grey";
	}
	else{
		document.getElementById("errIme").innerHTML = "*";
		document.getElementById("contactime").style.border= "2px solid red";
	}
});
document.getElementById("contactprezime").addEventListener("blur", function(){
	var prezime = document.getElementById("contactprezime").value;
	var regPrezime = /^[A-Z][a-z]{1,15}$/
	if(regPrezime.test(prezime)){
		document.getElementById("errPrezime").innerHTML = "";
		document.getElementById("contactprezime").style.border= "1px solid grey";
	}
	else{
		document.getElementById("errPrezime").innerHTML = "*";
		document.getElementById("contactprezime").style.border= "2px solid red";
	}
});
document.getElementById("contactlista").addEventListener("blur", function(){
	var redniBrojSelektovanog = document.getElementById("contactlista").selectedIndex;
	if(redniBrojSelektovanog != 0){
		document.getElementById("errGod").innerHTML = "";
		document.getElementById("contactlista").style.border= "";
		document.getElementById("errGod").style.color= "";
	}
	else{
		document.getElementById("errGod").innerHTML = "*";
		document.getElementById("contactlista").style.border= "2px solid red";
		document.getElementById("errGod").style.color= "red";
	}
});
document.getElementById("contacttaster").addEventListener("click", function(){
	var check = document.getElementById("contactagree").checked;
	if(!check){
		document.getElementById("errAgree").innerHTML = "*";
		document.getElementById("contactagree").style.border= "2px solid red";

	}
	else{
		document.getElementById("errAgree").innerHTML = "";
		document.getElementById("contactagree").style.border= "";
	}
});