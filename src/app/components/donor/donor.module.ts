import {NgModule} from "@angular/core";
import {DonorComponent} from "./donor.component";
import {DonationItemComponent} from "./donation-item/donation-item.component";
import {DonationDetailComponent} from "./donation-item/donation-detail/donation-detail.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Routes = [
  {
    path: 'donor', component: DonorComponent,
  },
  {path: 'item', component: DonationItemComponent},
  {path: 'detail', component: DonationDetailComponent}
]

@NgModule({
  declarations: [
    DonorComponent,
    DonationItemComponent,
    DonationDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    DonorComponent
  ],
  providers: [RouterModule]
})
export class DonorModule {

}
