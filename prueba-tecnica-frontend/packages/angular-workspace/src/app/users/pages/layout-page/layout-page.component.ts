import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.sass']
})
export class LayoutPageComponent implements OnInit {
  public showCommits = JSON.parse(environment.showCommits);
  
  constructor() { }

  ngOnInit(): void {
  }

}
