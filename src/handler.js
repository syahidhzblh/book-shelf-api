const { nanoid } = require('nanoid');
const books = require('./bookshelf_model');

const addBookHandler = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBooks = {
    name, year, author, summary, publisher, pageCount, readPage, reading, id, insertedAt, updatedAt,
  };
  books.push(newBooks);

  const isSuccess = books.filter((book) => book.id === 'id').length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.respones({
    status: 'fail',
    message: 'Gagal menambahkan buku',
  });
  response.code(400);
  return response;
};

module.exports = { addBookHandler };
