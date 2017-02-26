import { Component, Input } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent {



  private isPure:boolean = true;
  private status = {
    isSearching: false,
    searchResults: {
      options: null
    }
  };
  private isSearching:boolean = false;


  constructor(private store: StoreService) {
    this.store.addCell(this);
  }

  @Input() hour;
  @Input() day;

  cellClicked() {
    var alreadySearching = this.status.isSearching;
    this.status.searchResults.options = null;
    this.status.isSearching = !alreadySearching;

    if (!alreadySearching) {
      // Simulate an AJAX request:

      this.isSearching = true;

      setTimeout(() => {
        this.status.isSearching = false;
        this.status.searchResults.options = Math.floor(Math.random() * 5);
      }, randomMillis());
    }
  }
  showSpinner() {
    return this.status.isSearching;
  }
  hideSpinner() {
    return !this.status.isSearching;
  }
  showTime() {
    return !this.status.isSearching && this.status.searchResults.options === null;
  }
  showSearchResults() {
    return !this.status.isSearching && this.status.searchResults.options !== null;
  }

}

var randomMillis = function() {
  return Math.floor(Math.random() * 500);
}
