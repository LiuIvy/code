var n = 8;
var printData = []
var seriesList = [];
for (var i = 0; i < n; i++) {
	var src = [randomValue(0, 128), randomValue(0, 128)];
	var dst = [randomValue(0, 128), randomValue(0, 128)];
	var act = randomValue(0, 1);
	var xMin = src[0] < src[1] ? src[0] : src[1];
	var xMax = src[0] > src[1] ? src[0] : src[1];
	var yMin = dst[0] < dst[1] ? dst[0] : dst[1];
	var yMax = dst[0] > dst[1] ? dst[0] : dst[1];
	var series = {name:i, color:act==0? "#90ed7d":"#f45b5b", data:[{x:xMin, low:yMin, high:yMax}, {x:xMax, low:yMin, high:yMax}]};
  
printData.push(`R${i}\t${xMin} ~ ${xMax}\t${yMin} ~ ${yMax}\t${act==0?'accept':'deny'}`);
  
	seriesList.push(series);
}

function randomValue ( low, high ) {
	let value = Math.floor(( Math.random() * (high - low + 1) ) + low);

    return value;
}
console.log(printData.join('\n'));
//console.log(seriesList);

var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);


Highcharts.chart('container', {
	chart: { type: 'arearange', zoomType: 'xy'},
	title: { text: null },
	tooltip: { 
		followPointer: true,
		useHTML: true,
		headerFormat: `<div class="center" style="font-size: 14px; font-weight: bold">{series.name}</div></hr><div><table>`,
		footerFromat: '</table></div>',
		pointFormatter: function () {
			var str =	`<tr><td>Src:&#160;</td>\
							<td>${this.series.xData[0]}</td>\
							<td>&#160;~&#160;</td>\
							<td>${this.series.xData[1]}</td>\
						</tr>\
						<tr>\
							<td>Dest:&#160;</td>\
							<td>${this.low}</td>\
							<td>&#160;~&#160;</td>\
							<td>${this.high}</td>\
						</tr>`;
			
			return str;
		},
	},
	plotOptions: {
		series: {
			stickyTracking: false,
			trackByArea: true,
			showInLegend: false,
			fillOpacity: 0.75,
			lineWidth: 0.5,
			marker: { enabled: false, states: { hover: { enabled: false } } },
			cursor: 'pointer',
		}
	},
  xAxis: {
      title: "",
      floor: 0,
      ceiling: 128,
    },

  yAxis: {
      title: "",
      floor: 0,
      ceiling: 128,
    },
	series: seriesList,
});



