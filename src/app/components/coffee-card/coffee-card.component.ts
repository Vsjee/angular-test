import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CoffeeInfo } from 'src/app/models';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule],
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss'],
})
export class CoffeeCardComponent implements OnInit {
  @Input() info: CoffeeInfo | any = {};

  constructor() {}

  ngOnInit(): void {}
}
