import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  },


  {
    id:'2',
    titre: 'Articles',
    icon: '',
    url:'',
    sousMenu: [
      {
        id:'21',
        titre: 'Articles',
        icon: '',
        url:''
      },

      {
        id:'22',
        titre: 'Mouvement du stock',
        icon: '',
        url:''
      }

    ]

  },
  {
    id:'3',
    titre: 'Clients',
    icon: '',
    url:'',
    sousMenu: [
      {
        id:'31',
        titre: 'Clients',
        icon: '',
        url:''
      },

      {
        id:'32',
        titre: 'Commande Clients',
        icon: '',
        url:''
      }

    ]

  },
  {
    id:'4',
    titre: 'Fournisseurs',
    icon: '',
    url:'',
    sousMenu: [
      {
        id:'41',
        titre: 'Fournisseur',
        icon: '',
        url:''
      },

      {
        id:'42',
        titre: 'Commande Fournisseur',
        icon: '',
        url:''
      }

    ]

  },
  {
    id:'5',
    titre: 'Parametrage',
    icon: '',
    url:'',
    sousMenu: [
      {
        id:'51',
        titre: 'Categories',
        icon: '',
        url:''
      },

      {
        id:'52',
        titre: 'Utilisateurs',
        icon: '',
        url:''
      }

    ]
  }
  ];







  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

    navigate(url?:string):void{
    this.router.navigate([url]);
    }
}
