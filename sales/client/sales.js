
SalesData = new Mongo.Collection("regional_sales");


Template.piechart.onCreated(function() {
  this.subscribe("regional_sales");
});


Template.salesdata.onCreated(function() {
  this.subscribe("regional_sales");
});

   Template.salesdata.helpers({ 
        dataset : function () {
                    return SalesData.find({});
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


