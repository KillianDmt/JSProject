let pendu = [
    "Pendu0",
    "Pendu1",
    "Pendu2",
    "Pendu3",
    "Pendu4",
    "Pendu5",
    "Pendu6"
]

let score = 0
let TableauLettre = []
let lettreEncodee = ""

//pas oublier de declarer en debut de jeu

function resetScore(){
    perdu = false
    gagne = false
    erreur = 0
}

function PenduScore(erreur){
    if (erreur === 6){
        perdu = true
    }
}

function VerifLettre(lettreAVerif) {
    let l = 0
    for (let i = 0; i < TableauLettre.length; i++){
        if (lettreAVerif === TableauLettre[i]){
            l = 0
            break
        }
        l = 1
    }
    erreur += l
}

function imageErreur() {
    let imageErreur = pendu[erreur]
    document.getElementById("Pendu").src = "Images/" + imageErreur;
}
let restart = document.getElementById("restart")
if (restart){
    restart.addEventListener('click', function() {
        resetScore()
        let IndiceChoix = Math.floor(Math.random() * 70)
        let ChoixMot = listeMot[IndiceChoix]
        console.log(ChoixMot)
        TableauLettre = ChoixMot.split("")
        console.log(TableauLettre)
    })
}