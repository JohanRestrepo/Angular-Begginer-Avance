import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { Character } from '../../interfaces/character.interface';


@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList,CharacterAdd]
})
export class DragonballSuperPageComponent {

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8001},
  ]);

  addCharacter(newCharacter: Character){

    //this.characters.set([...this.characters(),newCharacter]) // una opcion pero no la recomendada
    this.characters.update((list) => [...list,newCharacter]);

  }


  //powerClasses = computed(() => {
  //  return{
  //    'text-danger': true,
  //  }
  //}
  //)

}
