import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  credit : number | undefined;
  creditUsed : number | undefined;
  creditonlineUsed:number|undefined;
  dateTime:number | undefined;
  titles = ["Credit limity","Online limity"];
  links = ["Money in","Money out"]
  status = this.service.status;
  range = [0,1,2,3]
  constructor (private service:StorageService){ }

  ngOnInit(){
    this.dateTime = this.service.dateTime
    this.credit = this.service.credit
    this.creditUsed = this.service.getcrediUsed() 
    this.creditonlineUsed = this.creditUsed * 95 /100
  }

}
