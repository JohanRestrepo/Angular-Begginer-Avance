import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css'
})

export class HeroPageComponent{
    name = signal('ironman');
    age = signal(45)

    getHeroDescription(){
        return `${this.name()} - ${this.age()}`;
    }

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Ironman');
        this.age.set(45);
    }

    chageAge(){
        this.age.set(60);
    }

    CapitalicedName(){
        const value = this.name();
        return value.charAt(0).toLocaleUpperCase() + value.slice(1);
    }

    
}