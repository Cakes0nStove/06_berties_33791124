// Create router
const express = require("express")
const router = express.Router()

// Search page
router.get('/search', (req, res) => {
    res.render("search.ejs")
});

// Search results
router.get('/search-result', (req, res, next) => {
    const keyword = req.query.search_text
    const sqlquery = "SELECT * FROM books WHERE name LIKE ?"
    const searchTerm = `%${keyword}%`

    db.query(sqlquery, [searchTerm], (err, result) => {
        if (err) return next(err)

        res.render("search.ejs", {
            shopData: { shopName: "Bertie's Books" },
            keyword,
            books: result
        })
    })
});

// List all books
router.get('/list', (req, res, next) => {
    const sqlquery = "SELECT * FROM books"
    db.query(sqlquery, (err, result) => {
        if (err) return next(err)
        res.render("list.ejs", { availableBooks: result })
    })
});

// Add new book
router.post('/bookadded', (req, res, next) => {
    const sqlquery = "INSERT INTO books (name, price) VALUES (?,?)"
    const newrecord = [req.sanitize(req.body.name), req.sanitize(req.body.price)]

    db.query(sqlquery, newrecord, (err) => {
        if (err) return next(err)
        res.send(`This book is added to database, name: ${req.sanitize(req.body.name)} price ${req.sanitize(req.body.price)}`)
    })
});

// Bargain books
router.get('/bargainbooks', (req, res, next) => {
    const sqlquery = "SELECT name, price FROM books WHERE price < 20"
    db.query(sqlquery, (err, result) => {
        if (err) return next(err)
        res.render("bargainbooks.ejs", { availableBooks: result })
    })
});

// Export router
module.exports = router
