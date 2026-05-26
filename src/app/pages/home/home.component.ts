import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from '../../components/statistics/statistics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StatisticsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  loading = true;

  ngOnInit(): void {

    // Simulated async API delay
    setTimeout(() => {
      this.loading = false;
    }, 2000);

  }
}