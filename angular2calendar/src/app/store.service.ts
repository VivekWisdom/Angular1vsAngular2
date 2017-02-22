import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  private cells = [];

  constructor() { }

  public addCell(cell) {
    this.cells.push(cell);
  }

  searchAllCells() {
    for (var i=0; i<this.cells.length; i++) {
      this.cells[i].cellClicked();
    }
  }
}
