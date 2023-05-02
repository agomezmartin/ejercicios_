import { Routes } from "@angular/router";
import { EmptyComponent } from "./layouts/empty/empty.component";
import { SignInComponent } from "./modules/authentication/sign-in/sign-in.component";
import { SignUpComponent } from "./modules/authentication/sign-up/sign-up.component";
import { RecoverPasswordComponent } from "./modules/authentication/recover-password/recover-password.component";
import { SignOutComponent } from "./modules/authentication/sign-out/sign-out.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { MainBoardComponent } from "./modules/dashboard/main-board/main-board.component";
import { NoAuthenticationGuard } from "./core/guards/no-authentication.guard";
import { AuthenticationGuard } from "./core/guards/authentication.guard";

export const appRoutes: Routes =  [

  //Authentication routers for GUEST
  {
    path:'',
    component: EmptyComponent,
    canActivate:[NoAuthenticationGuard],
    canActivateChild:[NoAuthenticationGuard],
    children: [
      {
        path: 'login',
        component: SignInComponent
      },
      {
        path: 'register',
        component: SignUpComponent
      },
      {
        path: 'recover',
        component: RecoverPasswordComponent
      }
    ]
  },

  //Authentication routers for AUTHENTICATED USERS
  {
    path:'',
    component: EmptyComponent,
    canActivate:[AuthenticationGuard],
    canActivateChild:[AuthenticationGuard],
    children: [
      {
        path: 'logout',
        component: SignOutComponent
      }
    ]
  },

  //Admin routers
  {
    path:'',
    component: DefaultComponent,
    canActivate:[AuthenticationGuard],
    canActivateChild:[AuthenticationGuard],
    children: [
      {
        path: 'dashboard',
        component: MainBoardComponent
      }
    ]
  },

  {path:'', pathMatch:'full', redirectTo:'login'}

]
