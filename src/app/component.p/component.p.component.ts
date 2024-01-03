import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component.p',
  templateUrl: './component.p.component.html',
  styleUrls: ['./component.p.component.scss']
})
export class ComponentPComponent {

  formData: any = {}; // Store form data

  constructor(private router: Router) {}

  navigate() {

    const navigationExtras = {
      state: {
        data: this.formData
      }
    };

    this.router.navigate(['/ComponentQ'], navigationExtras);
    
  }

}
