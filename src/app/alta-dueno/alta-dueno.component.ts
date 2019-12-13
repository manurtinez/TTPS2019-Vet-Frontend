import { Component, OnInit} from '@angular/core';
import { Dueno } from '../models/dueno';
import { DuenoService } from '../services/dueno-service';

@Component({
  selector: 'app-alta-dueno',
  templateUrl: './alta-dueno.component.html',
  styleUrls: ['./alta-dueno.component.css']
})

export class AltaDuenoComponent  implements OnInit {
  dueno: Dueno = new Dueno ('', '', '',  null, '');
  constructor(private duenoService: DuenoService) { }

  ngOnInit() {  }
  altaDueno() {
    console.log(this.dueno);
    if (this.duenoService.validar(this.dueno)) {
      this.duenoService.agregarDueno(this.dueno).subscribe(
        data => {
          alert('dueno creado con exito');
          console.log(data);
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
