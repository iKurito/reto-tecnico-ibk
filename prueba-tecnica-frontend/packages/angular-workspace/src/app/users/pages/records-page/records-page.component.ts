import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { LocalStorageUtil } from 'src/app/utils/local-storage.util';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.sass']
})
export class RecordsPageComponent implements OnInit {
  private localStorageUtil: LocalStorageUtil = new LocalStorageUtil();

  public records: any = this.localStorageUtil.getData();
  
  public img: any;

  constructor() { }

  ngOnInit(): void {
  }

  crearImagen(id: string) {
    html2canvas(document.querySelector(`#card-${id}`) as HTMLElement).then(canvas => {
      this.img = canvas.toDataURL();      
    });
    setTimeout(() => {
      const a = document.querySelector(`#download-${id}`) as HTMLAnchorElement;
      a.click();
    }, 1000)
  }
}
