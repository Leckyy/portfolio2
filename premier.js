var theme =0;
document.getElementById('change').addEventListener("click", function(){


	if (theme === 0) {
		document.querySelector("nav").classList.add('noir');
		document.querySelector("#un").classList.add('noir');
		document.querySelector("#deux").classList.add('noir');
		document.querySelector("#trois").classList.add('noir');
		document.querySelector("#quatre").classList.add('noir');
		document.querySelector("#cinq").classList.add('noir');
		document.querySelector(".un").classList.add('un2');
		document.querySelector(".deux").classList.add('deux2');
		document.querySelector(".trois").classList.add('trois2');
		document.querySelector(".quatre").classList.add('quatre2');
		document.querySelector(".cinq").classList.add('cinq2');
		document.querySelector("nav li").classList.add('noir');
		document.querySelector("body").classList.add('noir');
		document.querySelector("#change").innerHTML ="☀️";
		theme++;
		

	}
	else{
		document.querySelector("nav").classList.remove('noir');
		document.querySelector("#un").classList.remove('noir');
		document.querySelector("#deux").classList.remove('noir');
		document.querySelector("#trois").classList.remove('noir');
		document.querySelector("#quatre").classList.remove('noir');
		document.querySelector("#cinq").classList.remove('noir');
		document.querySelector(".un").classList.remove('un2');
		document.querySelector(".deux").classList.remove('deux2');
		document.querySelector(".trois").classList.remove('trois2');
		document.querySelector(".quatre").classList.remove('quatre2');
		document.querySelector(".cinq").classList.remove('cinq2');
		document.querySelector("nav li").classList.remove('noir');
		document.querySelector("body").classList.remove('noir');
		document.querySelector("#change").innerHTML ="🌕";
		theme--;
	}
})




// var options1 = {
//     width: 550,
//     zoomWidth: 500,
//     offset: {vertical: -300, horizontal: -1250}
// };


// new ImageZoom(document.getElementById("img-container"), options1);


// var options2 = {
//     width: 550,
//     zoomWidth: 500,
//     offset: {vertical: -500, horizontal: -1250}
// };

// new ImageZoom(document.getElementById("img-container2"), options2);