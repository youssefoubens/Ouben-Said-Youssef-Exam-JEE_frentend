import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CreditService } from '../../../services/credit.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {
  creditTypes: any[] = [];
  creditForm: any;

  constructor(
    private fb: FormBuilder,
    private creditService: CreditService,
    private router: Router
  ) { }

  ngOnInit() {
    this.creditTypes = this.creditService.getCreditTypes();
    
    this.creditForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1000)]],
      duration: ['12', Validators.required],
      type: ['PERSONAL', Validators.required],
      motive: [''],
      propertyType: [''],
      companyName: ['']
    });
  }

  onSubmit() {
    if (this.creditForm.valid) {
      this.creditService.createCredit(this.creditForm.value)
        .subscribe(() => this.router.navigate(['/credits']));
    }
  }
}