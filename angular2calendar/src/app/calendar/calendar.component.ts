import { Component } from '@angular/core';
import { StoreService, ICell } from '../store.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  public days :string[] = [];
  public hours :number[] = [];
  public isLoaded :boolean = false;

  private cells = []


  constructor(private store: StoreService) {    
    // this.store.loadState().subscribe(r => {
    //   console.log('constructor: ',r);
    //   // this.cells = r;
      
    //   // r.slice(0, 31).forEach(d => this.days.push(d.day));
    //   // for(let j = 0; j < 24; j++) {
    //   //    this.hours.push(j);
    //   // }
    // });
  }


  load():void {
    this.isLoaded = true;
    this.store.loadState().subscribe(r => {
      console.log('constructor: ',r);
      this.cells = r;
      // r.slice(0, 31).forEach(d => this.days.push(d.day));
      // for(let j = 0; j < 24; j++) {
      //    this.hours.push(j);
      // }
    });
  }


  searchAll():void {
    this.store.newStateData().subscribe((r) => {
      this.cells = r;
      console.log(r);
    });
    //this.store.searchAllCells();
  }


  dayHeaderClicked():void {
    alert('dayHeaderClicked()');
  };
}
