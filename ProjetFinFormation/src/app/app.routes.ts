import { Routes } from '@angular/router';
import { CreateFournisseurComponent } from './fournisseur/create-fournisseur/create-fournisseur.component';
import { FournisseurListeComponent } from './fournisseur/fournisseur-liste/fournisseur-liste.component';
import { UpdateFournisseurComponent } from './fournisseur/update-fournisseur/update-fournisseur.component';
import { ProduitListeComponent } from './produit/produit-liste/produit-liste.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';
import { CreateProduitComponent } from './produit/create-produit/create-produit.component';
import { ClientListeComponent } from './client/client-liste/client-liste.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { CommandeListeComponent } from './commande/commande-liste/commande-liste.component';
import { CreateCommandeComponent } from './commande/create-commande/create-commande.component';
import { LigneCommandeListeComponent } from './LigneCommande/ligne-commande-liste/ligne-commande-liste.component';
import { CreateLigneCommandeComponent } from './LigneCommande/create-ligne-commande/create-ligne-commande.component';


export const routes: Routes = [
  {path: '', redirectTo: 'fournisseurs', pathMatch: 'full'},
  {path: 'fournisseurs', component: FournisseurListeComponent},
  {path: 'create-fournisseur', component: CreateFournisseurComponent},
  {path: 'update-fournisseur/:id', component: UpdateFournisseurComponent},
  {path: 'produits', component: ProduitListeComponent},
  {path: 'update-produit/:id', component: UpdateProduitComponent},
  {path: 'create-produit', component: CreateProduitComponent},
  {path: 'clients', component: ClientListeComponent},
  {path: 'update-client/:id', component: UpdateClientComponent},
  {path: 'create-client', component: CreateClientComponent},
  {path: 'commandes', component: CommandeListeComponent},
  {path: 'create-commande', component: CreateCommandeComponent},
  {path: 'voirCommande/:id', component: LigneCommandeListeComponent},
  {path: 'ajouterLDC/:id', component: CreateLigneCommandeComponent},
];
