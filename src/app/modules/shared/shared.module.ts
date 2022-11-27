import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { HeaderNavBarComponent } from './header-nav-bar/header-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    SideNavBarComponent,
    HeaderNavBarComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class SharedModule { }
