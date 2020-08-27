function palindrome(str) {
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1];
    });
  }
  
  function countingValleys(n, s) {
    let seaLevel = 0;
    let currLevel = 0;
    let valleys = 0;
    
    s = s.split('');

    //counting valleys
    for (let i = 0; i < s.length; i++) {
        //update the current level
        if (s[i] === 'U') {
            currLevel += 1;
            if (currLevel == 0) {
                valleys += 1;
            }
        } else {
            currLevel -= 1;
        }
        
        
    }
    
    return valleys;

}

//cloud jumping

let position=0;
let jumps=0;


while(position<(c.length-1)){

 if(c[position+2]==0 && (position+2)<c.length){
   jumps++;
   position+=2;
 }else{
   jumps++;
   position++;
 }

}
return jumps;

let position = 0; 
let jumps = 0; 

while (position < c.length - 1){
if( c[position + 2 ] == 0 && (position + 2) < c.length){
    jumps ++; 
    position += 2; 
} else {
    jumps ++; 
    position ++; 
}

}
return jumps 

