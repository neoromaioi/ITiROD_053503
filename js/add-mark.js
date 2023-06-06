let auth_user = JSON.parse(sessionStorage.getItem("auth_user"));
const form  = document.getElementsByClassName('send-review-form')[0];
const name = document.getElementsByClassName('book__title__text')[0];
var checkedElemVal;
var elements = document.getElementsByName('rate');
for (var i=0, len=elements.length; i<len; ++i)
{
    if (elements[i].checked)
    {
        checkedElemVal = elements[i].value;
    }
}
if (auth_user) {
    form.addEventListener('submit', function (event) {
        let bookName = name.textContent;
        for (let book of books) {
            if (book.name === bookName) {
                book.markQuant += 1;
                book.markSum += checkedElemVal;
                book.mark += checkedElemVal;
            }
        }
    });
}