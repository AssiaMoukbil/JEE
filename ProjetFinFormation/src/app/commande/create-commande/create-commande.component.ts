import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Client } from '../../client/client';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../client/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-commande',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {
  clients: Client[] = [];
  commandeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commandeService: CommandeService,
    private clientService: ClientService,
    private router: Router
  ) {
    this.commandeForm = this.fb.group({
      client: [''],
      dateCommande: [''],
      ligneDeCommandes: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.clientService.getClientList().subscribe(clients => this.clients = clients);
  }

  createCommande() {
    const commande: Commande = this.commandeForm.value;
    this.commandeService.createCommande(commande).subscribe(
      response => {
        console.log('Commande created successfully', response);
        this.router.navigate(['/commandes']);
      },
      error => {
        console.error('Error creating commande', error);
      }
    );
  }
}
