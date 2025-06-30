// queries.js
// MongoDB queries for PLP Week 1 Assignment

// 1. Find all books
db.books.find({})

// 2. Find books by a specific author (e.g., George Orwell)
db.books.find({ author: "George Orwell" })

// 3. Find books published after 1950
db.books.find({ published_year: { $gt: 1950 } })

// 4. Find books in the Fiction genre
db.books.find({ genre: "Fiction" })

// 5. Find all in-stock books
db.books.find({ in_stock: true })

// 6. Sort books by price in descending order
db.books.find({}).sort({ price: -1 })

// 7. Project only title and author fields
db.books.find({}, { title: 1, author: 1, _id: 0 })

// 8. Count books in a specific genre
db.books.countDocuments({ genre: "Dystopian" })

// 9. Find books with more than 300 pages
db.books.find({ pages: { $gt: 300 } })

// 10. Aggregation example: average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])
