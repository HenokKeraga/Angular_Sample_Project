import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {DonorDto} from "../../../../../model/donorDto.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-donor-dialog',
  templateUrl: './donor-dialog.component.html',
  styleUrls: ['./donor-dialog.component.css']
})
export class DonorDialogComponent implements OnInit {
  submitForm :FormGroup;
  owner: any;
  facebook: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Observable<DonorDto>,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.submitForm=this.fb.group({
      info:[''],
      owner:[''],
      facebook:['']
    })
  }

}

