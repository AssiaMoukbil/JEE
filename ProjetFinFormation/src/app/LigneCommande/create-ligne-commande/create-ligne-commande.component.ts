import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../../commande/commande.service';
import { ProduitService } from '../../produit/produit.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Produit } from '../../produit/produit';
import { CommonModule } from '@angular/common';
import { Commande } from '../../commande/commande';
import { LigneCommande } from '../ligne-commande';
import { LigneCommandeService } from '../ligne-commande.service';

@Component({
  selector: 'app-create-ligne-commande',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './create-ligne-commande.component.html',
  styleUrls: ['./create-ligne-commande.component.css']
})
export class CreateLigneCommandeComponent implements OnInit {
  produits: Produit[] = [];
  commandeForm: FormGroup;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private commandeService: CommandeService,
    private produitService: ProduitService,
    private LDCservice: LigneCommandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.commandeForm = this.fb.group({
      produit: [''],
      quantite: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produitService.getProduitList().subscribe(produits => this.produits = produits);
  }

  createLDC() {
    const produit = this.commandeForm.get('produit')?.value;
    const quantite = this.commandeForm.get('quantite')?.value;

    this.commandeService.getCommandeById(this.id).subscribe(
      (commande: Commande) => {
        const ligneCommande = new LigneCommande();
        ligneCommande.commande = commande;
        ligneCommande.produit = produit;
        ligneCommande.quantite = quantite;

        this.LDCservice.createLigneCommande(ligneCommande).subscribe(
          response => {
            console.log('Ligne de commande created successfully', response);
            this.router.navigate(['/commandes']);
          },
          error => {
            console.error('Error creating ligne de commande', error);
          }
        );
      },
      error => {
        console.error('Error fetching commande', error);
      }
    );
  }
}
