import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, NgxBootstrapIconsModule, ReactiveFormsModule],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  userEmail = {};

  checkoutForm = this.formBuilder.group({
    email: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    this.userEmail = this.checkoutForm.value; //save in userEmail
    console.warn('Your email has been submitted', this.checkoutForm.value);
    console.log(this.userEmail);
    this.checkoutForm.reset();
  }
}
