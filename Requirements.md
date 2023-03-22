### Book Wiki
____
![unnormalized database](https://github.com/neoromaioi/SUBD/raw/main/Picture1.png)

## Authentification page
____
![unnormalized database](https://github.com/neoromaioi/SUBD/raw/main/Picture1.png)

## Main page
____
![unnormalized database](https://github.com/neoromaioi/SUBD/raw/main/Picture1.png)

## Book page
____
![unnormalized database](https://github.com/neoromaioi/SUBD/raw/main/Picture1.png)

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
____

## Main functions
____
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
    Params — Name - **string**, Description - **string**, PublishingHouse - **string**, Series - **string**,
    Year - **number**, Pages - **number**, Size - **string**, ISBN - **number**
    Returns the result of the request
- Edit book
    Method — "PUT"
    Params — Name - **string**, Description - **string**, PublishingHouse - **string**, Series - **string**,
    Year - **number**, Pages - **number**, Size - **string**, ISBN - **number**
    Returns the result of the request
- Search book
    Method — "GET"
    Params — Name **string**
    Returns a list of books
____
## Data model description:
____

**Highlighted** fields are primary keys or part of them
- Authencification data

    - username **string**
    - password **string**
- User info

    - **UserID** - **number**
    - Name - **string**
    - Password - **string**
    - Email - **string**
____
- Review info

    - **UserID** - **number**
    - **BookID** - **number**
    - Text - **string**
    - Mark - **number**
____
- Book info

    - **BookID** - **number**
    - Name - **string**
    - Description - **string**
    - PublishingHouse - **string**
    - Series - **string**
    - Year - **number**
    - Pages - **number**
    - Size - **string**
    - ISBN - **number**
____
- Genre info

    - **GenreID** - **number**
    - Name - **string**
____
- Author info

    - **AuthorID** - **number**
    - Name - **string**
    - BirthDate - **string**
    - DeathDate - **string**
    - Description - **string**