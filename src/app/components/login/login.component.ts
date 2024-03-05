import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  tabIndex = 0;
  remember_session = false;
  public user: User;

  constructor(private router: Router, private loginService: LoginService) {
    this.user = new User();
  }

  login() {
    // TODO
    console.log('SESION INICIADA');
    this.router.navigate(['/conferencia']);
  }

  validateLogin() {
    // if (this.user.username && this.user.password) {
    //   this.loginService.validateLogin(this.user).subscribe(
    //     (result) => {
    //       console.log('result is ', result);
    //     },
    //     (error) => {
    //       console.log('error is ', error);
    //     }
    //   );
    // } else {
    //   alert('enter user name and password');
    // }
  }

  signUp() {
    // TODO
    console.log('REGISTRADO');
  }

  keepSession() {
    // TODO
    console.log('RECORDAR SESION:', this.remember_session);
  }

  changeTab() {
    this.tabIndex = (this.tabIndex + 1) % 2;
  }
}
