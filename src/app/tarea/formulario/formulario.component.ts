import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  numero: string ='';
  esCapicua: boolean = false;

  borrarNumero(){
    this.numero = '';
  }
  numerosCapicua(){
    const numeroAlReves = this.numero.split('').reverse().join('');
    this.esCapicua = this.numero === numeroAlReves;
  }
}
