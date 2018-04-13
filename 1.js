var myRuleList = [ {'min': 10, 'max': 20}, {'min': 12, 'max': 23}, {'min':15,'max':34} ];

putvector(myRuleList);

function putvector(ruleList)
{
	var vector = [];

	for(var i=0; i<ruleList.length; i++)
	{	
		for(var j=0; j<35 ;j++)
		{	
			
			vector[j] = vector[j] || [];
			if(i!=0)
			{
				if( ruleList[i].min <= j && j<=ruleList[i].max)
					vector[j]=vector[j]*2+1;

				else
					vector[j]=vector[j]<<1;
			}

			else
			{
				if( ruleList[i].min <= j && j<=ruleList[i].max)
					vector[j].push(1);
				else 
					vector[j].push(0);
			}

		}
	
	}	
	console.log(vector);
}




function shiftbit()
{
	var bitcount;
	for
	{
		
	}


}




function mergevector(vector)
{

}





