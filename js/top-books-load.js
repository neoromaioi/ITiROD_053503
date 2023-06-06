/*let marks = [];
let ids = [];
let temp = {};
for(let book of books) {
    marks.push(book.mark);
    ids.push(book.id);
}
for (let i = 0; i < ids.length; i++) {
    temp[ids[i]] = marks[i]
}
marks.sort(function(a, b) {
    return temp[b] - temp[a]
})
let topCounter = 0;
let topMax = 7;
marksKeys = Object.keys(temp);
for (let i = 0; i < temp.length; i++) {
    alert(marksKeys[i]);
}
for(topCounter; topCounter < topMax; topCounter++){
    for(let book of books) {
        if (book.id === Number(marksKeys[topCounter])) {
            //alert(temp[marksKeys[topCounter]]);
            createTopBookItem(book.id, book.name, book.cover);
        }
    }
}*/
const bubbleSort = (coll) => {
    let stepsCount = coll.length - 1;
    // Объявляем переменную swapped, значение которой показывает,
    // был ли совершен обмен элементов во время перебора массива
    let swapped;
    // do..while цикл. Работает почти идентично while
    // Разница в проверке. Тут она делается не до выполнения тела, а после.
    // Такой цикл полезен там, где надо выполнить тело хотя бы раз в любом случае.
    do {
        swapped = false;
        // Перебираем массив и меняем местами элементы, если предыдущий
        // больше, чем следующий
        for (let i = 0; i < stepsCount; i += 1) {
            if (coll[i] > coll[i + 1]) {
                // temp – временная константа для хранения текущего элемента
                const temp = coll[i];
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;
                // Если сработал if и была совершена перестановка,
                // присваиваем swapped значение true
                swapped = true;
            }
        }
        // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
        // в конце массива
        stepsCount -= 1;
    } while (swapped); // продолжаем, пока swapped === true

    return coll;
};

let marks = [];
for(let book of books) {
    marks.push(book.mark);
}
marks = bubbleSort(marks);
marks.reverse();
let topCounter = 0;
let topMax = 7;
for(topCounter; topCounter < topMax; topCounter++){
    for(let book of books) {
        if (book.mark === marks[topCounter]) {
            //alert(temp[marksKeys[topCounter]]);
            createTopBookItem(book.id, book.name, book.cover);
        }
    }
}
function createTopBookItem(id, name, cover){
    const bookRow  = document.getElementsByClassName('top-books__ul')[0];
    let li = document.createElement('li');
    li.className = "top-book__item";
    let a = document.createElement('a');
    a.href = `book_page.html?id=${id}`;
    a.classList.add('link', 'top-book__item__link');
    let img = document.createElement('img');
    img.src = cover;
    img.className = "top-book__item__img";
    let div = document.createElement('div');
    div.className = "top-book__item__title";
    let span = document.createElement('span');
    span.className = "top-book__item__text";
    span.innerText = name;
    div.appendChild(span);
    a.appendChild(img);
    a.appendChild(div);
    li.appendChild(a);
    bookRow.appendChild(li);
}

