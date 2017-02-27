import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../store.service';


interface Istatus {
  isSearching: boolean,
  searchResults: {
    options:any
  }
}; 

@Component({
  selector: 'calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit {

  /**
   * 
   * 
   * @type {number}
   * @memberOf CalendarCellComponent
   */
  @Input() hour: number;
  @Input() option: number;

  /**
   * 
   * 
   * @type {string}
   * @memberOf CalendarCellComponent
   */
  @Input() day: any;

  /**
   * 
   * 
   * @private
   * @type {boolean}
   * @memberOf CalendarCellComponent
   */
  private isPure:boolean = true;


  /**
   * 
   * 
   * @private
   * 
   * @memberOf CalendarCellComponent
   */
  private status:Istatus = {
    isSearching: false,
    searchResults: {
      options: null
    }
  };

  /**
   * 
   * 
   * @private
   * @type {boolean}
   * @memberOf CalendarCellComponent
   */
  private isSearching:boolean = false;

  /**
   * Creates an instance of CalendarCellComponent.
   * @param {StoreService} store 
   * 
   * @memberOf CalendarCellComponent
   */
  constructor(private store: StoreService) {
    //this.store.addCell({day: this.day, hour: this.hour});
  };

  ngOnInit(){
    //  this.store.addCell({day: this.day, hour: this.hour});
  }

  ngOnChanges(value) {
    // console.log('value', value);
  }
  
  /**
   * 
   * 
   * 
   * @memberOf CalendarCellComponent
   */
  cellClicked():void {
    var alreadySearching = this.status.isSearching;
    this.status.searchResults.options = null;
    this.status.isSearching = !alreadySearching;

    if (!alreadySearching) {
      // Simulate an AJAX request:

      var randomMillis = function() {
        return Math.floor(Math.random() * 500);
      };

      this.isSearching = true;

      setTimeout(() => {
        this.status.isSearching = false;
        this.status.searchResults.options = Math.floor(Math.random() * 5);
      }, randomMillis());
    };
  };

  /**
   * 
   * 
   * @returns {boolean} 
   * 
   * @memberOf CalendarCellComponent
   */
  showSpinner():boolean {
    return this.status.isSearching;
  };

  /**
   * 
   * 
   * @returns {boolean} 
   * 
   * @memberOf CalendarCellComponent
   */
  hideSpinner():boolean {
    return !this.status.isSearching;
  };

  /**
   * 
   * 
   * @returns {boolean} 
   * 
   * @memberOf CalendarCellComponent
   */
  showTime():boolean {
    return !this.status.isSearching && this.status.searchResults.options === null;
  };

  /**
   * 
   * 
   * @returns {boolean} 
   * 
   * @memberOf CalendarCellComponent
   */
  showSearchResults():boolean {
    return !this.status.isSearching && this.status.searchResults.options !== null;
  };

};
