function getMaxValue(arr) {
	var v1 = 0;
	var v2 = 0;
	for(let i = 0;i < arr.length; i ++ ) {
		v1 = 0;
		for( let k = i;k <arr.length; k ++) {
			v1 += arr[k];
			if(v1 > v2) {
				v2 =v1;
			}
		}
	}
	console.log(v2);
} 
getMaxValue([-1, 1, 2, 3, -3]);