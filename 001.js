var ruleList = [ 
{'min': 10, 'max': 20}, 
{'min': 12, 'max': 23}, 
{'min': 15, 'max': 28},
{'min': 13, 'max': 16},
];


inputDataConvertor(ruleList);

function inputDataConvertor ( dataList ) 
{
var vector = [];
var dataCnt = 0;
var spaceCnt = -1;
var maxSpace = 2;
for ( var ruleCnt = 0; ruleCnt < ruleList.length; ruleCnt++ ) {
	for ( var idxCnt = 0; idxCnt < 32; idxCnt++ ) {
		vector[idxCnt] = vector[idxCnt] || [];
		vector[spaceCnt] = vector[spaceCnt] || [];
		if ( ruleCnt % maxSpace == 0 )
			spaceCnt++;

		if ( ruleCnt != 0 ) {
			if ( ( idxCnt > ruleList[ruleCnt]['min'] ) && ( idxCnt < ruleList[ruleCnt]['max'] ) )
				vector[spaceCnt][idxCnt] = ( vector[spaceCnt][idxCnt] * 2 ) + 1;
			else 
				vector[spaceCnt][idxCnt] = vector[spaceCnt][idxCnt] * 2;
		} else {
			if ( ( idxCnt > ruleList[ruleCnt]['min'] ) && ( idxCnt < ruleList[ruleCnt]['max'] ) )
				vector[spaceCnt][idxCnt] = 1;
			else 
				vector[spaceCnt][idxCnt] = 0;
		}
	}
}
console.log(vector);
}