import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SquareBoxComponent } from './square-box/square-box.component';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-root',
  template: `
    <svg width="550" height="550"
      (mousedown)="mouseDown($event)"
      (mousemove)="mouseMove($event)"
      (mouseup)="mouseUp($event)"
      >
      <svg:g
        square-box
        *simpleNgFor="let box of boxes"
        [box]="box"
        ></svg:g>
    </svg>
  `
})
export class AppComponent implements AfterViewInit {

  currentBoxCmp: SquareBoxComponent = null;
  boxes = [];
  offsetX;
  offsetY;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    for (let i=0; i < 5000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = { id, x, y };
      this.boxes.push(box);
    }
  }

  ngAfterViewInit() {
    this.cdRef.detach();
  }

  mouseDown(event) {
    const boxComp = <SquareBoxComponent> event.target['SquareBoxComponent'];
    if (boxComp) {
      const box = boxComp.box;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      this.offsetX = box.x - mouseX;
      this.offsetY = box.y - mouseY;
      this.currentBoxCmp = boxComp;
      boxComp.selected = true;
      boxComp.update();
    }
  }

  mouseMove(event) {
    if (this.currentBoxCmp !== null) {
      this.update(this.currentBoxCmp, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  mouseUp($event) {
    if (this.currentBoxCmp) {
      this.currentBoxCmp.selected = false;
      this.currentBoxCmp.update();
    }
    this.currentBoxCmp = null;
  }

  update(cmp: SquareBoxComponent, x: number, y: number) {
    cmp.box.x = x;
    cmp.box.y = y;
    cmp.update();
  }
}
