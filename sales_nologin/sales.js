SalesData = new Meteor.Collection("regional_sales");

if (Meteor.isClient) {

    Template.salesdata.helpers({ 
        dataset : function () {
                    return SalesData.find({}, {sort: {row : 1}});
                  }
    });

    Template.datapoint.helpers({ 
        selected :  function () {
                        return Session.equals("selected_datapoint", this._id)
                           ? "selected" : '';
                    }
    });

    Template.title.helpers({
        thisyear:  new Date().getFullYear()
    });

  

    Template.datapoint.events({
        'click': function (event, template) {
          Session.set("selected_datapoint", this._id);
        }
    });




    Template.piechart.helpers({
     'plotchart' : function() {
       plotit(this, SalesData.find({}));
     }
    });


   

    function plotit(inst,cur)  {

     if (cur.count() === 0)  // do not render pie if no data
           return;
         var data = [];
         cur.forEach( function(sale) {
           data.push( [sale.region, sale.total]);
         });
      window.$.jqplot('chart', [data], 
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

    Template.datapoint.onRendered(function()
    {
      console.log("listitem rendered");
   
      // neuter x-editable instance, let Blaze do all the updates 
      this.$('.editable').editable( {
         autotext: 'never',
         type: 'text',
         width: 10,
         mode: 'inline',
         success:    function(response, newvalue)  {
        
             SalesData.update(Session.get("selected_datapoint"), {$set: {total: parseInt(newvalue)}});
        
           // return value that is equal to underlying 'text'
            return ({newValue: $(this).text()});
            
          },
        display: function() {
           // dummy display function so 'text' is not set, Blaze will set it
        }
         });     

    
       
    });


} // if isClient


// export CLEARDATA=t        if you want data cleared everytime the code restarts

if (Meteor.isServer) {
  Meteor.startup(function () {
   if  ((process.env['CLEARDATA']) || (SalesData.find().count() == 0)) {
      var roworder = 0; 
      SalesData.remove({});
      SalesData.insert({region:"US East", total: 2032333, row: roworder++});
      SalesData.insert({region:"US Central", total: 150332, row: roworder++});
      SalesData.insert({region:"US West", total: 1202412, row: roworder++});
      SalesData.insert({region:"Asia Pacific", total: 701223, row: roworder});
  }  


                  
  });

}
