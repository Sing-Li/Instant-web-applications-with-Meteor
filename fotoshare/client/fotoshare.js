
Fotos = new Meteor.Collection("fotoshare_photos");

Meteor.subscribe("photos");

var curIndex;

 Template.pages.photos = function () {
    return Fotos.find({});
  };

  // no access to handlebar @index yet in meteor - implement own index
Template.pages.resetIndex = function () {
  curIndex = 0;
}

Template.photopage.index = function() {
  return curIndex;
}

Template.pages.incIndex = function() {
  curIndex = curIndex + 1;

  console.log("INC ED...");
}

Template.photopage.indexIsZero = function() {
  return (curIndex === 0);
}

Template.photopage.indexPrev = function() {
  return  (curIndex - 1);
}

Template.photopage.indexNext = function() {
  return (curIndex + 1);
}

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


