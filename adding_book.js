var client = require('./connection.js');

// Create the index for the books run only once in the production server

// client.indices.create({  
//     index: 'book'
//   },function(err,resp,status) {
//     if(err) {
//       console.log(err);
//     }
//     else {
//       console.log("create",resp);
//     }
//   });

function addbook(book) {
  return client.index({
    index: 'book',
    type: "book",  //unsure about this 
    id: book.id,
    body: {
      // "book_id": "",  id can be put above so I am keeping this commented
      "book_name": book.name,
      "book_cover": book.cover,
      "book_description": book.description,
      "book_author": book.author,
      "user_id": book.user_id,
      "book_tags": book.tags,
      "book_category": book.category,
      "book_publisher_name": book.publisher_name,
      "book_complete": book.complete,
      "book_mature": book.mature
    }
  }, function (err, resp, status) {
    if (err)
      console.log(err);
    else
      console.log(resp);
  });

}

// Random example

// addbook({
//   name: "Siva",
//   cover: "book.cover",
//   description: "book.description",
//   author: "Vikranth",
//   user_id: 1,
//   tags: ["fantasy"],
//   category: "some",
//   publisher_name: "penbound",
//   complete: true,
//   mature: "false",
//   id:1
// });


exports.addbook = addbook;

module.exports=exports;
