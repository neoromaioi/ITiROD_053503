var urls = [];

for(let book of books) {
    urls.push(`book_page.html?id=${book.id}`)
}

document.getElementById("randomBook").addEventListener("click", function(){
    var url = urls[Math.floor(Math.random()*urls.length)]
    this.href = url;
});