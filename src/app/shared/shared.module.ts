import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AreachartComponent } from './widgets/areachart/areachart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, AreachartComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule, HighchartsChartModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, AreachartComponent]
})
export class SharedModule {}
