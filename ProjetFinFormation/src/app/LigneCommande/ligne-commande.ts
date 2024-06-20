import { Commande } from "../commande/commande";
import { Produit } from "../produit/produit";

export class LigneCommande {
    idLigneDeCommande: number = 0;
    quantite: number = 0;
    commande: Commande = new Commande();
    produit: Produit = new Produit();
}
