import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss'],
  imports:[IonicModule]
})
export class PropertyFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private modalctrl : ModalController) { }

  ngOnInit() {
  }

}
