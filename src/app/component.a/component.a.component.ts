import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterDataService } from '../service/router-data.service';

@Component({
  selector: 'app-component.a',
  templateUrl: './component.a.component.html',
  styleUrls: ['./component.a.component.scss']
})
export class ComponentAComponent {

  formData: any = {}; // Store form data

  constructor(private route: ActivatedRoute, private routerDataService: RouterDataService) {}

  navigate() {
    this.routerDataService.navigateWithData('ComponentC', this.formData);
  }
}
