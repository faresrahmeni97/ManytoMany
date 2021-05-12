import { Equipe } from './equipe';

export class Staff {
    id!: number;
    nom!: String;
    prenom!: String;
    role!: String;
    club!: String;
    equipe !: Equipe;
}
