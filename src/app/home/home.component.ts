import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { MascotaService } from '../services/mascota-service';
import { Mascota } from '../models/mascota';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visible = false;
  public ultimasMascotas: Mascota[];
  constructor(private route: ActivatedRoute, private mascotaservice: MascotaService, private router: Router) { }

  ngOnInit() {
    //this.user = this.route.snapshot.data.usuario;
    this.mascotaservice.ultimasMascotas().subscribe(
      data => {
        this.ultimasMascotas = data;
        console.log(this.ultimasMascotas);
      },
      error => {
        console.error(error);
      }
    );
  }

  iraPerfil(){
    this.router.navigateByUrl('perfil');
  }

}
