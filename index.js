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

// var item = document.querySelectorAll('.list-group-item');
// item[1].style.color = 'red';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//    odd[i].style.backgroundColor = 'green';
//    // even[i].style.backgroundColor = '#f4f4f4';
// }

// TRAVERSING THE DOM

var itemList = document.querySelector('#items');

// PARENTNODE


// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundcolour = '#f4f4f4';

// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundcolour = '#f4f4f4';

// console.log(itemList.parentElement.parentElement.parentElement);
 

//childNode
// console.log(itemList.childNodes);

// //children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild

// console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // lastChild
// console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'green';

// // createElement

// // create a div
var newDiv = document.createElement('div');

// //add class
// newDiv.className = 'Hello';

// //add id
// newDiv.id = 'Hello 1';

// //add attribute
// newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('HEllo');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);