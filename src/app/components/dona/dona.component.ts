import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';
 

 @Input ('labels') doughnutChartLabels: Label[] = ['Labels1', 'Labels2', 'Labels3'];
 @Input ('data') doughnutChartData: MultiDataSet = [
     [350, 450, 100],
   ];

   public colors: Colors[] = [ 
     { backgroundColor: [ '#6857E6','#009FEE','#F02059' ] }
   ];


}
