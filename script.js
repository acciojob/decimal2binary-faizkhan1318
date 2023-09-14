function decimalToBinary(num) {
  //Write you code here
	if(num === 0){
        return 0;
    }

    let s ='';

    while(num > 0){
        s = (num % 2) +s;
        num = Math.floor(num/2);
    }
    return s;
  
}

window.decimalToBinary = decimalToBinary;
