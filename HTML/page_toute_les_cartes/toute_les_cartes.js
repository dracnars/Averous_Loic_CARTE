let commun = document.querySelector("#raretée_commun")
let rare = document.querySelector("#raretée_rare")
let epique = document.querySelector("#raretée_epique")
let legendaire = document.querySelector("#raretée_legendaire")

let perso_com = document.querySelector("#personnages_com")
let perso_rare = document.querySelector("#personnages_rare")
let perso_epique = document.querySelector("#personnages_epique")
let perso_legendaire = document.querySelector("#personnages_legendaire")

let nom1=document.querySelector("#nom_akali")

commun.addEventListener("click",function(){
    perso_com.classList.toggle('personnage_afficher')
    nom1.classList.toggle('nom_perso_afficher')
})

rare.addEventListener("click" ,function(){
    perso_rare.classList.toggle('personnage_afficher')
})