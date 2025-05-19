import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreditService } from '../../../services/credit.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Credit } from '../../../models/credit.model';

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
export class CreditListComponent implements OnInit {
  displayedColumns = ['id', 'amount', 'type', 'status', 'actions'];
  credits$!: Observable<Credit[]>;

  constructor(private creditService: CreditService) {}

  ngOnInit(): void {
    this.credits$ = this.creditService.getAllMortgageCredits; // FIXED: method call
  }
}
