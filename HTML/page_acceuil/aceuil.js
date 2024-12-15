let bouton = document.querySelector("#nightmode")
let coter = document.querySelector(".barre")
let haut = document.querySelector("header")
let parra = document.querySelector(".parragraphe1")
let parra2 = document.querySelector(".parragraphe2")
let info = document.querySelector(".textinfo")
let fond = document.querySelector("body")


bouton.addEventListener("click",function(){
    coter.classList.toggle('darkbarre')
    haut.classList.toggle('darkheader')
    parra.classList.toggle('darkparragraphe1')
    parra2.classList.toggle('darkparragraphe2')
    info.classList.toggle('darktextinfo')
    fond.classList.toggle('darkbody')
})



let form = document.querySelector("form")
console.log(form)

form.addEventListener("submit",function(event){
    event.preventDefault()

    let variableEmail = document.querySelector("#email").value
    if (variableEmail.trim() === ""){
        console.log("email vide")
    }

    let variableMDP = document.querySelector("#MDP").value //permet d'obtenir la valeur qui est mis dans l'input mot de passe par l'utilisateur
    let mdpvérif = document.querySelector("#MDP2").value

    let question_nom = document.querySelector("#name")
    let question_email = document.querySelector("#email")
    let question_mdp = document.querySelector("#MDP")
    let question_mdp2 = document.querySelector("#MDP2")

    if (question_nom.value.length < 6){

        console.log("nom trop cour")
        question_nom.classList.remove('vrais')
        question_nom.classList.add('faux')
    }
    else{
        question_nom.classList.remove('faux')
        question_nom.classList.add('vrais')
        if(question_email.value === ""){
            question_email.classList.remove('vrais')
            question_email.classList.add('faux')
        }
        else{
            question_email.classList.remove('faux')
            question_email.classList.add('vrais')
            if (variableMDP.trim() === "") {
                console.log("mdp vide")
                question_mdp.classList.remove('vrais')
                question_mdp.classList.add('faux')
                question_nom.classList.add('vrais')
            }
            else{
                if (mdpvérif != variableMDP){
                    console.log("recopie")
                    question_mdp.classList.add('vrais')
                    question_mdp2.classList.remove('vrais')
                    question_mdp2.classList.add('faux')
                }
                else{
                    console.log("valide mdp")
                    question_mdp2.classList.add('vrais')
                }
            }
        }
        
    }





})