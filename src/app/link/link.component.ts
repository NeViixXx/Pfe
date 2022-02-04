import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  x:number=21;
  tab:number[]=[1,2,3,4];

  pair(x:number){
    if(this.tab[x]/2==0){
      return true;
    }return false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
