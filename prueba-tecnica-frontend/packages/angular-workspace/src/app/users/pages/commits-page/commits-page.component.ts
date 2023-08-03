import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commits-page',
  templateUrl: './commits-page.component.html',
  styleUrls: ['./commits-page.component.sass']
})
export class CommitsPageComponent implements OnInit {
  public showCommits = JSON.parse(environment.showCommits);

  constructor() { }

  ngOnInit(): void {
  }

}
