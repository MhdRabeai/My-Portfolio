import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },

  { path: 'skills', component: SkillsComponent, data: { animation: 'skills' } },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animation: 'services' },
  },
  { path: 'work', component: WorkComponent, data: { animation: 'work' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' },
  },
  { path: '**', redirectTo: '/', data: { animation: 'home' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
