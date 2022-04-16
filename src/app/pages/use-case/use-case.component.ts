import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-case',
  templateUrl: './use-case.component.html',
  styleUrls: ['./use-case.component.scss'],
  animations: [
    trigger('animation', [
      state('void', style({ opacity: 0, })),
      state('*', style({ opacity: 1, })),
      transition(':enter', animate(`1000ms ease-out`)),
      transition(':leave', animate(`1000ms ease-in`))
    ])
  ]
})
export class UseCaseComponent implements OnInit {

  public action: string = '';
  public message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  callTooltip(action: string, message: string) {

    this.action = action;
    this.message = message;
   
  }

  removeTooltip(){
    this.action = '';
  }

}
