import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule,MaterialModule,FlexLayoutModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule {}
