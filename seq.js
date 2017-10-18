
//Infinite sequence 

function find_sequence(sequence){

	var str = "";
	var position = -1;

	for(i=1;position==-1;i++){

		str = str+i;

		position = str.indexOf(sequence);
	}

	return position+1;
	
}

console.log(find_sequence(1213));//input any value here to find that in inf.seq.
