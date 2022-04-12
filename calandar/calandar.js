let select = document.querySelector('select');
let mois = document.querySelector('h1');
let para = document.querySelector('.para');

select.onchange = function() {
    var choice = select.value;
    var days = 31;
    if(choice === 'Fevrier') {
       days = 28;
     } else if(choice === 'Avril' || choice === 'Juin' || choice === 'Septembre'|| choice === 'Novembre') {
       days = 30;
     }
   
    createCalendar(days, choice);
   }
   
   function createCalendar(days, choice) {
    para.innerHTML= '';
    mois.textContent = choice;
    for(let i = 1; i <= days; i++) {
       let p = document.createElement('p');
       p.textContent = i;
       para.appendChild(p);
     }
    }
   
   createCalendar(31,'Janvier');