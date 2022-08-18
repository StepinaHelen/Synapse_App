import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InProgressPageComponent } from './inprogress-page.component';



@NgModule({
  declarations: [
    InProgressPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[InProgressPageComponent]
})
export class InProgressPageModule { }
