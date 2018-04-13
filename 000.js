var ruleList = [ 
	{'min': 10, 'max': 20}, 
	{'min': 12, 'max': 23}, 
	{'min': 15, 'max': 28},
	{'min': 13, 'max': 16},
	{'min': 11, 'max': 16},
	{'min': 12, 'max': 16},
	{'min': 13, 'max': 15},
	{'min': 14, 'max': 16},
	{'min': 15, 'max': 16},
];

let port=putvector(ruleList);
console.log(port);
function putvector(ruleList)
{
	var vector = [],newvector=[];
	var spaceCnt = -1;
	var maxSpace = 30;
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
