import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8001},
    {id: 3, name: 'Piccollo', power: 3000},
    {id: 3, name: 'Yamcha', power: 500},
  ]);

  powerClasses = computed(() => {
    return{
      'text-danger': true,
    }
  }
)

}
