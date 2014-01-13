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
      // is async even on server - joe._id may not be ready yet. A reboot (auto) will 
      // fix it with the accounts data in place.

      Sales2013.remove({});
      Sales2013.insert({region:"US East", total: 2032333});
      Sales2013.insert({region:"US Central", total: 150332, owner: joe._id});
      Sales2013.insert({region:"US West", total: 1202412});
      Sales2013.insert({region:"Asia Pacific", total: 701223});

      Meteor.publish("global_sales", function () {
      if (this.userId) {  // only visible to logged in users
       return Sales2013.find({}, {fields: {"region": 1, "total":1 }}); // restrict the owner field from client access
      }
     });
});


