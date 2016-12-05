import { Component, OnInit, Input, ChangeDetectorRef, ElementRef, ViewChild, AfterViewInit, Directive } from '@angular/core';

@Component({
  selector: '[square-box]',
  template: `
    <svg:rect
      *ngIf="selected"
      #rect
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="10"
      height="10"
      stroke="red"
      fill="red"
      strokeWidth="3"></svg:rect>

    <svg:rect
      *ngIf="!selected"
      #rect
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="10"
      height="10"
      stroke="black"
      fill="transparent"
      strokeWidth="1"></svg:rect>
  `
})
export class SquareBoxComponent implements AfterViewInit {
  @Input() box;
  selected = false;

  @ViewChild('rect')
  set rect(value: ElementRef) {
    if (value) {
      value.nativeElement['SquareBoxComponent'] = this;
    }
  }

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdRef.detach();
  }

  update() {
    this.cdRef.detectChanges();
  }
}
