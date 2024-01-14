import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerRoutingModule } from './logger-routing.module';
import { LoggerComponent } from './logger/logger.component';


@NgModule({
  declarations: [
    LoggerComponent
  ],
  imports: [
    CommonModule,
    LoggerRoutingModule
  ]
})
export class LoggerModule { }
