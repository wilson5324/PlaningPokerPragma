import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'Lobby', loadChildren: () => import('./modules/lobby/lobby.module').then(m => m.LobbyModule) },
  { path: '**', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
