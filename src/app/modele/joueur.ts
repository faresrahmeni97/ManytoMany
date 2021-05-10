import { Equipe } from "./equipe"

export class Joueur {
    id!:number
    clubjoueur!:String
    numposte!:number
    prenom!:String
    nom!:String
    photos!:String
    poste!:String
    titulaire!:boolean
    equipe !:Equipe
}
