import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public required: boolean = false;

  @Input()
  public placeholder = '';

  @Input()
  public controlName = '';

}
