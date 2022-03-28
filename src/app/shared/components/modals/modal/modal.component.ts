import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  public showModal: boolean = false;

  @Input()
  public vposition: string = "center";

  @Input()
  public hposition: string = "center";
}
