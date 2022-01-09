import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';
import { Registration } from '../registration';

@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.component.html',
  styleUrls: ['./reglist.component.css']
})
export class ReglistComponent implements OnInit {
  regs: Array<Registration>;

  constructor(private regService: RegService) { }

  ngOnInit(): void {
    this.regs = this.regService.getRegsFromLS();
  }

}
