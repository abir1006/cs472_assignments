const Book = require('../model/book');

exports.getAll = (req, res) => {
    res.status(200)
        .json(Book.getAll());
};

exports.getById = (req, res, next) => {
    res.status(200)
        .json(Book.getBookById(parseInt(req.params.id)));
}

exports.save = (req, res, next) => {
    const newBook = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author)
        .save();
    res.status(201).json(newBook);
}

exports.deleteById = (req, res, next) => {
    res.status(200).json(Book.deleteById(parseInt(req.params.id)));
}

exports.updateById = (req, res, next) => {
    const updatedBook = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    updatedBook.id = parseInt(req.params.id);
    updatedBook.update();
    res.status(204).end();
}