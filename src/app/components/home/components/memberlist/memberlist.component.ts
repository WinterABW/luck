import { NgStyle } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-memberlist',
  standalone: true,
  imports:[NgStyle],
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss'],
})

export class MemberlistComponent implements OnInit, OnDestroy {
  userlist: any[] = [];
  displayList: any[] = []; // Lista para mostrar en la interfaz
  currentOffset: number = 0; // Desplazamiento actual de la lista
  intervalId: any; // ID del intervalo

  constructor() {
    this.generateUserList();
  }

  ngOnInit() {
    // Duplica la lista para el efecto de desplazamiento infinito
    this.displayList = [...this.userlist, ...this.userlist];
    this.intervalId = setInterval(() => {
      this.scrollList();
    }, 3000); // Cambia cada 3 segundos, ajusta según tus necesidades
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  generatePhoneNumber(): number {
    return Math.floor(Math.random() * 9000) + 1000; // Número de 4 dígitos
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 200) + 1;
  }

  generateUserList() {
    for (let i = 1; i <= 5; i++) {
      this.userlist.push({
        id: i,
        phoneNumber: this.generatePhoneNumber(),
        randomNumber: this.generateRandomNumber(),
      });
    }
  }

  scrollList() {
    // Mueve el desplazamiento hacia arriba
    this.currentOffset -= 40; // Ajusta la cantidad de desplazamiento
    if (Math.abs(this.currentOffset) >= 40) {
      // Resetea el desplazamiento y elimina el primer elemento
      this.currentOffset = 0;
      this.displayList.shift(); // Elimina el primer elemento para simular el desplazamiento
      // Agrega un nuevo usuario al final de la lista
      this.displayList.push({
        id: this.displayList.length + 1,
        phoneNumber: this.generatePhoneNumber(),
        randomNumber: this.generateRandomNumber(),
      });
    }
  }
}