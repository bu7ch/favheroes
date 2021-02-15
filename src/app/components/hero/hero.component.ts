import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [],
})
export class HeroComponent implements OnInit {
  @Input() name: string;
  constructor() {}

  ngOnInit(): void {}
}
