import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css',
    imports: [UpperCasePipe]
})

export class HeroPageComponent{
    name = signal('ironman');
    age = signal(45)

    heroDescription = computed(()=> {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    }
    )

    capitalizedName = computed(()=> this.name().toUpperCase())

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