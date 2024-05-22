// 1 Create array with week days. Use loop to find Tuesday and Thursday then show a reminder: "Lessons at 19.00"



let week = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Suturday", "Sunday" ];

for ( var i = 0; i < week.length; i++ ) {
    if ( week[i] === "Tuesday" || week[i] === "Thursday" ) {
        alert( " Lessons at 19.00 " );
    }  
}


// 2 Counting sum of even numbers 
// Use "while" to count sum of all even numbers in a given range ( example from 1 to 20 )



let evenSum = 0;
let evenI = 1;

while ( evenI <= 20 ) {
    if( evenI % 2 === 0 ) {
        evenSum += evenI;
    }
    evenI++;
}

console.log( `Sum of even numbers ${evenSum}` );



// 3 Multiplication table
// Create code using loop for which generate multiplication table for a specific number in console 



let targetNum = 3;
for( let mulI = 1; mulI <= 10; mulI++ ) {
    console.log( ` ${ targetNum } * ${ mulI } = ${ targetNum * mulI } ` );
}




// 4 Reverse counter 
// Use loop for to create code which show numbers from 10 to 1 in a reverse range



for ( let rci = 10; rci >=0; rci-- ) {
    console.log( rci );
}




// 5 Create code which take number and using loop "for" and "if" show you all odd and even numbers in range.


let numberValue = Number( prompt( "Can you input number?", 15 ) );

if( numberValue > 0 ) {
    for ( let j = 0; j <= numberValue; j++ ) {
        if( j % 2 === 0 ) {
            console.log(` ${j} : even `);
        } else {
            console.log(` ${j} : odd `); 
        }
    }
} else if ( numberValue < 0 ) {
    for ( let k = numberValue; k <= 0; k++ ) {
        if( k % 2 === 0 ) {
            console.log(` ${k} : even `);
        } else {
            console.log(` ${k} : odd `); 
        }
    }
} else {
    console.error( "Incorect number" )
}





// 6 Find first even number 

// Create code which find first even number in range from 1 to 10 using loop for. Use "break" to stop loop if an even number is found.



for ( let ffen = 1; ffen <= 10; ffen++ ) {
    if ( ffen % 2 === 0 ) {
        console.log( ffen );
        break;
    }
}




// 7 Show even numbers
// Use loop "for" to find and show even numbers in range from 1 to 10. Use "continue" to skip iteration with odd number.



for ( let sen = 1; sen <= 30; sen++ ) {
    if ( sen % 2 ) {
        continue;
    }
    console.log( sen );
}




// 8 Create prompt which ask you about day of the week and if it Tuesday or Thurday show you have lesson today, free day find with use "switch"




let dayOfWeek = prompt( "Type day of the week ( Monday(mon), Tuesday(tu), Wednesday(we), Thursday(th), Friday(fr), Saturday(sa), Sunday(su) ) ", "mon" );

switch ( dayOfWeek ) {
    case "Monday":
    case "mon":
        console.log( "You are FREE!!!Party time!!!" );
        break;

    case "Tuesday":
    case "tu":
        console.log( "You have a lesson today." );   
        break;  

    case "Wednesday":
    case "we":
        console.log( "You are FREE!!!Party time!!!" );
        break;

    case "Thursday":
    case "th":
        console.log( "You have a lesson today." );
        break;

    case "Friday":
    case "fr":
        console.log( "You are FREE!!!Party time!!!" );
        break;

    case "Saturday":
    case "sa":
        console.log( "You are FREE!!!Party time!!!" );
        break;

    case "Sunday":
    case "su":
        console.log( "You are FREE!!!Party time!!!" );
        break;

    default:
        console.error( "Wrong day!Try again!" );        
}
    




// 9 Create prompt which ask name of plane and after show in console information if those plane exist in Solar system 
// or not, use switch for solve task.



let planet = prompt( " Type name of planet ( Earth, Venus, Mercury, Saturn, Mars, Uranus, Jupiter, Neptune ) ", "Earth" );

switch ( planet ) {

    case "Earth" :
    case "Venus" :
    case "Mercury" :
    case "Saturn" :
    case "Mars" :
    case "Uranus" :
    case "Jupiter" :
    case "Neptune" :
        console.log( "Congratulations you are in Solar system" );
        break;

    default :
        console.log(" You are in a deeep space ");    
}
  


// Additional task

// let smile = [':)', '=)',':)', '=)',':)', '=)'];
// Change smile "=)" for ";)" show in console new array. 



let smile = [':)', '=)',':)', '=)',':)', '=)'];
for( let at = 0; at <= smile.length; at++ ) {
    if( smile[ at ] == "=)" ) smile[ at ] = ";)";
}

console.log( smile );


