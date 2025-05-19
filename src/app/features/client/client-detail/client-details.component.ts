import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ClientService } from '../../../services/client.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {
  private route = inject(ActivatedRoute);
  private clientService = inject(ClientService);

  client$ = this.route.params.pipe(
    map(params => +params['id']),
    switchMap((id: number) => this.clientService.getClientDetails(id))
  );
}