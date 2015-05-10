
SalesData = new Mongo.Collection("regional_sales");

SalesData.allow({

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
