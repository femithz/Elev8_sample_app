import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { SupportComponent } from './components/support/support.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'add-todo',
    component: AddTodoComponent
  },
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: "",
    component: HomeComponent
  }, 
  {
    path: "about",
    component: AboutUsComponent
  },
  {
    path: "service",
    component : ServiceComponent
  },
  {
    path: "contact",
    component : ContactComponent
  },
  {
    path : "faq",
    component: FaqComponent
  },
  {
    path: "support",
    component: SupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
