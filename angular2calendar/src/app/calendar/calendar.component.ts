import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public days = [];
  public hours = [];
  public isLoaded: boolean = false;


  constructor(private store: StoreService) {
    for(let i = 1; i < 32; i++) {
      this.days.push("Oct " + i)
    }
    for(let i = 0; i < 24; i++) {
        this.hours.push(i)
    }

  }


  load() {
    this.isLoaded = true;
  }


  searchAll() {
    this.store.searchAllCells();
  }


  dayHeaderClicked() {
    alert('dayHeaderClicked()');
  }

  ngOnInit() {
  }

}
