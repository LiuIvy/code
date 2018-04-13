const _ = require('underscore');

var ruleList = [ 
	{'min': 10, 'max': 15}, 
	{'min': 11, 'max': 14}, 
	{'min': 10, 'max': 13},
	{'min': 13, 'max': 16},
	{'min': 11, 'max': 16},
];

var port=putvector(ruleList);
function putvector(ruleList)
{
	var vector = [],newvector=[];
	var spaceCnt = -1;
	var maxSpace = 30;
	for ( var ruleCnt = 0; ruleCnt < ruleList.length; ruleCnt++ ) {
		if ( ruleCnt % maxSpace == 0 ) spaceCnt++;
		for ( var idxCnt = 0; idxCnt < 20; idxCnt++ ) {//65536
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
	//console.log(newvector.length);
	return newvector;
}


console.log(JSON.stringify(port));
console.log(port.length);


Object.keys(port).forEach(function(data,datacount){
	var portunique=port[data];
	console.log(`portunique 47:[${portunique}]`);
	//console.log(portunique.length);

	for(var i=0; i<portunique.length; i+1) 
	{		console.log(`${i}`);
	        for(var j=i+1; j<portunique.length; j+1) 
	        {	
				//console.log(`portunique[${i}]:${portunique[i]} , portunique[${j}]:${portunique[j]}`);			
				//if(portunique[i][0] === portunique[j][0])
				while (_.isEqual(portunique[i] , portunique[j]))
	            {
					console.log(`Equal`);
					// mergeport[i]=portunique[i];
					portunique.splice(j, 1);
					console.log(`portunique ${j} : [${portunique}],`);
	            }
	            if(portunique[i]!=portunique[j])
				break;
			}
			console.log(`123`);
			i++;
			return;
	}
	 
})



// Object.keys(port).forEach(function(data,datacount){
// 	var portunique=port[data];
// 	console.log(`portunique 47:[${portunique}]`);
// 	//console.log(portunique.length);
// 	var mergeport=[];
// 	for(var i=0; i<portunique.length; i+2) {
// 	        for(var j=i+1; j<portunique.length; j+2) {	
// 	        	for(var x=0;;x++){
// 	        		//console.log(`portunique[${i}]:${portunique[i]} , portunique[${j}]:${portunique[j]}`);			
// 					//if(portunique[i][0] === portunique[j][0])
// 					if(_.isEqual(portunique[i] , portunique[j]))
// 		            {
// 						console.log(`Equal`);
// 						mergeport.push(portunique[i]);
// 						//portunique.splice(j, 1);
// 		            }
// 		            else
// 		            {
// 		            	console.log(`False`);
// 						mergeport.push(portunique[i]);
// 				    	mergeport.push(portunique[j]);
// 		            }
// 					console.log(`portunique ${j} : [${mergeport}],`);

// 		            // else 
// 					// console.log(`fail`);
// 		        }
				
// 			}
// 	    }
	 
// })
