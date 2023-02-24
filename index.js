// getelementbyclassname

var items = document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[1]);

// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'green'

// // items[1].style.fontWeight = 'bold';
// // items[2].style.fontWeight = 'bold';
// // items[3].style.fontWeight = 'bold';
// // items[4].style.fontWeight = 'bold';


for(var i=0; i<items.length; i++){
   items[i].style.backgroundColor = 'green';
   items[i].style.fontWeight = 'bold';
}

// getelelmntTagName

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

for(var i = 0; i < li.length; i++){
   li[i].style.backgroundColor = 'green';
//    li[i].style.fontWeight = 'bold';
}

