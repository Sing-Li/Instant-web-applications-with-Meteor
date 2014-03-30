
Fotos = new Meteor.Collection("fotoshare_photos");
 
 
  Meteor.startup(function () {
     // bootstrap code for demo - seed accounts and data
     // find the userids created for the two sample users; create users if not found
      var joe = Meteor.users.findOne({"emails.address":'joe@dwtestonly.com'});
      if (joe) {
        console.log("userId for joe@dwtestonly.com is " + joe._id);
      } else {
        Accounts.createUser({email:"joe@dwtestonly.com", password:"abc123"});
      }
      var sing = Meteor.users.findOne({"emails.address":'sing@dwtestonly.com'});
      if (sing) {
        console.log("userId for sing@dwtestonly.com is " + sing._id);
      }else {
        Accounts.createUser({email:"sing@dwtestonly.com", password:"abc123"});
      } 
      // The code below may fail when executed the first time since Accounts.createUser 
      // is async even on server - the userIds may not be ready yet. A reboot (auto) will 
      // fix it with the accounts data in place.
  
      Fotos.remove({});
      Fotos.insert({name:"pic1", img: readPic('pic1.jpg'), owner: sing._id, shared:false});
      Fotos.insert({name:"pic2", img: readPic('pic2.jpg'), owner: sing._id, shared:false});
      Fotos.insert({name:"pic3", img: readPic('pic3.jpg'), owner: sing._id, shared:false});
      Fotos.insert({name:"pic4", img: readPic('pic4.jpg'), owner: joe._id, shared:false});
      Fotos.insert({name:"pic5", img: readPic('pic5.jpg'), owner: joe._id, shared:false});
      Fotos.insert({name:"pic6", img: readPic('pic6.jpg'), owner: joe._id, shared:false});
            
    Meteor.publish("photos", function () {
      if (this.userId) {  // only visible to logged in users
            return Fotos.find( {$or : [{owner: this.userId}, {shared: true}]}, {fields: {"name": 1, "img":1 , "owner": 1}}); 
      }              

  });
  });

  function readPic(infile)  {
   
  var data = Assets.getBinary('images/' + infile);
  var buf =  new Buffer(data);
    var tp = buf.toString('base64');
    return  'data:image/jpeg;base64,' + tp;
     
  }

  Meteor.methods({
  shareThisPhoto: function (photoId) {
    var curPhoto = Fotos.findOne({_id: photoId});
    if (this.userId !== curPhoto.owner)  {
      return "Cannot share this photo.";
    } else {
      Fotos.update({_id: photoId}, {$set :{shared: true}});
      return "Photo shared!";
    }
   
  },

  
});



