import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
})
export class IconCardComponent  implements OnInit {

  @Input() icon!: string;   
  @Input() label!: string;
  @Input() route!: string;      // Base route
  @Input() param?: string;      // Optional ID / param
  @Output() cardClick = new EventEmitter<void>();
  constructor(private router:Router) { }

  ngOnInit() {}
  navigate() {

    if (this.cardClick.observers.length) {
      this.cardClick.emit();
      return;
    }
  if (this.route) {
    if (this.param) {
      this.router.navigate([this.route, this.param]);
    } else {
      this.router.navigate([this.route]);
    }
  }
}

}
