
Sales2013 = new Meteor.Collection("regional_sales");

Sales2013.allow({

  update: function (userId, sales, fields, modifier) {
    if (userId !== sales.owner)
      return false; // not the owner

    var allowed = ["total"];
    // underscore library is built-in for now
    if (_.difference(fields, allowed).length)
      return false; // tried to write to forbidden field

    return true;
  },
  
});
