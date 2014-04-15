
Sales2013 = new Meteor.Collection("regional_sales");

Meteor.subscribe("global_sales");

Template.salesdata.dataset = function () {
    return Sales2013.find({});
  };
Template.piechart.rendered = function () {

Deps.autorun( function() {  
 plotit(this, Sales2013.find({}));
 updateTable(this, Sales2013.find({}));
 });

}

function updateTable(inst, cur)  {
   if (cur.count() === 0)  // do not render pie if no data
       return;
     
     cur.forEach( function(sale) {
          inst.$('#' + sale._id + '_region').text(sale.region);
          inst.$('#' + sale._id + '_total').text(sale.total);
      });

}

function plotit(inst, cur)  {
 if (cur.count() === 0)  // do not render pie if no data
       return;
     var data = [];
     cur.forEach( function(sale) {
       data.push( [sale.region, sale.total]);
     });
   inst.$.jqplot ('chart', [data], 
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

function updateDB(value, settings) {

     console.log(this);
     console.log(this.getAttribute('sid'));
     console.log(value);
     console.log(settings);
     var val = value, sid = this.getAttribute('sid');
     Meteor.setTimeout( function() {
        console.log('callback val is ' + val);
        Sales2013.update(sid, {$set: {total: parseInt(val)}});
     }, 1000);
     return(value);
}
Template.datapoint.rendered  = function()
{
  this.$('.editable').editable(
 
   updateDB, { 
     type    : 'text',
     style : 'inherit',
     width : 100,
     submit  : 'OK',
 });
}

