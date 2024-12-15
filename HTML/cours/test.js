let cathegorie = document.querySelector("#titre1")
let affiche = document.querySelector("#contenu1")

cathegorie.addEventListener("click", function () {
    affiche.classList.toggle("contenue_afficher")
})