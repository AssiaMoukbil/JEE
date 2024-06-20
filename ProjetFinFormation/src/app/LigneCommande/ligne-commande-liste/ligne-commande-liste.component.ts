import { Component } from '@angular/core';
import { LigneCommande } from '../ligne-commande';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../../commande/commande.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ligne-commande-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ligne-commande-liste.component.html',
  styleUrl: './ligne-commande-liste.component.css'
})
export class LigneCommandeListeComponent {
  ligneCommandes: LigneCommande[] = [];
  id: number = 0;

  constructor(private CommandeService: CommandeService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getLigneCommandes(this.id);
  }

  private getLigneCommandes(id:number){
    this.CommandeService.getLigneDeCommandes(id).subscribe((data: any) => {
      this.ligneCommandes = data;
    });
  }

  ajouterLDC(id: number){
    this.router.navigate(['ajouterLDC', id]);
  }

}
