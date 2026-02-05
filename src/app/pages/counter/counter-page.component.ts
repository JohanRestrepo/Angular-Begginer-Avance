import { Component } from "@angular/core";

@Component({
    templateUrl: './counter.html'
})

export class CounterPageComponent{
    counter = 10;

    increaseBy(value: number){
        this.counter += value;
    }
}