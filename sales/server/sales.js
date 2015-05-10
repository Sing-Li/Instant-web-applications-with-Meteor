Meteor.startup(function () {
     // bootstrap code for demo - seed accounts and data
     // find the userids created for the two sample users; create users if not found
      var joe = Meteor.users.findOne({"emails.address":'joe@dwtestonly.com'});
      var joeid = (joe?   joe._id : Accounts.createUser({email:"joe@dwtestonly.com", password:"abc123"}) );
      console.log("userId for joe@dwtestonly.com is " + joeid);

      var sing = Meteor.users.findOne({"emails.address":'sing@dwtestonly.com'});
      var singid = (sing?  sing._id :  Accounts.createUser({email:"sing@dwtestonly.com", password:"abc123"}) );
      console.log("userId for sing@dwtestonly.com is " + singid);     

      if  ((process.env['CLEARDATA']) || (SalesData.find().count() == 0)) {
          var roworder = 0; 
          SalesData.remove({});
          SalesData.insert({region:"US East", total: 2032333, row: roworder++});
          SalesData.insert({region:"US Central", total: 150332, row: roworder++, owner: joeid});
          SalesData.insert({region:"US West", total: 1202412, row: roworder++});
          SalesData.insert({region:"Asia Pacific", total: 701223, row: roworder});
      }  



      Meteor.publish("regional_sales", function () {
      if (this.userId) {  // only visible to logged in users
       return SalesData.find({}, {fields: {"region": 1, "row": 1, "total":1 }}); // restrict the owner field from client access
      }
     });
});


