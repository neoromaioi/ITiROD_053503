## Book Wiki

Project about what the book is about and characteristics.
____

# Main page

https://www.figma.com/file/HjKeMOxE39bneY0BSFd1KK/ITIROD2?type=design&node-id=5-293&t=CIVetpg9mlrYtPsc-0
____
![main page](https://github.com/neoromaioi/ITiROD_053503/blob/lab1/Pictures/Main%20page.png)

# Authentification page

https://www.figma.com/file/HjKeMOxE39bneY0BSFd1KK/ITIROD2?type=design&node-id=5-293&t=CIVetpg9mlrYtPsc-0
____
![sign in](https://github.com/neoromaioi/ITiROD_053503/blob/lab1/Pictures/Sign%20in.png)

# Catalog page

https://www.figma.com/file/HjKeMOxE39bneY0BSFd1KK/ITIROD2?type=design&node-id=5-293&t=CIVetpg9mlrYtPsc-0
____
![catalog](https://github.com/neoromaioi/ITiROD_053503/blob/lab1/Pictures/Catalog.png)

# Book page

https://www.figma.com/file/HjKeMOxE39bneY0BSFd1KK/ITIROD2?type=design&node-id=5-293&t=CIVetpg9mlrYtPsc-0
____
![book page](https://github.com/neoromaioi/ITiROD_053503/blob/lab1/Pictures/Book%20page.png)


## Main functions

- Sign in
    Method — "POST"
    Params — username **string**, password **string**
    Returns a response to a user login request
- Get books
    Method — "GET"
    Returns a list of books
- Get books by mark
    Method — "GET"
    Params — mark **number**
    Returns a list of books sorted by user rate
- Get books by genre
    Method — "GET"
    Params — genre **string**
    Returns a list of books belonging to the same genre
- Search book
    Method — "GET"
    Params — Name **string**
    Returns a list of books
- Add book
    Method — "POST"
    Params — Name - **string**, Description - **string**, PublishingHouse - **string**,
    Year - **number**, Pages - **number**, Size - **string**, ISBN - **number**
    Returns the result of the request

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

- Genre info

    - **GenreID** - **number**
    - Name - **string**

- Book info

    - **BookID** - **number**
    - Name - **string**
    - Description - **string**
    - PublishingHouse - **string**
    - Genre - **string**
    - Year - **number**
    - Pages - **number**
    - Size - **string**
    - Author - **string**
    - ISBN - **number**
    - Mark - **number**

- Author info

    - **AuthorID** - **number**
    - Name - **string**