import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { SignalsComponent } from './signals/signals.component';
import { EffectComponent } from './effect/effect.component';
import { BindingComponent } from './binding/binding.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DirectivesComponent } from './directives/directives.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DynamicroutingComponent } from './dynamicrouting/dynamicrouting.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'conditions',
    component: ConditionsComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: 'effects',
    component: EffectComponent,
  },
  {
    path: 'bindings',
    component: BindingComponent,
  },
  {
    path: 'todolist',
    component: TodolistComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'routing',
    component: RoutingComponent,
  },
  {
    path: '',
    component: HomeComponent,
    // redirectTo: 'login',
    // pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { name: 'Peter' },
  },
  {
    path: 'dynamicrouting/:id/:name',
    component: DynamicroutingComponent,
  },
  {
    path: 'reactiveforms',
    component: ReactiveformsComponent,
  },
  {
    path: 'templateforms',
    component: TemplateformsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
