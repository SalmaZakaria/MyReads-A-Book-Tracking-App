# MyReads Project

It's a Web Application to track users' books using react.js
Books are differentiated into :
 1. Want to Read
 2. Currently Reading
 3. Read

The application consists of two pages.
  1. **Home Page** : Consists of all Books in each Category.

  2. **Search Page** : where we can search for any book we want and also we can change its category.
  
# Installation
  
 Step 1: Clone this project
  ```git clone https://github.com/AdoraNwodo/reactnd-project-myreads-starter.git```
  
 Step 2: Install all project dependencies (via npm)
 ```npm install```
 
 Step 3: Start the development server 
 ```npm start```
 
 **N.B: Internet access is important**
 
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

# Credit
Udacity NanoDegree

# License

MIT. Please see the [license file](LICENSE) for more information.
