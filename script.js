//déclaration des éléments html en code script

const body =document.querySelector('body');
const button =document.querySelector('button');
const colors=['violet','red', 'green','pink','black'];

body.style.backgroundColor='violet';
//function pour changer la couleur de fond de la page en une couleur aléatoire parmi un tableau de couleurs prédéfini.
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];

})


