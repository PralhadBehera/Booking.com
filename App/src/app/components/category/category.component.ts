import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setupIncrementDecrement();
  }

  private setupIncrementDecrement(): void {
    document.querySelectorAll('.increment').forEach((button: HTMLButtonElement) => {
      button.addEventListener('click', (event: MouseEvent) => {
        const input = event.target ? (event.target as HTMLButtonElement).previousElementSibling : null;
        if (input instanceof HTMLInputElement) {
          input.value = (parseInt(input.value) + 1).toString();
        }
      });
    });

    document.querySelectorAll('.decrement').forEach((button: HTMLButtonElement) => {
      button.addEventListener('click', (event: MouseEvent) => {
        const input = event.target ? (event.target as HTMLButtonElement).nextElementSibling : null;
        if (input instanceof HTMLInputElement && parseInt(input.value) > 0) {
          input.value = (parseInt(input.value) - 1).toString();
        }
      });
    });
  }

}
