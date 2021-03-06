$(function () {

  var rootURL = 'http://' + window.location.hostname + ':' + window.location.port;

  $.ajax({
    url: rootURL + '/statistics/brief-comments-data',
    type: 'GET',
    data: {},
    success: function (res) {
      if (res.success) {

        $('div#brief-comments-global-stat')
          .highcharts({
            chart: {
              type: 'column',
              inverted: true
            },
            title: {
              text: 'Global View'
            },
            credits: {
              enabled: false
            },
            yAxis: {
              allowDecimals: false,
              title: {
                text: 'Comments'
              }
            },
            xAxis: {
              type: 'category'
            },
            series: res.highchartsData
          });

          $('div#brief-comments-user-stat')
          .highcharts('StockChart', {
            rangeSelector: {
              selected: 4
            },
            title: {
              text: res.username
            },
            credits: {
              enabled: false
            },
            xAxis: {
              ordinal: false,
              // minRange: 1 * 24 * 3600 * 1000 
            },
            yAxis: {
              allowDecimals: false
            },
            series: [{
              name: 'Brief Comments',
              marker: {
                enabled: true,
                radius: 3
              },
              shadow: true,
              tooltip: {

              },
              data: res.highstockData
            }]
          });

      }
    }
  });

})
