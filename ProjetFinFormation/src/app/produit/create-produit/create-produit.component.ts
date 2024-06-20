import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Fournisseur } from '../../fournisseur/fournisseur';
import { FournisseurService } from '../../fournisseur/fournisseur.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-produit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-produit.component.html',
  styleUrl: './create-produit.component.css'
})
export class CreateProduitComponent implements OnInit{
  produit: Produit = new Produit();
  fournisseurs: Fournisseur[] = [];
  constructor(private produitService: ProduitService, private fournisseurService:FournisseurService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadFournisseurs();
  }

  loadFournisseurs(): void {
    this.fournisseurService.getFournisseurList().subscribe((data: any) => this.fournisseurs = data);
  }

  saveProduit(){
    this.produitService.createProduit(this.produit).subscribe( (data: any) =>{
      console.log(data);
      this.goToProduitList();
    },
      (    error: any) => console.log(error));
  }

  goToProduitList(){
    this.router.navigate(['/produits']);
  }
  
  onSubmit(){
    console.log(this.produit);
    this.saveProduit();
  }
}
