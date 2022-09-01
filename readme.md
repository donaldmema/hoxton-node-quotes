# Getting started

If you go to [http://localhost:3333/quotes](http://localhost:3333/quotes) you will get the list of available quotes like this:

```JSON
[
    {
    "id": 1,
    "text": "Life is like a box of chocolates, you never know what you are going to get.",
    "authorId": 1
  },
  {
    "id": 2,
    "text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "authorId": 2
  },
  {
    "id": 3,
    "text": "Life is 10% what happens to me and 90% of how I react to it.",
    "authorId": 3
  }
]
```

---

While adding this query: [http://localhost:3333/quotes?includeAuthor=true](http://localhost:3333/quotes?includeAuthor=true) will return the list of available quotes along with their authors. Example:

```json
[
  {
    "id": 1,
    "text": "Life is like a box of chocolates, you never know what you are going to get.",
    "authorId": 1,
    "author": {
      "id": 1,
      "age": 37,
      "firstName": "Forrest",
      "lastName": "Gump",
      "photoUrl": "https://www.denofgeek.com/wp-content/uploads/2022/05/Tom-Hanks-as-Forrest-Gump.jpeg?fit=1200%2C714"
    }
  },
  {
    "id": 2,
    "text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "authorId": 2,
    "author": {
      "id": 2,
      "age": 37,
      "firstName": "Aristotle",
      "lastName": "",
      "photoUrl": "https://i0.wp.com/literariness.org/wp-content/uploads/2019/04/84469b33a7827daa536dd0056749f83e.jpg?fit=564%2C656&ssl=1"
    }
  }
]
```

---

Available routes are listed below:

```
GET    /quotes
GET    /quotes/1
POST   /quotes
PATCH  /quotes/1
DELETE /quotes/1

GET    /authors
GET    /authors/1
POST   /authors
PATCH  /authors/1
DELETE /authors/1
```

---

A cool feature of this API is that you can access a random quote generator with the following route:
[http://localhost:3333/quotes/random](http://localhost:3333/quotes/random)

A result(changes every time) of that request would look like the following:

```JSON
{
  "id": 11,
  "text": "The best way to predict the future is to create it.",
  "authorId": 11,
  "author": {
    "id": 11,
    "age": 95,
    "firstName": "Peter",
    "lastName": "Drucker",
    "photoUrl": "https://www.thefamouspeople.com/profiles/images/peter-drucker-6.jpg"
  }
```
