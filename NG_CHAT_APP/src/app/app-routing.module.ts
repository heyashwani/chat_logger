import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"chat-system",
    loadChildren:()=>import('./chat/chat.module').then(m=>m.ChatModule)
  },
  {
    path:"logger-system",
    loadChildren:()=>import('./logger/logger.module').then(m=>m.LoggerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
