import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface IDay {
  day: {
    title: string;
    option: number;
  }
}
export interface ICell {
  hours: IDay[];
}

@Injectable()
export class StoreService {
  private clls = [];

  constructor() { }

  public addCell(cell) {
    this.clls.push(cell);
  }

  loadState(): Observable<ICell[]> {
    for(let j = 0; j < 24; j++){
      let days: IDay[] = [];
      for(let i = 1; i < 32; i++) {
        days.push({ day: {
            title: 'Oct '+i,
            option: j
          }
        });
      }
      this.clls.push({days: days, hour: j});
    }
  

    return new Observable(observable => {
      setTimeout(()=> {
        observable.next(this.clls);
        observable.complete();
      }, 1000);
    })
  }

  newStateData(): Observable<any>{
    return new Observable(o => {
      setTimeout(()=> {
        for(let j = 0; j < 24; j++){
          for(let i = 0; i < 31; i++) {
            this.clls[j].days[i].day.option = Math.floor(Math.random() * 5);
          }
        }
        
        o.next(this.clls);
        o.complete();
      }, 1000);
    });
  }

  searchAllCells() {
    for (let i = 0; i < this.clls.length; i++) {
      this.clls[i].cellClicked();
    }
  }
}