import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LectorComponent } from './lector/lector.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'lector', component: LectorComponent },
  { path: '**', redirectTo: '' } // Redirecciona cualquier ruta desconocida al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
