import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AllBooksComponent } from './all-books/all-books.component';  
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';


const routes: Routes = [
   { path : "" , component:AdminPanelComponent},
   { path : "all-books", component:AllBooksComponent},
   { path : "header",    component:HeaderComponent},
   { path : "sidebar",   component: SidebarComponent},
   { path : "footer",    component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
