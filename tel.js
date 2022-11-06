let check = document.querySelector(".verifier");
let number = document.querySelector(".numero");
let text = document.querySelector(".texte");

let regex1 = /^\+?237 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Cameroun

let regex2 = /^\+?93 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Afghanistan

let regex3 = /^\+?27 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//afrique du sud

let regex4 = /^\+?213 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Algerie

let regex5 = /^\+?244 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//angola

let regex6 = /^\+?229 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//benin

let regex7 = /^\+?267 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//botswana

let regex8 = /^\+?226 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Burkina faso

let regex9 = /^\+?257 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Burundi

let regex10 = /^\+?238 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Cap vert

let regex12 = /^\+?269 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Comores

let regex13 = /^\+?225 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Cote d'ivoire

let regex14 = /^\+?253 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Djibouti

let regex15 = /^\+?20 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Egypte

let regex16 = /^\+?251 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Ethiopie

let regex17 = /^\+?241 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Gabon

let regex18 = /^\+?220 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Gambi

let regex19 = /^\+?233 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Ghana

let regex20 = /^\+?224 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Guinee

let regex21 = /^\+?245 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Guinnee Bisseau

let regex22 = /^\+?240 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Guinnee Equqtoriale

let regex23 = /^\+?254 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Kenia

let regex24 = /^\+?266 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Lesotho

let regex25 = /^\+?261 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Madagascar

let regex26 = /^\+?265 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//malawi

let regex27 = /^\+?212 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Maroc

let regex28 = /^\+?230 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Maurice

let regex29 = /^\+?222 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Mauritani

let regex30 = /^\+?258 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Mozambique

let regex31 = /^\+?264 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Namibie

let regex32 = /^\+?227 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Niger

let regex33 = /^\+?234 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Nigeria

let regex34 = /^\+?256 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Ouganda

let regex35 = /^\+?243 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;// Republique democratique du Congo

let regex36 = /^\+?242 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Republique du Congo

let regex37 = /^\+?250 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Rwanda

let regex38 = /^\+?239 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Sao Tome-et-Principe

let regex39 = /^\+?221 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Senegal

let regex40 = /^\+?248 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Seychelles

let regex41 = /^\+?232 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Sierra Leone

let regex42 = /^\+?252 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Somalie

let regex43 = /^\+?249 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Soudan

let regex44 = /^\+?268 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Swaziland

let regex45 = /^\+?255 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Tanzanie

let regex46 = /^\+?235 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//tchad

let regex47 = /^\+?228 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Togo

let regex48 = /^\+?216 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Tunisie

let regex49 = /^\+?263 ?(( ?\d{3}[- ]*))\d{3}[ -]?\d{3}$/;//Zimbabwe



check.addEventListener("click", () => {
   if (number.value == ""){
    text.innerText = "Entrez le numero de telephone";
    text.style.color = "yellow";
   } 
   
   else if ( number.value.match(regex1)){
    text.innerHTML = "<mark>Ce numero est pour le Cameroun !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex2)){
    text.innerHTML = "<mark>Ce numero est pour l'Afghanistan !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex3)){
    text.innerHTML = "<mark>Ce numero est pour l'Afrique du Sud !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex4)){
    text.innerHTML = "<mark>Ce numero est pour l'Algerie !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex5)){
    text.innerHTML = "<mark>Ce numero est pour l'angola !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex6)){
    text.innerHTML = "<mark>Ce numero est pour le Benin !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex7)){
    text.innerHTML = "<mark>Ce numero est pour le botswana !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex8)){
    text.innerHTML = "<mark>Ce numero est pour le Burkina faso !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex9)){
    text.innerHTML = "<mark>Ce numero est pour le Burundi !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex10)){
    text.innerHTML = "<mark>Ce numero est pour le Cap vert !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex12)){
    text.innerHTML = "<mark>Ce numero est pour le Comores du Sud !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex13)){
    text.innerHTML = "<mark>Ce numero est pour la Cote d'ivoire !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex14)){
    text.innerHTML = "<mark>Ce numero est pour le Djibouti !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex15)){
    text.innerHTML = "<mark>Ce numero est pour l'Egypte !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex16)){
    text.innerHTML = "<mark>Ce numero est pour l'Ethiopie !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex17)){
    text.innerHTML = "<mark>Ce numero est pour le Gabon !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex18)){
    text.innerHTML = "<mark>Ce numero est pour la Gambi !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex19)){
    text.innerHTML = "<mark>Ce numero est pour le Ghana !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex20)){
    text.innerHTML = "<mark>Ce numero est pour la Guinee !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex21)){
    text.innerHTML = "<mark>Ce numero est pour la Guinnee Bisseau !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex22)){
    text.innerHTML = "<mark>Ce numero est pour la Guinnee Equqtoriale !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex23)){
    text.innerHTML = "<mark>Ce numero est pour le Kenia !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex24)){
    text.innerHTML = "<mark>Ce numero est pour le Lesotho !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex25)){
    text.innerHTML = "<mark>Ce numero est pour le Madagascar !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex26)){
    text.innerHTML = "<mark>Ce numero est pour le Malawi !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex27)){
    text.innerHTML = "<mark>Ce numero est pour le Maroc !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex28)){
    text.innerHTML = "<mark>Ce numero est pour le Maurice !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex29)){
    text.innerHTML = "<mark>Ce numero est pour la Mauritani !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex30)){
    text.innerHTML = "<mark>Ce numero est pour le Mozambique !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex31)){
    text.innerHTML = "<mark>Ce numero est pour la Namibie !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex32)){
    text.innerHTML = "<mark>Ce numero est pour le Niger !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex33)){
    text.innerHTML = "<mark>Ce numero est pour le Nigeria !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex34)){
    text.innerHTML = "<mark>Ce numero est pour l'Ouganda !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex35)){
    text.innerHTML = "<mark>Ce numero est pour la RDC !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex36)){
    text.innerHTML = "<mark>Ce numero est pour la Republique du Congo !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex37)){
    text.innerHTML = "<mark>Ce numero est pour le Rwanda !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex38)){
    text.innerHTML = "<mark>Ce numero est pour le Sao Tome-et-Principe !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex39)){
    text.innerHTML = "<mark>Ce numero est pour le Senegal !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex40)){
    text.innerHTML = "<mark>Ce numero est pour le Seychelles !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex41)){
    text.innerHTML = "<mark>Ce numero est pour la Sierra Leone !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex42)){
    text.innerHTML = "<mark>Ce numero est pour la Somalie !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex43)){
    text.innerHTML = "<mark>Ce numero est pour le Soudan !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex44)){
    text.innerHTML = "<mark>Ce numero est pour la Swaziland !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex45)){
    text.innerHTML = "<mark>Ce numero est pour la Tanzanie !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex46)){
    text.innerHTML = "<mark>Ce numero est pour le tchad !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex47)){
    text.innerHTML = "<mark>Ce numero est pour le Togo !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   }
   else if ( number.value.match(regex8)){
    text.innerHTML = "<mark>Ce numero est pour la Tunisie !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else if ( number.value.match(regex49)){
    text.innerHTML = "<mark>Ce numero est pour le Zimbabwe !</mark>";
    text.style.color = "rgba(4,125,9,1)";
   } 
   else {
    text.innerText = "Oops! numero icorrect";
    text.style.color = "#da3400";
   }
})
