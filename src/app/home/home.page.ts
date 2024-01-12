import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public AuthService: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.AuthService.logout().subscribe(
      () => {
        this.router.navigate(['login']);
      },
      (err) => console.log(err)
    );
  }
}
