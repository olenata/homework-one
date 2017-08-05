import { Component} from '@angular/core';

@Component({
    selector: 'summary',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class SummaryComponent {
    
    skills = ["PHP", "MySQL", "HTML", "CSS", "jQuery", "Backbone", 
              "Bootstrap", "Ext JS", "Mongo", "CreateJS", "EaselJS"]; 
    other = ["Zend Framework", "Yii", "SVN", "Git", "Behat+Mink+PhantomJS"];
    hobbies = ["photo", "reading books", "cooking", "travel"];
           
    constructor() {

    }

}
