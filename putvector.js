var n = 8;
var printData = []
var seriesList = [];
for (var i = 0; i < n; i++) {
	var src = [randomValue(0, 128), randomValue(0, 128)];
	//var dst = [randomValue(0, 128), randomValue(0, 128)];
	var act = randomValue(0, 1);
	var xMin = src[0] < src[1] ? src[0] : src[1];
	var xMax = src[0] > src[1] ? src[0] : src[1];
	var yMin = dst[0] < dst[1] ? dst[0] : dst[1];
	var yMax = dst[0] > dst[1] ? dst[0] : dst[1];
	//var series = {name:i, color:act==0? "#90ed7d":"#f45b5b", data:[{x:xMin, low:yMin, high:yMax}, {x:xMax, low:yMin, high:yMax}]};
	var series = {name:i, color:act==0? "#90ed7d":"#f45b5b", data:[{min:xMin, max:xMax}]};
  
//printData.push(`R${i}\t${xMin} ~ ${xMax}\t${yMin} ~ ${yMax}\t${act==0?'accept':'deny'}`);
printData.push(`R${i}\t${xMin} ~ ${xMax}\t${act==0?'accept':'deny'}`);
	seriesList.push(series);
}

function randomValue ( low, high ) {
	let value = Math.floor(( Math.random() * (high - low + 1) ) + low);

    return value;
}


putvector(seriesList);

function putvector(ruleList)
{
	var vector = [];
	console.log(ruleList);
	
	for(var i=0; i<ruleList.length; i++)
	{	console.log("min:"+ruleList[i].data[0].min+",max:"+ruleList[i].data[0].max);
		
		for(var j=0; j<129 ;j++)//65535
		{	
			
			vector[j] = vector[j] || [];
			if(i!=0)
			{
				if( ruleList[i].data[0].min <= j && j<=ruleList[i].data[0].max)
					vector[j]=vector[j]*2+1;

				else
					vector[j]=vector[j]<<1;

			}

			else
			{
				if( ruleList[i].data[0].min <= j && j<=ruleList[i].data[0].max)
					vector[j].push(1);
				else 
					vector[j].push(0);
			}

		}
	
	}	
	console.log(vector);
}