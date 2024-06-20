import { Component } from '@angular/core';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commande-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commande-liste.component.html',
  styleUrl: './commande-liste.component.css'
})
export class CommandeListeComponent {
  commandes?: Commande[] ;

  constructor(private commandeService: CommandeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }

  private getProduits(){
    this.commandeService.getCommandeList().subscribe((data: any) => {
      this.commandes = data;
    });
  }
  voirCommande(idCommande: number){
    this.router.navigate(['voirCommande', idCommande]);
  }

}
