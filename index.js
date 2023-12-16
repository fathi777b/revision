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
