import { LigneCommande } from "../LigneCommande/ligne-commande";
import { Client } from "../client/client";

export class Commande {
    idCommande: number = 0;
    dateCommande: Date = new Date();
    lignesCommande: LigneCommande[] = [];
    client: Client = new Client();
}
