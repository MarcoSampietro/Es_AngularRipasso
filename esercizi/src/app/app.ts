import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Es. 1, 2
  nome = 'Marco'
  cognome = 'Sampietro'
  ruolo = 'admin'
  contatore = 0

  aumenta(){
    this.contatore++;
  }
  azzera(){
    this.contatore = 0;
  }
  ColoreContatore(): string {
    if (this.contatore < 10) return 'green';
    else if (this.contatore < 20) return 'orange';
    else return 'red';
  }

  //Es. 3
  numero = 1
  MessaggioErrore = ''

  ControllaNumero(){
    if (this.numero === null || this.numero < 1 || this.numero > 100) {
      this.MessaggioErrore = 'Inserisci un numero tra 1 e 100';
    } else {
      this.MessaggioErrore = '';
    }
  }

  //Es. 4
  caratteri = '';
  maxCaratteri = 10;

  //Es. 5
  testoLive = '';
  testoConfermato = '';

  confermaTesto() {
    this.testoConfermato = this.testoLive;
  }

  //Es. 6
  stato = 'Offline';

  cambiaStato(nuovo: string) {
    this.stato = nuovo;
  }

  //Es. 7
  nuovoElemento = '';
  lista: string[] = [];

  aggiungiElemento() {
    if (this.nuovoElemento.trim()) {
      this.lista.push(this.nuovoElemento.trim());
      this.nuovoElemento = '';
    }
  }

  rimuoviElemento(i: number) {
    this.lista.splice(i, 1);
  }

  //Es. 8
  coloreTesto = 'black';
  dimensione = 16;
  grassetto = false;
  attivo = true;

  cambiaColore(colore: string) {
    this.coloreTesto = colore;
  }

  cambiaDimensione(delta: number) {
    this.dimensione += delta;
  }

  toggleGrassetto() {
    this.grassetto = !this.grassetto;
  }

  toggleAttivo() {
    this.attivo = !this.attivo;
  }
}
