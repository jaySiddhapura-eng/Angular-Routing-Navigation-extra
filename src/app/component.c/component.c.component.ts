import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterDataService } from '../service/router-data.service';

@Component({
  selector: 'app-component.c',
  templateUrl: './component.c.component.html',
  styleUrls: ['./component.c.component.scss']
})
export class ComponentCComponent {
  receivedRouterData: any;

  constructor(private route: ActivatedRoute, private routerDataService: RouterDataService) {}

  ngOnInit() {
    this.receivedRouterData = this.routerDataService.getData();   // Retrieve data from the data service
    console.warn(this.receivedRouterData);
    this.receivedRouterData.clearData();
  }
}
