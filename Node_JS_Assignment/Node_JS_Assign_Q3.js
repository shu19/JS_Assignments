function factorial(){
    var i=5;
    var fact=1;
    if(i<0){
        console.log('Please enter number greater than 0 ');    
    }else{
        var j;
        for(j=i;j>0;j--){
            
    
            fact=fact*j;
    

        }
    }

    console.log('factorial is '+fact);
}
factorial();