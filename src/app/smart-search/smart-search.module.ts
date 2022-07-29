import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartSearchRoutingModule } from './smart-search-routing.module';
import { FormsModule } from '@angular/forms';
import { SafeUrlIFramePipe } from './pipe/safe-url-iframe.pipe';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SmartSearchRoutingModule,
    NgbModule,
    FormsModule,
  ]
})
export class SmartSearchModule { }
