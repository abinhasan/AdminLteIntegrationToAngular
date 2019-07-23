import { Component,OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

}
