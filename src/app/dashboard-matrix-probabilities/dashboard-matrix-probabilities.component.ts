import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-matrix-probabilities',
  templateUrl: './dashboard-matrix-probabilities.component.html',
  styleUrls: ['./dashboard-matrix-probabilities.component.css']
})
export class DashboardMatrixProbabilitiesComponent implements OnInit {

  cars: any;

  constructor() {
    this.cars = [
      {
        vin: '0.11',
        year: '0.22',
        brand: '0.33',
        color: '0.44'
      },
      {
        vin: '0.11',
        year: '0.22',
        brand: '0.33',
        color: '0.44'
      },
      {
        vin: '0.11',
        year: '0.22',
        brand: '0.33',
        color: '0.44'
      },
      {
        vin: '0.11',
        year: '0.22',
        brand: '0.33',
        color: '0.44'
      }
    ];
  }

  ngOnInit() {
  }

}
