class dateInput {

  constructor() { 
   this.input = document.querySelector(".input"); 
   this.input.onChange = this.onChange; 
 } 
  onChange(event) { 
   this.inputValue = event.srcElement.value; 
   this.updateTime = new Date(); 
    return this.inputValue; 
  } 
} 
// расчет диапазона времени
class dateRange extends dataInput { 

  constructor() { 
   this.container = document.querySelector('.update-period-items');
  } 

  createItems(period) {
   let dates 	= [], 
       periods 	= [];

	function createPeriod(date) { 
	   let newDate = date; 
	    newDate.year = newDate.year + 1; 
	     return { 
	     start: date, 
	     end: newDate 
	    }; 
	  }

    for (let dt = +period.start; dt < +period.end; dt+= 3600000 * 168) {

		let  date = new Date(dt),
					n   = periods.length, 
					a   = periods.length;  

		switch(date.getDay()) {
      case 1: period= `${date.toLocaleDateString()}` - `${date.setHours(168).toLocaleDateString()}`; 
        break;
      case 2: period[i] = `${date.setHours(-24).toLocaleDateString()}` - `${date.setHours(144).toLocaleDateString()}`; 
        break;
      case 3: period[i] = `${date.setHours(-48).toLocaleDateString()}` - `${date.setHours(120).toLocaleDateString()}`; 
        break;
      case 4: period[i] = `${date.setHours(-48).toLocaleDateString()}` - `${date.setHours(120).toLocaleDateString()}`; 
        break;
      case 5: period[i] = `${date.setHours(-72).toLocaleDateString()}` - `${date.setHours(96).toLocaleDateString()}`; 
        break;
      case 6: period[i] = `${date.setHours(-96).toLocaleDateString()}` - `${date.setHours(72).toLocaleDateString()}`; 
        break;
      case 0: period[i] = `${date.setHours(-120).toLocaleDateString()}` - `${date.setHours(48).toLocaleDateString()}`; 
        break;
    } 
     
    do {   
     b = false; 
     a /= 1.3;

      if (a == 9 || a == 10) {
          a = 11; 
       } else if (a < 1) {
               a = 1;
       } 

        for (let i = 0; i < n-a; i++) {

         if (periods[i] > periods[i+a]) { 
           b = true; 
           let t = periods[i+a]; 
           periods[i+a] = periods[i]; 
           periods[i] = t; 
          }  
         } 
        } while (a > 1 || b); 
     }
     return periods;
  }
 } 

  function renderItems(items) { 
    let element = document.createElement('div'); 
   	this.container.appendChild(element); 
   element.textContent = `Последнее изменение: ${this.updateTime.getDate() + '.' + this.updateTime.getMonth() > 9 '0' + this.updateTime.getMonth() + this.updateTime.getMonth()}`; 

   items.forEach(function(item) { 
    const element = document.createElement('div', {textContent: item}); 
    this.container.appendChild(element); 
  });
 } 

  function onChange() { 
   renderItems(this.createItems(this.createPeriod(this.inputValue))); 
  } 

const range = Object.create(dateRange.prototype); 
range.constructor = range.constructor.bind(range); 
range.constructor(); 
 


