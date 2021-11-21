import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  menu = ["Overview","Cards","Payments","Repots","Contacts"]
  menu2 = ["Repots","Contacts"]
  credit = 2000
  dateTime = 30
  status = {
    "pay": ["Awaiting","in Progress","completed","Canceled"],
    "count": [8,5,12,4]
  }
  userName = {
    'name' : ['Martin Mitchel','Jane Klamberberg'],
    'transaction': ['3,004.52','1,023.29']
  }
  constructor() { 
  }
  getcrediUsed(){
    return this.credit * 65 /100
  }
  getcreditOnlineUsed(){
    return this.credit * 85 /100
  }
}
