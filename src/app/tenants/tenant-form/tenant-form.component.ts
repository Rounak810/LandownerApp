import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.scss'],
  imports:[IonicModule,CommonModule,ReactiveFormsModule]
})
export class TenantFormComponent implements OnInit {

  @Input() tenant: any | null = null;
@Output() close = new EventEmitter<void>();
@Output() save = new EventEmitter<any>();

form!: FormGroup;

ngOnInit() {
  this.form = new FormGroup({
    id: new FormControl(this.tenant?.id),
    name: new FormControl(this.tenant?.name || '', Validators.required),
    email: new FormControl(this.tenant?.email || ''),
    phone: new FormControl(this.tenant?.phone || '')
  });
}

submit() {
  if (this.form.valid) {
    this.save.emit(this.form.value);
  }
}


  
}
