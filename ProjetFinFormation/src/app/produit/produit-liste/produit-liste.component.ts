import { Component } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit-liste.component.html',
  styleUrl: './produit-liste.component.css'
})
export class ProduitListeComponent {

  produits?: Produit[] ;

  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }

  private getProduits(){
    this.produitService.getProduitList().subscribe((data: any) => {
      this.produits = data;
    });
  }

  updateProduit(idProduit: number){
    this.router.navigate(['update-produit', idProduit]);
  }

  deleteProduit(id: number){
    this.produitService.deleteProduit(id).subscribe( (data: any) => {
      console.log(data);
      this.getProduits();
    })
  }
}
