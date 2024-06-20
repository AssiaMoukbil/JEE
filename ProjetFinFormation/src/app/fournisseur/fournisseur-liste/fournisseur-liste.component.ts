import { Component } from '@angular/core';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fournisseur-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fournisseur-liste.component.html',
  styleUrl: './fournisseur-liste.component.css'
})
export class FournisseurListeComponent {

  fournisseurs?: Fournisseur[] ;

  constructor(private fournisseurService: FournisseurService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFournisseurs();
  }

  private getFournisseurs(){
    this.fournisseurService.getFournisseurList().subscribe((data: any) => {
      this.fournisseurs = data;
    });
  }

  updateFournisseur(idFournisseur: number){
    this.router.navigate(['update-fournisseur', idFournisseur]);
  }

  deleteFournisseur(id: number){
    this.fournisseurService.deleteFournisseur(id).subscribe( (data: any) => {
      console.log(data);
      this.getFournisseurs();
    })
  }
}
