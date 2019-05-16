// Moving 'cheese' to 'eggs'
let a = ['bread', 'cheese', 'toast', 'ham', 'eggs', 'muffin', 'beans'];
let dragIndex = 1;
let hoverIndex = 4;
let dragItem = a.splice(dragIndex, 1)[0];
a
dragItem
a.splice(hoverIndex, 0, dragItem)
a
