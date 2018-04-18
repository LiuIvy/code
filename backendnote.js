//behind
//if ( !myObject['aclObject'][nodeName].hasOwnProperty('ARARTree') ) {
			// 	showingNodeCount++;
			// 	return;
			// }
			var srctestblock,destestblock;
			srctestblock=inputSrcPortConvert(portBlock['ruleList']);
			//console.log(srctestblock);

			destestblock=inputDesPortConvert(portBlock['ruleList']);
			console.log(destestblock);
			
			var srcvector,desvector;
			srcvector=putvector(srctestblock);
			desvector=putvector(destestblock);


//after bitcount
function inputSrcPortConvert( dataList ) 
{
	let newDataList = [];
	// console.log(dataList);
	for (let dataCount=0; dataCount<dataList.length; dataCount++) {
		let data = dataList[dataCount];
		let newData, src_port, dest_port, flag = false;

		src_port = new PortSplit(data['src_port']);
		//dest_port = new PortSplit(data['dest_port']);
		//console.log(src_port,dest_port);
		newData = new PortList(data['listOrder'],src_port['portMinNumber'],src_port['portMaxNumber']);
		//console.log(newData);
		newDataList.push(newData);
	}
	return newDataList;
}

function inputDesPortConvert( dataList ) 
{
	let newDataList = [];
	// console.log(dataList);
	for (let dataCount=0; dataCount<dataList.length; dataCount++) {
		let data = dataList[dataCount];
		let newData, src_port, dest_port, flag = false;

		//src_port = new PortSplit(data['src_port']);
		dest_port = new PortSplit(data['dest_port']);
		//console.log(src_port,dest_port);
		newData = new PortList(data['listOrder'],dest_port['portMinNumber'],dest_port['portMaxNumber']);
		//console.log(newData);
		newDataList.push(newData);
	}
	return newDataList;
}