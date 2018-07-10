import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[];
  items_left: MenuItem[];

  constructor() {
  }


  ngOnInit() {
    this.items_left = [
      {
        label: 'Home',
        icon: 'fa-home',

      },
      {
        label: 'Portafolios',
        icon: 'fa-globe',
        routerLink: '/dashboard/portfolios'
      },
      {
        label: 'Matrices',
        icon: 'fa-th',
        items: [
          {
            label: 'Análisis',
            routerLink: '/dashboard/matrix/analysis'
          },
          {
            label: 'Probabilidades de incumplimiento',
            routerLink: '/dashboard/matrix/probabilities'
          }
        ]
      },
      {
        label: 'Requerimientos',
        icon: 'fa-mobile',
        routerLink: '/dashboard/requirements',
        items: [
          {
            label: 'Distribución de pérdida',
            routerLink: '/dashboard/requirements/loss-distribution',
          },
        ]
      },
      {
        label: 'Correlaciones',
        icon: 'fa-paperclip',
        routerLink: '/dashboard/correlations',
        items: [
          {
            label: 'Análisis',
            routerLink: '/dashboard/correlations/analysis',
          },
        ]
      }
    ];
  }

}
