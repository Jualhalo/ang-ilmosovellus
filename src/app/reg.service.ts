import { Injectable } from '@angular/core';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor() { }

  getRegsFromLS(): Array<Registration> {
    if (localStorage.getItem('regs') === null) {
      const lsregs = [];
      return lsregs;
    }
    else {
      const lsregs = JSON.parse(localStorage.getItem('regs'));
      return lsregs.map(r => new Registration(r.id, r.name, r.email, r.food, r.sauna));
    }
  }

  setRegsToLS(newreg: Registration) {
    let lsregs;
    if (localStorage.getItem('regs') === null) {
      lsregs = [];
    } else {
      lsregs = JSON.parse(localStorage.getItem('regs'));
    }
    lsregs.push(newreg);
    localStorage.setItem('regs', JSON.stringify(lsregs));
  }
}
