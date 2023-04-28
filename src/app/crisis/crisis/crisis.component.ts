import { Component } from '@angular/core';
import { CrisisService } from '../service/crisis.service';

@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.css']
})
export class CrisisComponent {

  constructor(private ser:CrisisService)
  {

  }

  list=this.ser.data


}
