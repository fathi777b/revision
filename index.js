****** 1
function iterateAndLogWithFor(n) {
    

for (let i = 0; i < n; i++) {
    if ( n %2===0){
        console.log (i + "is even")
    }
    console.log ( i+ "is odd")
    
}
}



function iterateAndLogWithWhile(n) {
    var i = 0
    while ( i<n){
        if ( n%2 === 0){
            console.log(i+"is even")
        
        }
        i++

        console.log( i + "is odd" )
    }
}

****** 2

function reverseIterateAndLogWithFor(n){
    for ( i = n ; i>0; i--){
        if ( i%2 ===0 ) {
            console.log(i+" is even")
            
        }
        else { console.log( i+ "is odd")
             }
    }
}    



function iterateAndLogWithWhile(n) {
    var i = n
    while ( i>0){
        if ( i%2 === 0){
            console.log(i+"is even")
           
        }else {
           console.log(i+"is odd") 
        }
      i--
    }
}

******3
    
function weirdDivisionWithFor(n) {
    for ( i = 1 ; i<n; i++){
        if ( i%3===0){
            console.log( " julia")
        }
        else if ( i%5===0){
       console.log("james")
        }
        else {
            console.log( i )
        }
    }
    
            
        


}

******4
function laughWithFor(number) {

 var  result = ""
    for ( i=0 ; i< number ; i++){
        result = result + "ha"
        
    }
    return result

}


function laughRecursively(number) {

  if ( number ===0){
      
      return ""
  }
    return laughRecursively(number-1)+"ha"
    
}


*****5
function sumRecursively(number) {
  
   if ( number === 0 ){ 
       return 0
   }
    return number + ( factorialRecursively(number-1))

}


***** 6 
function factorialRecursively(number) {
  
   if ( number === 0 ){ 
       return 1
   }
    return number * ( factorialRecursively(number-1))

}
 