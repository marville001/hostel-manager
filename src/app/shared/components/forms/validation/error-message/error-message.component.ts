import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent implements OnInit {
  public showErrorMessage: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  public useNgContent: boolean = false;

  @Input()
  public customMessage: string = '';
}
