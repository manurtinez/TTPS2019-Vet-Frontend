import { Component, OnInit} from '@angular/core';
import { Dueno } from '../models/dueno';
import { DuenoService } from '../services/dueno-service';

@Component({
  selector: 'app-alta-dueno',
  templateUrl: './alta-dueno.component.html',
  styleUrls: ['./alta-dueno.component.css']
})

export class AltaDuenoComponent  implements OnInit {
  dueno: Dueno = new Dueno ('', '', '', '', 0);
  constructor(private duenoService: DuenoService) { }

  ngOnInit() {  }
  altaDueno() {
    console.log(this.dueno);
    this.duenoService.agregarDueno(this.dueno).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
