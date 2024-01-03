import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterDataService {

  private routerData: any;

  constructor(private router: Router) { }

  setData(data: any) {
    this.routerData = data;
  }

  getData() {
    return this.routerData;
    // clearData();
  }

  clearData() {
    this.routerData = null;
  }

  navigateWithData(targetComponent: string, data: any) {
    this.setData(data);
    this.router.navigate([targetComponent]);
  }
}
