import { Fournisseur } from '../fournisseur/fournisseur';


export class Produit {
    idProduit: number = 0;
    nomProduit: string = '';
    quantiteStock: number = 0;
    prix: number = 0;
    fournisseur: Fournisseur = new Fournisseur();
}
