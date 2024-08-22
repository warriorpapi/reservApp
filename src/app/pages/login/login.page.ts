import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titulo: string = "PAGINA DE LOGIN";
  email: string = ""

  constructor() { }

  ngOnInit() {
  }

}
