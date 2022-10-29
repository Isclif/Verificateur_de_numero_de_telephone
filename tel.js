let check = document.querySelector(".verifier");
let number = document.querySelector(".numero");
let text = document.querySelector(".texte");

let regex = /^[\d,\s,\+,\-]{5,20}/;

check.addEventListener("click", () => {
   if (number.value == ""){
    text.innerText = "Entrez votre numero de telephone";
    text.style.color = "yellow";
   } 
   
   else if ( number.value.match(regex)){
    text.innerText = "Le numero entree est correct !";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else {
    text.innerText = "Oops! numero icorrect";
    text.style.color = "#da3400";
   }
})