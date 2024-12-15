// let nom= "hope"
// let argent = 300
// let nbproduit = 20
// let prixproduit = 30

// function achatproduit(nbproduit,prixproduit,argent,nom){
//     nbproduitacheter =0
//     while (argent>=prixproduit && nbproduit>0){
//         argent -= prixproduit
//         nbproduit -= 1
//         nbproduitacheter += 1
//     }
//     if (nbproduit > 0){
//         console.log("il reste du stock")
//     }
//     else{
//         console.log("il n'y a plus de stock")
//     }
//     console.log("il reste",argent,"d'argent à",nom)
//     console.log(nbproduit)
//     console.log(nbproduitacheter)

// }

// let calcul = achatproduit(nbproduit,prixproduit,argent,nom)

let title = document.querySelector("#title")
 title.addEventListener("click", function() { 
    this.classList.toggle('red')
})
