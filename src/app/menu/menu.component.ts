import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties : Array<Menu> = [{
    id:'1',
    titre: 'Tableau de bord',
    icon: '',
    url: '',
    sousMenu: [
      {
        id:'11',
        titre: 'Vue ensemble',
        icon: '',
        url:''
      },

      {
        id:'2',
        titre: 'Statistique',
        icon: '',
        url:''
      }

    ]
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
