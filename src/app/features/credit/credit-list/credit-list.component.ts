import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreditService } from '../../../services/credit.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-credit-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent {
  displayedColumns = ['id', 'amount', 'type', 'status', 'actions'];
  credits$: any;

  constructor(private creditService: CreditService) {
    this.credits$ = this.creditService.getCredits();
  }
}