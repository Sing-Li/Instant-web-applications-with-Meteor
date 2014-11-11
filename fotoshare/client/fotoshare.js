
Fotos = new Meteor.Collection("fotoshare_photos");

Meteor.subscribe("photos");

var curIndex;

 Template.pages.helpers({
    photos: function () {
            return Fotos.find({});
            },

    // no  @index yet in meteor spacebar - implement own index
   resetIndex: function () {
                curIndex = 0;
              },

    incIndex: function() {
                curIndex = curIndex + 1;
              }
  });


Template.photopage.helpers({
   index: function() {
            return curIndex;
          },
    indexIsZero: function() {
                    return (curIndex === 0);
                 },

    indexPrev: function() {
                  return  (curIndex - 1);
                },

    indexNext: function() {
                  return (curIndex + 1);
                }
  });

Template.photopage.events({
  'click .fs-logoff': function () {
    Meteor.logout(function() {
      location.reload();
    });
  },
  'click .fs-share': function() {
      Meteor.call('shareThisPhoto', this._id, function (error, retval) {
        console.log(retval);
      });
  }
});



Template.pages.rendered = function() {
  console.log("pages rendered");
};



Template.photopage.rendered = function () {
  console.log('called PAGE rendered');

  if (curIndex > 0)  {
   var curLast =  $('#x' + (curIndex - 1));
   var secLast =  $('#x' + (curIndex - 2));
   if (curLast)  {
    curLast.prop('disabled', true);
    curLast.hide();
   }
   if (secLast) {
    if (secLast.prop('disabled')) {
      secLast.removeProp('disabled');
      secLast.show();
    }
   
   }
  
  Meteor.defer( function() {
   
   
     $.mobile.changePage('#p' + (curIndex - 1));
   });
  }
  
  };


