import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DonorService} from "../../../../services/donor.service";
import {DonorDto} from "../../../../model/donorDto.model";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {DonorDialogComponent} from "./donor-dialog/donor-dialog.component";

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.css']
})
export class DonationDetailComponent implements OnInit {
  id: number
  donorDetail: Observable<DonorDto>

  constructor(private activatedRoute: ActivatedRoute, private donorService: DonorService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = +data.get('id')
    })
    console.log('id ::', this.id)
    this.donorDetail = this.donorService.getDonorById(this.id);
  }


  openDialog() {
    this.dialog.open(DonorDialogComponent, {
      data: this.donorDetail
    });
  }
}
