import { Component } from '@angular/core';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-fournisseur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-fournisseur.component.html',
  styleUrl: './create-fournisseur.component.css'
})

export class CreateFournisseurComponent {

  fournisseur: Fournisseur = new Fournisseur();
  constructor(private fournisseurService: FournisseurService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveFournisseur(){
    this.fournisseurService.createFournisseur(this.fournisseur).subscribe( (data: any) =>{
      console.log(data);
      this.goToFournisseurList();
    },
      (    error: any) => console.log(error));
  }

  goToFournisseurList(){
    this.router.navigate(['/fournisseurs']);
  }
  
  onSubmit(){
    console.log(this.fournisseur);
    this.saveFournisseur();
  }
}
