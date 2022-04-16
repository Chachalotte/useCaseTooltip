import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  
})
export class TooltipComponent implements OnInit, OnChanges {

  @Input() action: string = '';
  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  

  ngOnChanges(): void {

  }

}
