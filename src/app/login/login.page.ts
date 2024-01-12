import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public AuthService : AuthService , public router:Router) {
    this.AuthService.logged().subscribe(
      data =>{
        if (data != null) this.router.navigate(['home']);
      },
      err => console.log(err)
    )
  }

  ngOnInit() {
  }

}
