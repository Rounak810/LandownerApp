import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { BackButtonComponent } from 'src/generic-components/back-button/back-button.component';
@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,BackButtonComponent],
})
export class MyPropertiesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
