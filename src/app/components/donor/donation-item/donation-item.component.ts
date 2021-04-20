import {Component, Input, OnInit} from '@angular/core';
import { DonorDto } from 'src/app/model/donorDto.model';
import {DonorDataModel} from "../../../model/DonorData.model";

@Component({
  selector: 'app-donation-item',
  templateUrl: './donation-item.component.html',
  styleUrls: ['./donation-item.component.css']
})
export class DonationItemComponent implements OnInit {
  @Input()donor:DonorDto

  constructor() { }

  ngOnInit(): void {
  }

}
