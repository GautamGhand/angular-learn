import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { SignalsComponent } from './signals/signals.component';
import { EffectComponent } from './effect/effect.component';
import { BindingComponent } from './binding/binding.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DirectivesComponent } from './directives/directives.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
