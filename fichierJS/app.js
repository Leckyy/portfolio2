  AOS.init(); //animation

  //*********************Le texte qui s'écrit ***************
  var text =document.querySelector('#desc-info');

new Typewriter(text, {
	deletespeed: 20,
  loop: true,
})
.typeString('Etudiant')
.pauseFor(400)
.deleteChars(8)
.typeString('Développeur')
.pauseFor(900)
.start()


//*********************Fin texte qui s'écrit ***************


var desc=document.getElementById("spanDescription");
window.addEventListener("scroll",function(){

  if(scrollY < 180){

new Typewriter(desc,{
 DelayNode: 100,
})
    .changeDelay(30)
    .typeString("Je m'appelle Tristan AURIAT et je suis en apprentissage pour devenir développeur web. ")
    .start()
    }

    tempsPourTexte= setTimeout("DescSansAnimation()",3400);

})

function DescSansAnimation(){
  desc.innerHTML="Je m'appelle Tristan AURIAT et je suis en apprentissage pour devenir développeur web. Grace a mes stages effectués mes années précédentes, j'ai découvert le développement web. Ceci m'a permis de découvrir sur différentes formes en le codant, avec WordPress ou même Wix. J'ai beaucoup aimé réaliser des sites Internet, c'est pour cela que j'ai rejoint le lycée Parc de Vilgenis en 2021 pour m'approfondir dans ce domaine. Pour cela en première année, on a des cours pour apprendre le html css et php avec des minis-tp et des projets à réaliser pour se former davantage. En deuxième année, on nous apprend toujours le développement, mais cette fois-ci plus approfondi.";
}


//***********************************Diapo****************************************** *
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //***********************************Fin Diapo****************************************** */

// ************************************Boutton pour diapo**********************************
var diapo = 0;
  document.getElementById('diapoBT').addEventListener("click", function(){
    if(diapo === 0){
        document.querySelector(".swiper").style.display="none";
        document.querySelector(".SectionProjet").style.display="none";
        document.getElementById('diapoBT').innerHTML="Désactiver le diaporama";
        localStorage.setItem("diapo", "20");
        location.reload()
        diapo++;
    }
    else{
        document.querySelector(".swiper").style.display="none";
        document.querySelector(".SectionProjet").style.display="flex";
        document.getElementById('diapoBT').innerHTML="Activer le diaporama";
        localStorage.removeItem("diapo");
        location.reload()
        diapo--;
       
    }
  })



  if(localStorage.hasOwnProperty('diapo')){
        document.querySelector(".swiper").style.display="block";
        document.querySelector(".SectionProjet").style.display="none";
        document.getElementById('diapoBT').innerHTML="Désactiver le diaporama";
    diapo="1";
  }

// ************************************Fin Boutton pour diapo**********************************

//**************************************** Mode sombre *************************************** */
  var fond =0;

  document.getElementById('FondCouleur').addEventListener("click",function(){

    if(fond === 0){
      document.querySelector("body").classList.add("fondbody");
      document.querySelector("nav").classList.add("FondMenu");
      document.querySelector(".acceuilMenu").classList.add("FondMenu");
      document.querySelector(".acceuilMenu").classList.add("traitBlanc");
      document.querySelector(".langagesMenu").classList.add("FondMenu");
      document.querySelector(".langagesMenu").classList.add("traitBlanc");
      document.querySelector(".projetsMenu").classList.add("FondMenu");
      document.querySelector(".projetsMenu").classList.add("traitBlanc");
      document.querySelector(".formationsMenu").classList.add("FondMenu");
      document.querySelector(".formationsMenu").classList.add("traitBlanc");
      document.querySelector(".stagesMenu").classList.add("FondMenu");
      document.querySelector(".stagesMenu").classList.add("traitBlanc");
      document.querySelector(".veilleMenu").classList.add("FondMenu");
      document.querySelector(".veilleMenu").classList.add("traitBlanc");
      document.getElementById('FondCouleur').innerHTML="☀️";
      document.querySelector(".l1").style.background="white";
      document.querySelector(".l2").style.background="white";
      document.querySelector(".l3").style.background="white";
      document.getElementById('div1').classList.add("noir");
      document.querySelector(".TitreLangage").classList.add("noir");
      document.querySelector(".TexteLangage").classList.add("noir");
      document.querySelector(".TitreProjet").classList.add("noir");
      document.querySelector(".TexteProjet").classList.add("noir");
      document.querySelector(".TitreStage").classList.add("noir");
      document.querySelector(".TexteStage").classList.add("noir");
      document.querySelector(".TitreVeille").classList.add("noir");
      document.querySelector(".TexteVeille").classList.add("noir");
      document.querySelector(".d1VeilleTechno").classList.add("noir");
      document.querySelector(".d2VeilleTechno2").classList.add("noir");
      document.querySelector(".d1IA").classList.add("noir");
      document.querySelector(".TitreInfoImportante").classList.add("noir");
      document.querySelector(".TitreConclusion").classList.add("noir");
      document.querySelector(".TexteConclusion").classList.add("noir");
      localStorage.setItem("FondCouleur", "20");
      fond++;
    }

    else{
      document.querySelector("body").classList.remove("fondbody");
      document.querySelector("nav").classList.remove("FondMenu");
      document.querySelector(".acceuilMenu").classList.remove("FondMenu");
      document.querySelector(".acceuilMenu").classList.remove("traitBlanc");
      document.querySelector(".langagesMenu").classList.remove("FondMenu");
      document.querySelector(".langagesMenu").classList.remove("traitBlanc");
      document.querySelector(".projetsMenu").classList.remove("FondMenu");
      document.querySelector(".projetsMenu").classList.remove("traitBlanc");
      document.querySelector(".formationsMenu").classList.remove("FondMenu");
      document.querySelector(".formationsMenu").classList.remove("traitBlanc");
      document.querySelector(".stagesMenu").classList.remove("FondMenu");
      document.querySelector(".stagesMenu").classList.remove("traitBlanc");
      document.querySelector(".veilleMenu").classList.remove("FondMenu");
      document.querySelector(".veilleMenu").classList.remove("traitBlanc");
      document.getElementById('FondCouleur').innerHTML="🌙";
      document.querySelector(".l1").style.background="black";
      document.querySelector(".l2").style.background="black";
      document.querySelector(".l3").style.background="black";
      document.getElementById('div1').classList.remove("noir");
      document.querySelector(".TitreLangage").classList.remove("noir");
      document.querySelector(".TexteLangage").classList.remove("noir");
      document.querySelector(".TitreProjet").classList.remove("noir");
      document.querySelector(".TexteProjet").classList.remove("noir");
      document.querySelector(".TitreStage").classList.remove("noir");
      document.querySelector(".TexteStage").classList.remove("noir");
      document.querySelector(".TitreVeille").classList.remove("noir");
      document.querySelector(".TexteVeille").classList.remove("noir");
      document.querySelector(".d1VeilleTechno").classList.remove("noir");
      document.querySelector(".d2VeilleTechno2").classList.remove("noir");
      document.querySelector(".d1IA").classList.remove("noir");
      document.querySelector(".TitreInfoImportante").classList.remove("noir");
      document.querySelector(".TitreConclusion").classList.remove("noir");
      document.querySelector(".TexteConclusion").classList.remove("noir");
      localStorage.removeItem("FondCouleur");
      fond--;
    }


  })


  if(localStorage.hasOwnProperty('FondCouleur')){
      document.querySelector("body").classList.add("fondbody");
      document.querySelector("nav").classList.add("FondMenu");
      document.querySelector(".acceuilMenu").classList.add("FondMenu");
      document.querySelector(".acceuilMenu").classList.add("traitBlanc");
      document.querySelector(".langagesMenu").classList.add("FondMenu");
      document.querySelector(".langagesMenu").classList.add("traitBlanc");
      document.querySelector(".projetsMenu").classList.add("FondMenu");
      document.querySelector(".projetsMenu").classList.add("traitBlanc");
      document.querySelector(".formationsMenu").classList.add("FondMenu");
      document.querySelector(".formationsMenu").classList.add("traitBlanc");
      document.querySelector(".stagesMenu").classList.add("FondMenu");
      document.querySelector(".stagesMenu").classList.add("traitBlanc");
      document.querySelector(".veilleMenu").classList.add("FondMenu");
      document.querySelector(".veilleMenu").classList.add("traitBlanc");
      document.getElementById('FondCouleur').innerHTML="☀️";
      document.querySelector(".l1").style.background="white";
      document.querySelector(".l2").style.background="white";
      document.querySelector(".l3").style.background="white";
      document.getElementById('div1').classList.add("noir");
      document.querySelector(".TitreLangage").classList.add("noir");
      document.querySelector(".TexteLangage").classList.add("noir");
      document.querySelector(".TitreProjet").classList.add("noir");
      document.querySelector(".TexteProjet").classList.add("noir");
      document.querySelector(".TitreStage").classList.add("noir");
      document.querySelector(".TexteStage").classList.add("noir");
      document.querySelector(".TitreVeille").classList.add("noir");
      document.querySelector(".TexteVeille").classList.add("noir");
      document.querySelector(".d1VeilleTechno").classList.add("noir");
      document.querySelector(".d2VeilleTechno2").classList.add("noir");
      document.querySelector(".d1IA").classList.add("noir");
      document.querySelector(".TitreInfoImportante").classList.add("noir");
      document.querySelector(".TitreConclusion").classList.add("noir");
      document.querySelector(".TexteConclusion").classList.add("noir");
      fond="1";
  }

//****************************************Fin Mode sombre *************************************** */

//********************************Menu téléphone ************************************************ */

  document.querySelector(".nav-toggler").addEventListener("click", function(){
    document.querySelector(".nav-toggler").classList.toggle("active")
    document.querySelector("nav").classList.toggle("active")
})

//********************************Fin Menu téléphone ************************************************ */

document.getElementById("button-popup-solistos").addEventListener("click",function(){
  document.querySelector(".popup-solistos").style.display="block";
  document.querySelector(".popup-solistos").scrollIntoView({
    behavior: 'smooth'
  });
})

document.getElementById("cross-solistos").addEventListener("click", function(){
  document.querySelector(".popup-solistos").style.display="none";
})
