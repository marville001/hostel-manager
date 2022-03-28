import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  public showErrorModal: boolean = false;

  @Input()
  public error: string = '';
}
