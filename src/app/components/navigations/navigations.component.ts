import { Component, Input, OnInit } from '@angular/core';
import { faCalendarPlus, faCreditCard, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAddressBook, faCog, faHome, faServer} from '@fortawesome/free-solid-svg-icons';
import { fade, listanimation } from 'src/app/animation';
import { StorageService } from 'src/app/service/storage.service';


@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
  animations: [
    fade,
    listanimation 
  ]
})
export class NavigationsComponent implements OnInit {
  @Input() title : string | undefined;
  menus !:any[]
  menusfotter : any[] |undefined;
  icon = [faHome, faCalendarPlus,faCreditCard,faServer,faAddressBook]
  iconfotter = [faCog,faUser]
  constructor(private service:StorageService) {
  
   }
  ngOnInit()
  {
    this.menusfotter = this.service.menu2
    this.menus = this.service.menu
  }

}
