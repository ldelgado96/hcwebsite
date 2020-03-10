var elem = document.getElementById("title");
var i = 0;
var txt = "HummingCode";
var speed = 175;
(function typeWriter(){
	if (i < txt.length) {
		elem.innerHTML = elem.innerHTML.slice(0,i) + txt.charAt(i) + "_";
		i++;	
		setTimeout(typeWriter, speed);
	}
	else{
		elem.innerHTML = elem.innerHTML.slice(0,i);
	}
})();