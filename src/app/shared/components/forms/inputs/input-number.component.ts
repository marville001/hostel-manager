import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html'
})
export class InputNumberComponent implements OnInit {

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
