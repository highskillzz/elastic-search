var client = require('./connection.js');

function findbook(name) {
    return client.search({
        index: 'book',
        type: 'book',
        body: {
            query: {
                match: { book_name: name }
            },
        }
    }, function (error, response, status) {
        if (error) {
            console.log("search error: " + error)
        }
        else {
            console.log("--- Response ---");
            console.log(response);
              return response.hits.hits;
            // console.log("--- Hits ---");
            // response.hits.hits.forEach(function (hit) {
            //     console.log(hit);
            // });
        }
    });
}


exports.finduser = finduser;
module.exports=exports;