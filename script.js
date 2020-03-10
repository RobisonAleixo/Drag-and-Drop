const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

list_items.forEach((item, itemIndex) => {

    item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => item.style.display = 'none', 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    lists.forEach((list, listIndex) => {

        list.addEventListener('dragover', e => e.preventDefault());
        list.addEventListener('drop', () => {
            list.append(draggedItem);
        });

    });

});
