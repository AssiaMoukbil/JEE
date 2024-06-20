import { Component } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Fournisseur } from '../../fournisseur/fournisseur';
import { FournisseurService } from '../../fournisseur/fournisseur.service';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent {
  id: number = 0;
  produit: Produit = new Produit();
  fournisseurs: Fournisseur[] = [];
  constructor(private produitService: ProduitService, private fournisseurService:FournisseurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.loadFournisseurs();

    this.produitService.getProduitById(this.id).subscribe((data: any) => {
      this.produit = data;
    }, error => console.log(error));
  }

  loadFournisseurs(): void {
    this.fournisseurService.getFournisseurList().subscribe((data: any) => this.fournisseurs = data);
  }

  onSubmit(){
    this.produitService.updateProduit(this.id, this.produit).subscribe( data =>{
      this.goToFournisseurList();
    }
    , error => console.log(error));
  }

  goToFournisseurList(){
    this.router.navigate(['/produits']);
  }
}
