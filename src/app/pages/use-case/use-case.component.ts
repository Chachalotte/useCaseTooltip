import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-case',
  templateUrl: './use-case.component.html',
  styleUrls: ['./use-case.component.scss']
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
    console.log('OK');
  }

  removeTooltip(){
    this.action = '';
  }

}
