const express = require("express")
const router = express.Router()
const request = require('request')
require('dotenv').config();

router.get('/books', function (req, res, next) {

    let search = req.query.search;
    let minPrice = req.query.minprice;
    let maxPrice = req.query.maxprice;
    let sort = req.query.sort; // NEW

    // BASE SQL
    let sqlquery = "SELECT * FROM books WHERE 1 = 1";
    let params = [];

    // Search filter
    if (search) {
        sqlquery += " AND name LIKE ?";
        params.push('%' + search + '%');
    }

    // Minimum price filter
    if (minPrice) {
        sqlquery += " AND price >= ?";
        params.push(minPrice);
    }

    // Maximum price filter
    if (maxPrice) {
        sqlquery += " AND price <= ?";
        params.push(maxPrice);
    }

    // Sorting
    if (sort === "name") {
        sqlquery += " ORDER BY name ASC";
    } 
    else if (sort === "price") {
        sqlquery += " ORDER BY price ASC";
    }

    // Run query
    db.query(sqlquery, params, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json(result);
        }
    });
});



module.exports = router;