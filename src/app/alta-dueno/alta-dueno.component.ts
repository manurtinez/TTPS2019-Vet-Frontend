import { Component, OnInit} from '@angular/core';
import { Dueno } from '../models/dueno';
import { DuenoService } from '../services/dueno-service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-dueno',
  templateUrl: './alta-dueno.component.html',
  styleUrls: ['./alta-dueno.component.css']
})

export class AltaDuenoComponent  implements OnInit {
  dueno: Dueno = new Dueno ('', '', '',  null, '');
  constructor(private duenoService: DuenoService, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {  }
  altaDueno() {
    if (this.duenoService.validar(this.dueno)) {
      this.duenoService.agregarDueno(this.dueno).subscribe(
        data => {
          alert('dueno creado con exito');
          this.authenticationService.login(this.dueno.email, this.dueno.password).subscribe(
            success => {
              this.router.navigateByUrl('/home')
            },
            error => {
              alert('hubo algun error al iniciar sesion')
              console.log(error)
            }
          )
        },
        error => {
          alert('error');
          console.log(error);
        }
      );
    } else {
      alert('espacios en blanco');
    }
  }

}
