import {NgModule} from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports:[MatMenuModule,MatSidenavModule,MatIconModule,MatToolbarModule,MatListModule,MatButtonModule,MatCardModule],
  exports:[MatMenuModule,MatSidenavModule,MatIconModule,MatToolbarModule,MatListModule,MatButtonModule,MatCardModule]
})
export class MaterialModule {
}
