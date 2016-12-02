import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[square-box]',
  template: `
    <svg:rect
      *ngIf="selected"
      [attr.dataId]="id"
      [attr.x]="x"
      [attr.y]="y"
      width="10"
      height="10"
      stroke="red"
      fill="red"
      strokeWidth="3"></svg:rect>

    <svg:rect
      *ngIf="!selected"
      [attr.dataId]="id"
      [attr.x]="x"
      [attr.y]="y"
      width="10"
      height="10"
      stroke="black"
      fill="transparent"
      strokeWidth="1"></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareBoxComponent {
  @Input() id;
  @Input() x;
  @Input() y;
  @Input() selected;
}
