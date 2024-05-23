const BorrowedBook = require("../models/borrowedBookModel");

const findNotReturnedBook = async () => {
  let today = new Date().toLocaleDateString();

  const responseBook = await  BorrowedBook.find({}).populate("student");
  const borrowedBook = responseBook.filter(eachBook => eachBook.status === "borrowed")
  console.log(borrowedBook)
};

module.exports = findNotReturnedBook;
