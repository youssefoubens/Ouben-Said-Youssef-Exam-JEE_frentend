import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client.model';
import { CreditSummary } from '../../../models/credit-summary.model';

// Import Angular Material modules
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';  // <-- Add this
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  standalone: true,  // add if you are using standalone components
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatListModule  // <-- Add this here
  ]
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  selectedClient: Client | null = null;
  credits: CreditSummary[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe((data) => {
      this.clients = data;
    });
  }

  viewClientDetails(client: Client): void {
    this.selectedClient = client;
    this.clientService.getClientCredits(client.id).subscribe((data) => {
      this.credits = data;
    });
  }

  clearSelection(): void {
    this.selectedClient = null;
    this.credits = [];
  }
}
