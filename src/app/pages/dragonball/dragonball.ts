import { Component, computed, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    //{id: 2, name: 'Vegeta', power: 8001},
    //{id: 3, name: 'Piccollo', power: 3000},
    //{id: 4, name: 'Yamcha', power: 500},
  ]);

  addCharacter(){
    if( !this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter:Character = {
      id:this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    //this.characters.set([...this.characters(),newCharacter]) // una opcion pero no la recomendada

    this.characters.update((list) => [...list,newCharacter]);//la recomendada

    this.resetFields();
  }

  resetFields(){
    this.name.set("");
    this.power.set(0);
  }

  //powerClasses = computed(() => {
  //  return{
  //    'text-danger': true,
  //  }
  //}
  //)

}
