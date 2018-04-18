const _ = require('underscore');


var ruleList = [ 
	{'rule':0, 'min': 1, 'max': 2},
	{'rule':1, 'min': 1, 'max': 5},
	{'rule':2, 'min': 10, 'max': 20}, 
	{'rule':3, 'min': 12, 'max': 23}, 
	{'rule':4, 'min': 15, 'max': 28},
	{'rule':5, 'min': 13, 'max': 16},
	{'rule':6, 'min': 11, 'max': 16},
	{'rule':7, 'min': 12, 'max': 16},
	{'rule':8, 'min': 13, 'max': 15},
	{'rule':9, 'min': 14, 'max': 16},
	{'rule':10, 'min': 15, 'max': 16},
	{'rule':11, 'min': 14, 'max': 16},
	{'rule':12, 'min': 10, 'max': 16},
	{'rule':13, 'min': 21, 'max': 25},
	{'rule':14, 'min': 20, 'max': 30},
];

let port=putvector(ruleList);
console.log('port:',port);
var mergedVector=merge(port);
var andVector=and(mergedVector);



portVector = undefined;


function putvector (ruleList){
	var vector = [],newvector=[];
	var spaceCnt = -1;
	var maxSpace = 5;
	for ( var ruleCnt = 0; ruleCnt < ruleList.length; ruleCnt++ ) {
		if ( ruleCnt % maxSpace == 0 ) spaceCnt++;
		for ( var idxCnt = 0; idxCnt < 35; idxCnt++ ) {//65536
			vector[idxCnt] = vector[idxCnt] || [];
			if ( ruleCnt % maxSpace != 0 ) {
				if ( ( idxCnt >= ruleList[ruleCnt]['min'] ) && ( idxCnt <= ruleList[ruleCnt]['max'] ) )
					vector[idxCnt][spaceCnt] = ( vector[idxCnt][spaceCnt] * 2 ) + 1;
				else 
					vector[idxCnt][spaceCnt] = vector[idxCnt][spaceCnt] * 2;
			} else {
				if ( ( idxCnt >= ruleList[ruleCnt]['min'] ) && ( idxCnt <= ruleList[ruleCnt]['max'] ) )
					vector[idxCnt].push(1);
				else
					vector[idxCnt].push(0);
			}
		}
	}

	newvector.push(vector);
	return newvector;
	//console.log(vector);
}
function merge (portVector){
	var mergedVector = [ [], [] ];
	console.log('Type',typeof(portVector[0]),'portVector',portVector[0]);

	for (var j = 0; j < mergedVector.length; j++) {
		for (var i = 0; i < (portVector[j].length - 1); i++) {
			// console.log(i, mergedVector[j]);
			if ( _.isEmpty(mergedVector[j]) ) 
				mergedVector[j].push({ 'min' : i, 'max' : i, 'data' : portVector[j][i] });
			if ( _.isEqual(portVector[j][i], portVector[j][i+1]) )
				mergedVector[j][mergedVector[j].length-1]['max'] = i + 1;
			else
				mergedVector[j].push({ 'min' : i + 1, 'max' : i + 1, 'data' : portVector[j][i+1] });
		}
	}
	console.log('mergedVector:', mergedVector);
}

function and(mergedVector){
	var nunzero = [];
	var andVector = [];
	var count = [];
	for(var i = 0 ; i < mergedVector[0].length ; i++){
		andVector[i]=andVector[i]||[];	
		for(var j = 0 ; j < mergedVector[1].length ; j++){
			andVector[i][j] = andVector[i][j] || [];
			for(var z=0 ; z < mergedVector[0][i]['data'].length ; z++){
				//console.log('i',i,'j',j,'z',z);
				andVector[i][j][z] = mergedVector[0][i][z] & mergedVector[1][j][z];

				count = bitcount(andVector[i][j][z]);

				if( count > 1 && count != 1 ){
					console.log(count);
					nunzero.push({ 'i' : i, 'j' : j, 'z' : z });
				}
					
			}
			//console.log('mergedVector',mergedVector[0][i]);	
		}
	}
	//console.log('AndVector',andVector);
	//console.log('AndVector',andVector[andVector.length-1][andVector[andVector.length-1].length-1][andVector[andVector.length-1][andVector[andVector.length-1].length-1].length-1]);
	console.log('nunzero',nunzero);
}



