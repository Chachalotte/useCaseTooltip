import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseCaseComponent} from './pages/use-case/use-case.component'

const routes: Routes = [
  {  
    path: '',
    redirectTo: 'use-case',
    pathMatch: 'full' 
  },
  {
    path: 'use-case',
    component: UseCaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
