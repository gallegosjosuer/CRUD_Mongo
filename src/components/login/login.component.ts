import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  tabIndex = 0;

  login() {
    // TODO
    console.log('SESION INICIADA');
  }

  signUp() {
    // TODO
    console.log('REGISTRADO');
  }

  changeTab() {
    this.tabIndex = (this.tabIndex + 1) % 2;
  }
}
