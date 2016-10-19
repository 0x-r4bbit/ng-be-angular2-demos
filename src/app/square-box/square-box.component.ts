import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[square-box]',
  template: `
    <svg:rect
      *ngIf="selected"
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="red"
      fill="red"
      strokeWidth="3"></svg:rect>

    <svg:rect
      *ngIf="!selected"
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="black"
      fill="transparent"
      strokeWidth="1"></svg:rect>
  `
})
export class SquareBoxComponent {
  @Input() box;
  @Input() selected;
}
