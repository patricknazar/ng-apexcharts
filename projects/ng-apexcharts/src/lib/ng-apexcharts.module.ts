import { NgModule } from '@angular/core';
import { ChartComponent } from './chart/chart.component';

const DECLARATIONS = [
  ChartComponent
];

@NgModule({
  declarations: [
    ...DECLARATIONS,
  ],
  imports: [
  ],
  exports: [
    ...DECLARATIONS
  ]
})
export class NgApexchartsModule { }
