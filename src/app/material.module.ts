import {NgModule} from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [MatMenuModule, MatSidenavModule,
    MatIconModule, MatToolbarModule, MatListModule, MatButtonModule,
    MatCardModule, MatDialogModule, MatFormFieldModule,MatInputModule,MatCheckboxModule],
  exports: [MatMenuModule, MatSidenavModule, MatIconModule,
    MatToolbarModule, MatListModule, MatButtonModule, MatCardModule,
    MatDialogModule, MatFormFieldModule,MatInputModule,MatCheckboxModule]
})
export class MaterialModule {
}
