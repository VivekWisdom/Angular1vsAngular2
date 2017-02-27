angular.module('angular1CalendarApp').service('storeService', function() {
  this.clls = [];  

  this.log = function(){console.log("ctrl")}

  this.addCell = function(cell) {
    this.clls.push(cell);
  };

  this.loadState = function() {
    // for(let j = 0; j < 24; j++){
    //   let days: IDay[] = [];
    //   for(let i = 1; i < 32; i++) {
    //     days.push({ day: {
    //         title: 'Oct '+i,
    //         option: j
    //       }
    //     });
    //   }
    //   this.clls.push({days: days, hour: j});
    // }
  

    // return new Observable(observable => {
    //   setTimeout(()=> {
    //     observable.next(this.clls);
    //     observable.complete();
    //   }, 1000);
    // })
  };

  this.newStateData = function() {
    // return new Observable(o => {
    //   setTimeout(()=> {
    //     for(let j = 0; j < 24; j++){
    //       for(let i = 0; i < 31; i++) {
    //         this.clls[j].days[i].day.option = Math.floor(Math.random() * 5);
    //       }
    //     }
        
    //     o.next(this.clls);
    //     o.complete();
    //   }, 1000);
    // });
  };

  this.searchAllCells = function() {
    // for (let i = 0; i < this.clls.length; i++) {
    //   this.clls[i].cellClicked();
    // };
  };

});
