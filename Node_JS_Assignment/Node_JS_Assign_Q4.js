function isPrime(){
    var i=3;
    
    if(i==2 || i==3 || i==5|| i==7){
        console.log('Number is prime ');
        
    }else
    if(i%2==0 || i%3==0 || i%5==0 || i%7==0){
        
        console.log('Number is not prime ');
        
        
    }else{
        console.log('Number is prime ');
    }

}
isPrime();