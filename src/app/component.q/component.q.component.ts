import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component.q',
  templateUrl: './component.q.component.html',
  styleUrls: ['./component.q.component.scss']
})
export class ComponentQComponent implements OnInit{

  navigationData: any;

  constructor(private route: ActivatedRoute, private router : Router) {
    this.navigationData = router.getCurrentNavigation()?.extras.state;
    console.warn(this.navigationData);
  }

  ngOnInit() {
    //
  }
}
