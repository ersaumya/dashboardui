import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostComponent } from 'src/app/modules/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardService } from 'src/app/modules/dashboard.service';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostComponent],
  imports: [CommonModule, RouterModule, SharedModule, MaterialModule,FlexLayoutModule],
  providers: [DashboardService ]
})
export class DefaultModule {}
