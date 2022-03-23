import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-textarea',
  templateUrl: './input-textarea.component.html',
})
export class InputTextareaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  public required: boolean = false;

  @Input()
  public placeholder = '';

  @Input()
  public controlName = '';

  @Input()
  public rows: number = 4;
}
