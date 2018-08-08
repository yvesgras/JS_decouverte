// alert ("hey!");
// pour cibler id: pas d'espace mais des majuscules à chaque mots CamelCase
//innerHtml modifie le contenu html attention à la syntaxe =
// var commeonveut = document.getElementById("page-title");
var resultat = document.getElementById("result");
// var city = document.getElementById("city");
var meteo = prompt("quel temps fait-il?");
switch (meteo){
    case 'soleil':
    resultat.innerHTML = "va dehors!"
    break;
    

    case 'pluie':
    resultat.innerHTML = "reste chez toi!"
    break;
    

    case 'neige':
    resultat.innerHTML = "va skier!"
    break;
    default:
}
// if (meteo==="soleil"){
//     resultat.innerHTML = "va dehors!";
//     resultat.style = "orange";
// }
// else if (meteo==="pluie"){
//     resultat.innerHTML= "reste chez toi!";
// }

// else  {
//     resultat.innerHTML= "pas compris";
// }

// // var nom = prompt ("quel est ton nom?") 
// // console.log(nom)
// // // document.getElementById("page-title").innerHTML="Mon Titre";
// // // //on peut aussi changer le style en JavaScript:
// // // document.getElementById("page-title").style.display="none";
// // console.log("j'affiche ce que je veux")

// // // //j'utilise ma variable et je mets du texte dans mon html;
// // commeonveut.innerHTML = "fraise";
// // commeonveut.style.color = "white";
// // //je crée une variable
// // // var poire = "1+2";
// // // var poire = "nom"+""+"prénom"; le""+""+"" permet de mettre un espace
// // // var poire = 208*8;
// // // j'apelle ma variable
// // // var nom = "Gras";
// // // var premon = "Yves \"po,lksllkl \"";
// // // var poire = "Bonjour "+ nom +" "+premon;
// // // resultat.innerHTML = poire;
// // // resultat.style.backgroundColor ="aqua";
// // //plusieurs types de var
// // //"#" string : apelle une chaine de caractère; ecrit ce qui est dedant
// // // sans "" ex 1+2 la var calcule et affiche 3
// // // le + concatène les variables

// // var array = ["Yves","Gras","Calais",32]
// // resultat.innerHTML = "Prénom: "+array[0]+" Nom: "+array[1]; 
// // // var array affiche un tableau [0] parce que le tableau commence à 0
// // city.innerHTML=" Ville: "+array[2]+" Age: "+array[3];
// var i = prompt ("choisis un nombre");
// if(i > 0 && i <= 100){
//     console.log(i+ "est positif");
//     resultat.innerHTML = i + " est compris entre 0 et 100";
//     resultat.style.color="green";
// }
// else if (i > 0 && i >= 100){
//     resultat.innerHTML = i + " est plus grand que 100";
//     resultat.style.color="purple";
// }
// // == parce qu'il s'agit d'un interger (nombre) donc==
// else if (i==0) {
//     console.log("i=0");
//     resultat.innerHTML= "j'aime les bananes";
//     resultat.style.color="yellow";

// }
//     else if (i<0){
//         console.log("i est négatif");
//         resultat.innerHTML = i + " est négatif";
//         resultat.style.color="red";
// }
//         else {
//             console.log("i n'est pas un nombre");
// }
