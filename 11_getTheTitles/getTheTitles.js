const getTheTitles = function(books) {
    let output = [];
    for (let i = 0; i < books.length; i++){
        output.push(books[i].title);
        };
    return output;
};
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
