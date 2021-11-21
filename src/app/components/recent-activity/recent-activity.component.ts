import { Component, OnInit } from '@angular/core';
import { faFighterJet, faSearchMinus, faTrafficLight } from '@fortawesome/free-solid-svg-icons';
import {StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit {
  icon = [faFighterJet,faSearchMinus]
  User = this.service.userName
  range = [0,1]
  constructor(private service:StorageService) { }

  ngOnInit(){
    
  }

}
