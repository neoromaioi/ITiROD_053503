//import {Book, books} from './data.js'

const form  = document.getElementsByClassName('creation__book__form')[0];
const pHouse = document.getElementById('publishingHouse');
const size = document.getElementById('size');
const pages = document.getElementById('pages');
const isbn = document.getElementById('isbn');
const genre = document.getElementById('genre');
const title = document.getElementById('bookTitle');
const author = document.getElementById('bookAuthor');
const year = document.getElementById('bookYear');
const description = document.getElementById('bookDescription');
const cover = document.getElementById('bookCover');

form.addEventListener('submit', function (event) {
    let lastIdBook = books[books.length - 1];
    let lastId = lastIdBook.id + 1;
    let coverName = extractFilename(cover.value);
    //var book = new Book(lastId, title.value, `/images/book_covers/${coverName}`, [genre.value], year.value, pHouse.value, size.value, Number(pages.value), isbn.value, 0, 0, 0, [author.value], description.value)
    //books.push(book);
    let bookk = new Book(8, 'Диалоги', "images/book_covers/Plato's_dialogues.jpg", ['Philosophy'], '5-4вв. до Р.Х.', 'АСТ', '180x115x26 мм', 352, '978-5-17-137996-4', 0, 0, 0, ['Платон'],
            "Апология Сократа (др.-греч. Ἀπολογία Σωκράτους) — одно из наиболее ранних произведений Платона, которое содержит три речи Сократа во время суда. Действие разворачивается в начале 399 года до н. э. На философа подали в суд за неуважение к богам, создание новых божеств и развращение юношества. Инициатором судебного преследования был влиятельный политик Древних Афин Анит. Роль официального обвинителя отводилась Мелету." +
            "В «Апологии» не приведена обвинительная речь, но воспроизведена речь Сократа. После выслушивания сторон проводилось тайное голосование судей. Как отмечают античные и современные авторы, речь Сократа была непрактичной. Вместо того, чтобы, по примеру других афинян, взывать к милосердию, привести жену и детей, которые своим плачем должны разжалобить судей, Сократ был преисполнен достоинства. В этом произведении прозвучало утверждение философа о том, что он самый умный из людей, так как «знает, что ничего не знает». Сократа признали виновным 281 голосами против 220. После обвинительного приговора обвинитель и обвиняемый должны были предложить наказание, а судьи выбирали из двух альтернативных вариантов. Обвинители выступали за смертную казнь. Сократ заявил, что считает себя невиновным и заслуживает наивысшей почести Афин — бесплатного обеда в пританее. Однако, раз того требует обычай, он предложил заменить смерть штрафом в 30 мин. Суд присудил философа к смерти, после чего Сократ произнёс третью речь." +
            "В научной литературе существуют различные мнения относительно достоверности передачи Платоном слов Сократа во время суда. Платон, хоть и присутствовал на процессе, мог приписать учителю те или иные утверждения. Этим он старался достичь двух целей — создать соответствующий образ учителя и опровергнуть обвинения Поликрата в «Обвинении Сократа» около 393 года до н. э. Вне зависимости от отношения к достоверности «Апологии» большинство исследователей, включая Сёрена Кьеркегора, Ульриха фон Виламовица-Мёлендорфа, Карла Поппера и других знаменитых учёных, отмечали высокий художественный уровень сочинения, который помог и во многом повлиял на создание соответствующего образа «идеального философа» Сократа.")
    books.push(bookk);
    
    //alert(books[books.length - 1].name);
});

function extractFilename(path) {
    let x;
    x = path.lastIndexOf('\\');
    if(x>=0)
    {
        return path.substring(x+1);
    }
    return path;
}