import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-email',
  templateUrl: './input-email.component.html',
})
export class InputEmailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  public required: boolean = false;

  @Input()
  public placeholder = '';

  @Input()
  public controlName = '';
}
