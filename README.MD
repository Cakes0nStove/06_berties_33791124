<h1>The Golden Cup</h1>
A Node.js and Express.js web application built with EJS templates to showcase a drinks shop.
The website includes pages for shop details, product listings, customer registration, and a customer survey.

<h2>Technologies Used:</h2>

[![HTML5][HTML5-shield]][HTML5-url]
[![CSS3][CSS3-shield]][CSS3-url]
[![JavaScript][JavaScript-shield]][JavaScript-url]
[![Node.js][NodeJS-shield]][NodeJS-url]
[![Express.js][Express-shield]][Express-url]
[![EJS][EJS-shield]][EJS-url]

[HTML5-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5

[CSS3-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS

[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

[NodeJS-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[NodeJS-url]: https://nodejs.org/

[Express-shield]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/

[EJS-shield]: https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge&logo=ejs&logoColor=white
[EJS-url]: https://ejs.co/



<h2>Set up Instructions</h2>

### 1. Initialize the Project
Open your terminal in the project folder and run:

```
npm init
npm install express
npm install ejs
```

### 2. Start the Server
Run the following command to start the server:

```
node index.js
```

### 3. Open in browser
Once the server is running, open your browser and go to:

```
http://localhost:8000
```

### 4. My SQL Set Up
1. Download and install mysql server and sql workbench than do the following command:
```
mysql -u root -p
```

2. Create database and User 

```
CREATE DATABASE IF NOT EXISTS berties_books;

CREATE USER IF NOT EXISTS 'berties_books_app'@'localhost' IDENTIFIED BY 'qwertyuiop';

GRANT ALL PRIVILEGES ON berties_books.* TO 'berties_books_app'@'localhost';
FLUSH PRIVILEGES;

```


---

| Page              | Description                        |
| ----------------- | ---------------------------------- |
| 📘 List all books | Displays all books in the database |
| ➕ Add a book      | Form to add a new book             |
| 🔍 Search         | Search for books by name           |
| 💸 Bargain books  | Shows books priced under £20       |
