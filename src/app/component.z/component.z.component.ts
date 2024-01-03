import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component.z',
  templateUrl: './component.z.component.html',
  styleUrls: ['./component.z.component.scss']
})
export class ComponentZComponent implements OnInit{


  id: any;
  label: any;
  role: any;
  pid: any;
  gid: any;

  navigationDetail: any;

  constructor(private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    this.label = this.route.snapshot.paramMap.get('label');
    this.role = this.route.snapshot.paramMap.get('role');
    this.pid = this.route.snapshot.paramMap.get('pid');
    this.gid = this.route.snapshot.paramMap.get('gid');
  }

  ngOnInit(){

    this.navigationDetail= {
      'id': this.id,
      'label' : this.label,
      'role' : this.role,
      'pid' : this.pid,
      'gid' : this.gid    
    }
  }

}
