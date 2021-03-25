import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AllBooksComponent } from './all-books/all-books.component';



const routes: Routes = [
   { path : "" , component:AdminPanelComponent},
   { path : "all-books" , component:AllBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
