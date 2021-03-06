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
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id:'11',
        titre: 'Vue ensemble',
        icon: 'fas fa-chart-pie',
        url:''
      },


      {
        id:'2',
        titre: 'Statistique',
        icon: 'fas fa-chart-bar',
        url:'statistiques'
      }


    ]
  },


  {
    id:'2',
    titre: 'Articles',
    icon: 'fas fa-boxes',
    url:'',
    sousMenu: [
      {
        id:'21',
        titre: 'Articles',
        icon: 'fas fa-boxes',
        url:'articles'
      },

      {
        id:'22',
        titre: 'Mouvement du stock',
        icon: 'fab fa-stack-overflow',
        url:'mvtstk'
      }

    ]

  },
  {
    id:'3',
    titre: 'Clients',
    icon: 'fas fa-users',
    url:'',
    sousMenu: [
      {
        id:'31',
        titre: 'Clients',
        icon: 'fas fa-users',
        url:''
      },

      {
        id:'32',
        titre: 'Commande Clients',
        icon: 'fas fa-shopping-basket',
        url:''
      }

    ]

  },
  {
    id:'4',
    titre: 'Fournisseurs',
    icon: 'fas fa-users',
    url:'',
    sousMenu: [
      {
        id:'41',
        titre: 'Fournisseur',
        icon: 'fas fa-users',
        url:''
      },

      {
        id:'42',
        titre: 'Commande Fournisseur',
        icon: 'fas fa-truck',
        url:''
      }

    ]

  },
  {
    id:'5',
    titre: 'Parametrage',
    icon: 'fas fa-cogs',
    url:'',
    sousMenu: [
      {
        id:'51',
        titre: 'Categories',
        icon: 'fas fa-tools',
        url:''
      },

      {
        id:'52',
        titre: 'Utilisateurs',
        icon: 'fas fa-user-cog',
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
