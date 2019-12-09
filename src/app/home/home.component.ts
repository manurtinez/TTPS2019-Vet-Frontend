import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public visible: true;

  public user: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = this.route.snapshot.data.usuario;
  }

  iraPerfil(){
    this.router.navigateByUrl('perfil');
  }

}
