// USD => CNY
//----------------------------------------------------------------------
function usdcny(usd) {
    const yuanRate = 6.75;
    return  `${(usd*yuanRate).toFixed(2)} Chinese Yuan`
}
//----------------------------------------------------------------------


// Simple directions reversal (решение дерьмо но зато своё)
//----------------------------------------------------------------------
function solve(arr){
    let newDirections = [];
    let directions = []
    let places = []
  
    arr.map((str) => {
      let miniArr = str.split(' on ');
      if(miniArr[0] !== 'Begin') {
        directions.push(miniArr[0]);
      }
      places.push(miniArr[1]);
    });
  
    directions.map((str)=> {
      if(str == 'Right') {
          newDirections.push(str.replace('Right', 'Left'));
        } else if(str == 'Left') {
          newDirections.push(str.replace('Left', 'Right'));
        }
    });
  
    newDirections.push('Begin');
  
    let result = [];
    for (let i=0; i < arr.length; i++) {
      result.push(`${newDirections[i]} on ${places[i]}`)
    }
  
    return result.reverse();
}    
//----------------------------------------------------------------------


// 1763. Longest Nice Substring
//----------------------------------------------------------------------
/**
 * @param {string} s
 * @return {string}
*/

var longestNiceSubstring = function (s) {
    let stringArr = s.split("");
    const N = stringArr.length;
    let isNiceSubSting = "";
  
    for (let i = 0; i < N - 1; i++) {
      let subStringArr = [stringArr[i]];
  
      for (let j = i + 1; j < N; j++) {
        subStringArr.push(stringArr[j]);
        let isNice = true;
  
        for (const char of subStringArr) {
          if (!subStringArr.includes(char.toLowerCase())
            ||!subStringArr.includes(char.toUpperCase()))
           {
            isNice = false;
          }
        }
  
        if (isNice && subStringArr.join("").length > isNiceSubSting.length) {
          isNiceSubSting = subStringArr.join("");
        }
      }
    }
    return (isNiceSubSting);
}
//----------------------------------------------------------------------


// Credit Card Mask
//----------------------------------------------------------------------
function maskify(cc) {
    let stringArr = cc.split('');

    if (stringArr.length > 4){
        for (i = 0; i < stringArr.length - 4; i++){
            stringArr[i] = '#';
        }
    }
    return stringArr.join('');
}
//----------------------------------------------------------------------
