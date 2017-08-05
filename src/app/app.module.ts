import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SummaryComponent} from './app.component'; 
import { PersonComponent} from './person.component'; 

@NgModule({
    declarations: [
        SummaryComponent,
        PersonComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [
        SummaryComponent,
        PersonComponent
    ]
})

export class AppModule {
    
}
