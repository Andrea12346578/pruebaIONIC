import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() images: {src: string, text: string}[] = [];
  @Input() interval: number = 3000; // Tiempo en milisegundos
  currentIndex: number = 0;
  intervalId: any;
  isVisible: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startLoader();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startLoader(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.interval);
  }
}
