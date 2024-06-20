import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {
  client: Client = new Client();
  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveClient(){
    this.clientService.createClient(this.client).subscribe( (data: any) =>{
      console.log(data);
      this.goToClientList();
    },
      (    error: any) => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/clients']);
  }
  
  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }
}
