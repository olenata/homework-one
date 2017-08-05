import {Component} from '@angular/core';

@Component({
    selector: 'person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})

export class PersonComponent {
    fullName = "Elena Talpa";
    mobile = "+3 (123) 456 78 90";
    profilePhoto = "./assets/profile.png";
    email = "olena.talpa@gmail.com";
    socialLinks = {'facebook' : 'https://www.facebook.com/olenatalpa',
                   'linkedin' : 'https://www.linkedin.com/in/elena-talpa',
                   'skype' : 'egosteva' 
                  };
    constructor() {
        
    }
}