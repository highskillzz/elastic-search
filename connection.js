var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'https://search-testdomain-aii2a46523syiv2fgw3v5b6a4i.us-west-2.es.amazonaws.com',
  ]
});

module.exports = client;  