import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopvarbarComponent } from './topvarbar/topvarbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { SettingsnavbarComponent } from './settingsnavbar/settingsnavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopvarbarComponent, AsidenavbarComponent, SettingsnavbarComponent, FooternavbarComponent]
})
export class LayoutModule { }
