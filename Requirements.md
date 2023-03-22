### Book Wiki


____

## Main page

https://www.figma.com/file/HjKeMOxE39bneY0BSFd1KK/ITIROD2?node-id=0%3A1&t=Hj6gkcISgedn3Obx-1
____
![main page](https://github.com/neoromaioi/ITiROD_053503/blob/lab2/Pictures/Main%20page.png)

## Authentification page

https://www.figma.com/file/HjKeMOxE39bneY0BSFd1KK/ITIROD2?node-id=5%3A153&t=Hj6gkcISgedn3Obx-1
____
![sign in](https://github.com/neoromaioi/ITiROD_053503/blob/lab2/Pictures/Sign%20in.png)

## Catalog page

https://www.figma.com/file/HjKeMOxE39bneY0BSFd1KK/ITIROD2?node-id=5%3A200&t=Hj6gkcISgedn3Obx-1
____
![catalog](https://github.com/neoromaioi/ITiROD_053503/blob/lab2/Pictures/Catalog.png)

## Book page

https://www.figma.com/file/HjKeMOxE39bneY0BSFd1KK/ITIROD2?node-id=5%3A293&t=Hj6gkcISgedn3Obx-1
____
![book page](https://github.com/neoromaioi/ITiROD_053503/blob/lab2/Pictures/Book%20page.png)

1. User roles:
+ default
+ moderator
+ admin
- Default user:
    - authentification
    - leave a review for the book
    - rate the book
- Moderator:
    - delete reviews
    - edit and add books, authors
- Admin:
    - same as moderator and block user


## Main functions

- Sign in
    Method — "POST"
    Params — username **string**, password **string**
    Returns a response to a user login request
- Get books
    Method — "GET"
    Returns a list of books
- Get books by date
    Method — "GET"
    Params — year **number**
    Returns a list of books sorted by newest
- Get books by mark
    Method — "GET"
    Params — mark **number**
    Returns a list of books sorted by user rate
- Get books by genre
    Method — "GET"
    Params — genre **string**
    Returns a list of books belonging to the same genre
- Get books by authors
    Method — "GET"
    Params — authors **string**
    Returns a list of books belonging to the same author
- Get authors
    Method — "GET"
    Returns a list of authors
- Add review
    Method — "POST"
    Params — UserID **number**, BookID - **number**, Text - **string**, Mark - **number**
    Returns the result of the request
- Add book
    Method — "POST"
    Params — Name - **string**, Description - **string**, PublishingHouse - **string**,
    Year - **number**, Pages - **number**, Size - **string**, ISBN - **number**
    Returns the result of the request
- Edit book
    Method — "PUT"
    Params — Name - **string**, Description - **string**, PublishingHouse - **string**,
    Year - **number**, Pages - **number**, Size - **string**, ISBN - **number**
    Returns the result of the request
- Search book
    Method — "GET"
    Params — Name **string**
    Returns a list of books

## Data model description:


**Highlighted** fields are primary keys or part of them
- Authencification data

    - username **string**
    - password **string**
- User info

    - **UserID** - **number**
    - Name - **string**
    - Password - **string**
    - Email - **string**

- Review info

    - **UserID** - **number**
    - **BookID** - **number**
    - Text - **string**
    - Mark - **number**

- Book info

    - **BookID** - **number**
    - Name - **string**
    - Description - **string**
    - PublishingHouse - **string**
    - Year - **number**
    - Pages - **number**
    - Size - **string**
    - ISBN - **number**

- Genre info

    - **GenreID** - **number**
    - Name - **string**

- Author info

    - **AuthorID** - **number**
    - Name - **string**
    - BirthDate - **string**
    - DeathDate - **string**
    - Description - **string**