import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton,IonIcon,IonButtons} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  imports:[IonicModule]
})
export class BackButtonComponent  implements OnInit {
  @Input() fallbackRoute?: string
  constructor(private location : Location,
    private router : Router) { }

  ngOnInit() {}

  goBack(){
    if(this.fallbackRoute){
      this.router.navigate([this.fallbackRoute]);
      return
    }
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}
