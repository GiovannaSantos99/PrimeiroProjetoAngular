import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pagina/home/home.component';
import { ContatoComponent } from './Pagina/contato/contato.component';
import { ListaComponent } from './Pagina/lista/lista.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: "home", component: HomeComponent},
  {path: "lista", component: ListaComponent},
  {path: "contato", component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
