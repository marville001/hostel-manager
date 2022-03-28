import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  public showSuccessModal: boolean = false;

  @Input()
  public message: string = '';

}
