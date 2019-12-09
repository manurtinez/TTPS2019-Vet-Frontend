import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.data.usuario;
  }

}
