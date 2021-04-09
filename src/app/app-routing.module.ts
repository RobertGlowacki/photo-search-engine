import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultDisplayComponent } from './app/result-display/result-display.component';

const routes: Routes = [
  { path: 'result-component', component: ResultDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
