import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visible = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.user = this.route.snapshot.data.usuario;
  }

  iraPerfil(){
    this.router.navigateByUrl('perfil');
  }

}
