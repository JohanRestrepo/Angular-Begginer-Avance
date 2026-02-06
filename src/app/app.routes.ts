import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { Dragonball } from './pages/dragonball/dragonball';

export const routes: Routes = [
    {path:'',component:CounterPageComponent},
    {path: 'hero',component:HeroPageComponent},//http:localhost:4200/hero
    {path: 'dragonball',component:Dragonball},//http:localhost:4200/dragonball
    {path: '**',redirectTo:''}//Redireccion por defecto
];
