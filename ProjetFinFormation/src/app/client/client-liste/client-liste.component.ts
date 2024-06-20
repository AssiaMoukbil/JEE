import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-liste',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-liste.component.html',
  styleUrl: './client-liste.component.css'
})
export class ClientListeComponent {
  clients?: Client[] ;
  keyword: string = '';

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(){
    this.clientService.getClientList().subscribe((data: any) => {
      this.clients = data;
    });
  }

  updateClient(idClient: number){
    this.router.navigate(['update-client', idClient]);
  }

  deleteClient(id: number){
    this.clientService.deleteClient(id).subscribe( (data: any) => {
      console.log(data);
      this.getClients();
    })
  }

  searchClients(): void {
    if (this.keyword) {
      this.clientService.searchClients(this.keyword).subscribe((data: any) => {
        this.clients = data;
      });
    } else {
      this.getClients();
    }
  }
}
