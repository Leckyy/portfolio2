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


    const image = document.getElementById("image1");
    const titre = document.getElementById("titre");
    const texte = document.getElementById("text");
    const titree = document.getElementById("titree");
    const textt = document.getElementById("textt");
    const imagee = document.getElementById("image2");
	const titreee = document.getElementById("titre3");
	const texttt = document.getElementById("text3");
const TL1 = gsap.timeline({paused: true});


// Animation du texte avec greenstock
TL1
.from(image, 1, {x: -100, opacity: 0,})
.from(titre, 1, {y: -100, opacity: 0,})
.from(text, 1, {x: 50, opacity: 0,})



.from(titree, 1, {y: -50, opacity: 0,})
.from(textt, 1, {x: -50, opacity: 0,})
.from(imagee, 1, {x: 50, opacity: 0})

.from(titreee, 1, {y: -50, opacity: 0})
.from(texttt, 1, {y: -50, opacity: 0})

TL1.play();

// Fin animation du texte avec greenstock


document.getElementById("image1").addEventListener("mouseover", function(){
	document.getElementById("image1").style.transform="scale(1.2) rotate(-2deg)";
	document.getElementById("image1").style.transition="0.3s";
})

document.getElementById("image1").addEventListener("mouseleave", function(){
	document.getElementById("image1").style.transform="scale(1) rotate(0)";
})


document.getElementById("image2").addEventListener("mouseover", function(){
	document.getElementById("image2").style.transform="scale(1.2) rotate(5deg)";
	document.getElementById("image2").style.transition="0.3s";

})

document.getElementById("image2").addEventListener("mouseleave", function(){
	document.getElementById("image2").style.transform="scale(1) rotate(0)";

})

