import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

const loalFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService{
    
    characters = signal<Character[]>(loalFromLocalStorage());

  saveToLocalStorage = effect(() => {
      //console.log(`Character count ${this.characters().length}`)

      localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(newCharacter: Character){
    //this.characters.set([...this.characters(),newCharacter]) // una opcion pero no la recomendada
    this.characters.update((list) => [...list,newCharacter]);
  }
}