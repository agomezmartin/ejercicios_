import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';





@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    RecoverPasswordComponent,
    SignOutComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
