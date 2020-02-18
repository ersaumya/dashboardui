import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.scss']
})
export class AreachartComponent implements OnInit {
  chartOptions :{};
  constructor() { }
  Highcharts = Highcharts;
@Input() data=[];
  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Random data'
      },
      subtitle: {
        text: 'Demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits:{
        enabled:false
      },
      exporting:{
        enabled:true
      },
      series: this.data
    };
    HC_exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'))
    },300);
  }

}
