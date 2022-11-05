import { Component, OnInit } from '@angular/core';
import { AlumnosUtl} from '../interfaces/utl.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

 
  regAlumno:AlumnosUtl={
    nombre:'pablo',
    edad:24
}




}
