import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logstate: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.logstate = false;

    // tilataan tieto loggautumisesta authServicen getLogstate() -metodilla
    // eli tarkkaillaan koko ajan authServicestä loggautumisen tilaa
    this.auth.getLogstate().subscribe(val => this.logstate = val);
  }

  logOut() {
    this.logstate = false;
    this.auth.isLoggedIn = false;
  }
}
