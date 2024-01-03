import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component.y',
  templateUrl: './component.y.component.html',
  styleUrls: ['./component.y.component.scss']
})
export class ComponentYComponent {

  formData: any = {}; // Store form data

  constructor(private router: Router) {}

  navigate() {
    let queryParams = {
      id: this.formData.id,
      label: this.formData.label,
      role: this.formData.role,
      pid: this.formData.pid,
      gid: this.formData.gid
      
    }
    this.router.navigate(['/ComponentZ/' + queryParams.id + '/' + queryParams.label + '/' + queryParams.role + '/' + queryParams.pid + '/' + queryParams.gid]);
  }
}
