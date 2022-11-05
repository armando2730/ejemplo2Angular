import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  form=new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required, Validators.minLength(3)]),
  })

  constructor(private formBuilder: FormBuilder) { 

  }
  obtenerErrorNombre(){
    var nom=this.form.get('nombre');
    if(nom?.hasError('required')){
      return 'El campo nosmbre es requerido'
    }
    if(nom?.hasError('minLenght')){
      return 'La longitud minimo es de 3 caracteres'
    }
    return '';
  }
  obtenerErrorPassword(){
    var pass=this.form.get('password');
    if(pass?.hasError('required')){
      return 'El campo password es requerido'
    }
    return '';
  }
  

  //obtenerError(){
   // var nom=this.form.get('nombre');
    //var pass=this.form.get('password');
  //}
  ngOnInit(): void {
  }
guardarUsuario(){
  console.log('Registro guardado');
}
}
