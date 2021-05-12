import { Equipe } from "./equipe"

export class Joueur {
    id!:number
    clubjoueur!:string
    numposte!:number
    prenom!:string
    nom!:string
    photos!:any
    poste!:string
    titulaire!:boolean
    equipe !:Equipe
}
