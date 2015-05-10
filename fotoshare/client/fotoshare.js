
Fotos = new Mongo.Collection("fotoshare_photos");

Template.pages.onCreated(function() {
  this.subscribe("photos");
});

Template.photopage.onCreated(function() {
  Template.instance().numphotos = 0;
});

 
Template.photopage.helpers({
  photos: function () {
            var curcount = Fotos.find({}).count();
            console.log(curcount);
            var inst = Template.instance();
            console.log('num photo ' + inst.numphotos);
            if (inst.numphotos > 0) {
              Meteor.defer( function() {
                $('.m-scooch').scooch('refresh');
                $('.m-scooch').scooch('move', 1000);
                
              });
            }
            inst.numphotos = curcount;
            return Fotos.find({});
            }
  });

Template.photopage.events({
  'click .fs-logoff': function () {
    Meteor.logout(function() {
      location.reload();
    });
  },
  'click .fs-share': function() {
     var curselected = $('.m-active > img').attr('id');
     console.log(curselected);
  
      Meteor.call('shareThisPhoto', curselected, function (error, retval) {
        console.log(retval);
      });

  }
});


Template.pages.rendered = function() {
  console.log("pages rendered");
};

Template.photopage.rendered = function () {
      this.$('.m-scooch').scooch();

      Meteor.defer(function() {
        $.mobile.changePage('#main');
  
      });
      console.log('make scooch');

  };
