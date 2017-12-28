var client = require('./connection.js');

// client.indices.create({  
//     index: 'user'
//   },function(err,resp,status) {
//     if(err) {
//       console.log(err);
//     }
//     else {
//       console.log("create",resp);
//     }
//   });

function adduser(user) { 
return client.index({  
    index: 'user',
    type: 'user',  //unsure about this 
    id: user.id,
    body: {
      // "user_id": "",  id can be put above so I am keeping this commented
      "display_name":user.display_name,
      "profile_picture":user.profile_picture,
      "short_bio":user.short_bio
    }
  },function(err,resp,status) {
      if(err)
      console.log(err);
      else
      console.log(resp);
  });
}

exports.adduser = adduser;