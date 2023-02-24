// getelementbyclassname

// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);

// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'green'

// // items[1].style.fontWeight = 'bold';
// // items[2].style.fontWeight = 'bold';
// // items[3].style.fontWeight = 'bold';
// // items[4].style.fontWeight = 'bold';


// for(var i=0; i<items.length; i++){
//    items[i].style.backgroundColor = 'green';
//    items[i].style.fontWeight = 'bold';
// }

// // getelelmntTagName

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// for(var i = 0; i < li.length; i++){
//    li[i].style.backgroundColor = 'green';
//    li[i].style.fontWeight = 'bold';
// }

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
// Choose all the odd elements and make their background green using QuerySelectorALL﻿

var item = document.querySelectorAll('.list-group-item');
item[1].style.color = 'red';

var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
   odd[i].style.backgroundColor = 'green';
   // even[i].style.backgroundColor = '#f4f4f4';
}