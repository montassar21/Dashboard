import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  barChart!: Chart;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['sep.', 'oct.', 'nov.', 'dec.', 'jan.', 'fev.', 'mars.','avr.','mai.','juin.','juil.','aout.'],
        datasets: [{
          label: 'Layers',
          data: [1, 5, 2, 7, 4, 3, 5,2,6,4,2,1],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}