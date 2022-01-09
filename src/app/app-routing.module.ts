import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewregComponent } from './newreg/newreg.component';
import { LoginComponent } from './login/login.component';
import { ReglistComponent } from './reglist/reglist.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'new', component: NewregComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ReglistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
