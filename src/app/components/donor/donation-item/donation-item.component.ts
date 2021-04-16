import {Component, Input, OnInit} from '@angular/core';
import {DonorDataModel} from "../../../model/DonorData.model";

@Component({
  selector: 'app-donation-item',
  templateUrl: './donation-item.component.html',
  styleUrls: ['./donation-item.component.css']
})
export class DonationItemComponent implements OnInit {
  @Input()donor:DonorDataModel

  constructor() { }

  ngOnInit(): void {
  }

}
