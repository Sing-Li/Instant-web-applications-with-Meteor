Sales2013 = new Meteor.Collection("regional_sales");

if (Meteor.isClient) {

  Template.salesdata.dataset = function () {
    return Sales2013.find({});
  };

  Template.datapoint.selected = function () {
    return Session.equals("selected_datapoint", this._id) ? "selected" : '';
  };

  Template.datapoint.events = {
    'click': function () {
      Session.set("selected_datapoint", this._id);
    }
  };

Template.salesdata.rendered = function()
{
 
  $('.editable').editable(function(value, settings) { 
     console.log(this);
     console.log(value);
     console.log(settings);
     Sales2013.update(Session.get("selected_datapoint"), {$set: {total: parseInt(value)}});
     return(value);
  }, { 
     type    : 'text',
     style : 'inherit',
     width : 100,
     submit  : 'OK',
 });

     var cur = Sales2013.find();
     if (cur.count() === 0)  // do not render pie if no data
       return;
     var data = [];
     cur.forEach( function(sale) {
       data.push( [sale.region, sale.total]);
     });
  
  var plot1 = $.jqplot ('chart', [data], 
    { 
      seriesDefaults: {
        // Make this a pie chart.
        renderer: $.jqplot.PieRenderer, 
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      }, 
      legend: { show:true, location: 'e' }
    }
  );   
}

}

if (Meteor.isServer) {
  Meteor.startup(function () {
      Sales2013.remove({});
      Sales2013.insert({region:"US East", total: 2032333});
      Sales2013.insert({region:"US Central", total: 150332});
      Sales2013.insert({region:"US West", total: 1202412});
      Sales2013.insert({region:"Asia Pacific", total: 701223});
                   
  });
}
