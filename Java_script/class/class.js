class hero{
    constructor(attaque,vie,precision ){
        this.attaque = attaque
        this.vie = vie
        this.precision = precision// j'initalise la precision mais elle serra modifier dans la fonction attaque donc la valeur d'origine n'a pas d'importance
        this.nom = prompt("entré le nom de ce guerrié !")
    }
    getattack(){
        console.log(this.attaque)
        this.precision = Math.random()
        console.log(this.precision)
        //si la précision et supérieur à 50 alors le personnage touche
         if (this.precision>= 0.5){ 
            console.log(this.nom,"attaque infligant", this.attaque," point de dégâs")
            return this.attaque
        }
        else{
            console.log(this.nom,"rate ça cible et tombe parterre passant son tour")
            return 0 //car le personnage n'infligeras pas de dégas
        }
    }
    // attaque(){

        // si la précision et supérieur à 50 alors le personnage touche
        // if (precision>= 50){ 
        //     console.log(nom,"attaque infligant", attaque," point de dégâs")
        //     return attaque
        // }
        // else{
        //     console.log(nom,"rate ça cible et tombe parterre passant son tour")
        //     return 0 //car le personnage n'infligeras pas de dégas
        // }
}


function combat (combatant1,combatant2){
    console.log(combatant1)
    while (combatant1.vie > 0 && combatant2.vie > 0){
        combatant2.vie -= combatant1.getattack()

        if( combatant2.vie <= 0){
            return 1
        }
        
        combatant1.vie -= combatant2.getattack()
        if (combatant1.vie <= 0){
            return 2
            
        }
        
    }
}


let combatant1 = new hero(10 , 200 , 0)
let combatant2 = new hero(10 , 200 , 0)

let derouler = combat(combatant1,combatant2)
if (derouler == 1){
    alert(combatant1.nom, "à gagner")
}
else //(derouler == 2)
{
    alert(combatant2.nom, "à gagner")
}
