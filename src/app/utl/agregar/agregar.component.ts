import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

 //@Input() alumnosUtl:AlumnosUtl[]=[];


 //@Output() onNuevoAlumno: EventEmitter<AlumnosUtl>= new EventEmitter();
 
@Input() regAlumno:AlumnosUtl={
  nombre:'',
  edad:0
}

constructor(private alumnosutl:UtlService){

}
  agregar(){
   // console.log(this.regAlumno);
    //this.alumnosUtl.push(this.regAlumno);
    //this.onNuevoAlumno.emit(this.regAlumno);
    this.alumnosutl.agregarNuevoAlumno(this.regAlumno);
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }

}
