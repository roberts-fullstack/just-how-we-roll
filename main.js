/**********
 * DATA *
 **********/

 const sixes = [];
 const doubleSixes = [];
 const twelves = [];
 const twenties = [];
 
 let sixSidedDie = document.querySelector('#d6-roll');
 let dblSixSidedDieOne = document.querySelector('#double-d6-roll-1');
 let dblSixSidedDieTwo = document.querySelector('#double-d6-roll-2');
 let twelveSidedDie = document.querySelector('#d12-roll');
 let twentySidedDie = document.querySelector('#d20-roll');
 let resetButton = document.querySelector('#reset-button');
 
 let sixSidedMean = document.querySelector('#d6-rolls-mean');
 let sixSidedMedian = document.querySelector('#d6-rolls-median');
 let sixSidedMode = document.querySelector('#d6-rolls-mode');
 
 let dblSixMean = document.querySelector('#double-d6-rolls-mean');
 let dblSixMedian = document.querySelector('#double-d6-rolls-median');
 let dblSixMode = document.querySelector('#double-d6-rolls-mode');
 
 let twelveMean = document.querySelector('#d12-rolls-mean');
 let twelveMedian = document.querySelector('#d12-rolls-median');
 let twelveMode = document.querySelector('#d12-rolls-mode');
 
 let twentyMean = document.querySelector('#d20-rolls-mean');
 let twentyMedain = document.querySelector('#d20-rolls-median');
 let twentyMode = document.querySelector('#d20-rolls-mode');
 
 let sixObj = {
   1: 0,
   2: 0,
   3: 0,
   4: 0,
   5: 0,
   6: 0,
 };
 
 let dblSixObj = {
   1: 0,
   2: 0,
   3: 0,
   4: 0,
   5: 0,
   6: 0,
 };
 
 let twelveObj = {
   1: 0,
   2: 0,
   3: 0,
   4: 0,
   5: 0,
   6: 0,
   7: 0,
   8: 0,
   9: 0,
   10: 0,
   11: 0,
   12: 0
 };
 
 let twentyObj = {
   1: 0,
   2: 0,
   3: 0,
   4: 0,
   5: 0,
   6: 0,
   7: 0,
   8: 0,
   9: 0,
   10: 0,
   11: 0,
   12: 0,
   13: 0,
   14: 0,
   15: 0,
   16: 0,
   17: 0,
   18: 0,
   19: 0,
   20: 0
 };
 
 /********************
  * HELPER FUNCTIONS *
 ********************/
 
 const getRandomNumber = function(max) {
     const rand = Math.random();
     const range = rand * max;
     const result = Math.ceil(range);
     return result;
 }
 
 // I don't get what is happening here
 const sortByNumber = function(arr) {
   const byNumber = function(item1, item2) {
     console.log('this is item 1: ' + item1);
     console.log('this is item 2: ' + item2);
     console.log('item1 - item2 = ' + `${item1 - item2}`);
     return item1 - item2;
   }
 
   console.log('the array is: ' + arr);
   return arr.slice().sort(byNumber);
 }
 
 const mySortArr = function(arr){
   let sortArr = arr;
   console.log('the sort arr at the beginning of mySortArr Func')
   console.log(sortArr);
   let previousNum = sortArr[0];
   let currentNum = sortArr[1];
   console.log('setting arr[0] to previous num ... ');
   console.log(previousNum);
   console.log('setting arr[1] to current num ... ')
   console.log(currentNum);
   for (let i = 1; i < sortArr.length; i++){
     currentNum = sortArr[i];
     previousNum = sortArr[i-1];
     console.log('the sort array is');
     console.log(sortArr);
     console.log('iteration');
     console.log(i);
     console.log('previous num =');
     console.log(previousNum);
     console.log('current num = ')
     console.log(currentNum);
     if (previousNum > currentNum){
 
       console.log('***Previous Num IS GREATER THAN Current Num**');
       console.log('Previous Num is ');
       console.log(previousNum);
       console.log('Current Num is ');
       console.log(sortArr[i]);
       
       console.log('We need to move the current num back 1 and the previous num forward 1');
       sortArr[i-1] = currentNum;
       sortArr[i] = previousNum;
       console.log('now the sort array looks like')
       console.sortArr;
       
       console.log('now use recurssion')
       mySortArr(sortArr);
     } else {
      console.log('all good, next iteration');
     }
   }
   console.log('my Sort Func: ')
   console.log(sortArr);
   return sortArr;
 }
 
 const intialize = function(){
 
   // Images
   sixSidedDie.src = 'images/start/d6.png';
   dblSixSidedDieOne.src = 'images/start/d6.png';
   dblSixSidedDieTwo.src = 'images/start/d6.png';
   twelveSidedDie.src = 'images/start/d12.jpeg';
   twentySidedDie.src = 'images/start/d20.jpg';
 
   // Text
   sixSidedMean.innerText = 'N/A';
   sixSidedMedian.innerText = 'N/A';
   sixSidedMode.innerText = 'N/A';
 
   dblSixMean.innerText = 'N/A';
   dblSixMedian.innerText = 'N/A';
   dblSixMode.innerText = 'N/A';
 
   twelveMean.innerText = 'N/A';
   twelveMedian.innerText = 'N/A';
   twelveMode.innerText = 'N/A';
   
   twentyMean.innerText = 'N/A';
   twentyMedain.innerText = 'N/A';
   twentyMode.innerText = 'N/A';
 }
 
 const getMeanOfArr = function(arr){
   let sum = arr.reduce(function(total, num){
     return total + num;
   });
   let count = arr.length;
   return mean = (sum/count).toFixed(2);
 }
 
 const getMedianOfArr = function(arr){
   if (arr.length === 1){
     return arr[0].toFixed(2);
   } else {
     let sortedArr = mySortArr(arr);
     console.log('inside get median function ');
     console.log(sortedArr);
     if (arr.length % 2 !== 0){
       let middleIndex = Math.floor(sortedArr.length/2);
       return sortedArr[middleIndex];
     } else {
       console.log('even array!');
       let middle1 = sortedArr[((sortedArr.length) / 2) - 1];
       console.log(`this is middle1: ` + middle1);
       let middle2 = sortedArr[((sortedArr.length) / 2)];
       console.log(`this is middle2: ` + middle2);
       console.log('the sum is');
       console.log(middle1+middle2);
       console.log('divided by 2 =')
       return median = ((middle1 + middle2) / 2).toFixed(2);
     }
   }
 }
 
 const getMode = function(obj){
   let mode = [0];
   let highestCount = 1;
   for (num in obj){
     let value = obj[num]
     console.log('num (key) of obj in for loop');
     console.log(num);
     console.log('value of obj in get mode for loop');
     console.log(value);
     if (value > highestCount){
       mode = [];
       mode.push(num);
       highestCount = value;
     } else if (value === highestCount){
       mode.push(num);
     }
   }
   if (highestCount === 1){
     return 'N/A';
   } else {
     return mode.join(', ');
   }
   
 }
 
 const resetGlobalObj = function(obj){
   for (num in obj){
     obj[num] = 0;
   }
 }
 
 /*******************
  * YOUR CODE BELOW *
  *******************/
 
 intialize();
 
 /*******************
  * EVENT LISTENERS *
  *******************/
 
 const rollSixSidedDie = sixSidedDie.addEventListener('click', function(){
   console.log('clicked six sided die')
   let num = getRandomNumber(6)
   console.log(num);
   setSixSidedDieImg(sixSidedDie, num);
 
   //Math
   sixes.push(num);
   sixObj[num] += 1;
   console.log('the six sided die array')
   console.log(sixes);
   console.log('six obj');
   console.log(sixObj);
   sixSidedMean.innerText = getMeanOfArr(sixes);
   sixSidedMedian.innerText = getMedianOfArr(sixes);
   sixSidedMode.innerText = getMode(sixObj);
 });
 
 const rollDblSixSidedDieOne = dblSixSidedDieOne.addEventListener('click', function(){
   //Die One
   let num1 = getRandomNumber(6)
   console.log('Dbl sixes, die one = ' + num1);
   setSixSidedDieImg(dblSixSidedDieOne, num1);
 
   //Die Two
   let num2 = getRandomNumber(6);
   console.log('Dbl sixes, die two = ' + num2);
   setSixSidedDieImg(dblSixSidedDieTwo, num2);
   let sum = num1+num2;
   console.log(sum);
 
   doubleSixes.push(sum);
   dblSixObj[num1] += 1;
   dblSixObj[num2] += 1;
   dblSixMean.innerText = getMeanOfArr(doubleSixes);
   dblSixMedian.innerText = getMedianOfArr(doubleSixes);
   dblSixMode.innerText = getMode(dblSixObj);
 });
 
 const rollDblSixSidedDieTwo = dblSixSidedDieTwo.addEventListener('click', function(){
   //Die One
   let num1 = getRandomNumber(6)
   console.log('Dbl sixes, die one = ' + num1);
   setSixSidedDieImg(dblSixSidedDieOne, num1);
 
   //Die Two
   let num2 = getRandomNumber(6);
   console.log('Dbl sixes, die two = ' + num2);
   setSixSidedDieImg(dblSixSidedDieTwo, num2);
   let sum = num1+num2;
   console.log(sum);
 
   doubleSixes.push(sum);
   dblSixObj[num1] += 1;
   dblSixObj[num2] += 1;
   dblSixMean.innerText = getMeanOfArr(doubleSixes);
   dblSixMedian.innerText = getMedianOfArr(doubleSixes);
   dblSixMode.innerText = getMode(dblSixObj);
 });
 
 const rollTwelveSidedDie = twelveSidedDie.addEventListener('click', function(){
   let num = getRandomNumber(12)
   console.log(num);
   setTwelveAndTwentDieImg(twelveSidedDie, num);
 
   twelves.push(num);
   twelveObj[num] += 1;
   twelveMean.innerText = getMeanOfArr(twelves);
   twelveMedian.innerText = getMedianOfArr(twelves);
   twelveMode.innerText = getMode(twelveObj);
 });
 
 const rollTwentySidedDie = twentySidedDie.addEventListener('click', function(){
   let num = getRandomNumber(20)
   console.log(num);
   setTwelveAndTwentDieImg(twentySidedDie, num);
 
   twenties.push(num);
   twentyObj[num] += 1;
   twentyMean.innerText = getMeanOfArr(twenties);
   twentyMedain.innerText = getMedianOfArr(twenties);
   twentyMode.innerText = getMode(twentyObj);
 });
 
 const hitReset = resetButton.addEventListener('click', function(){
   console.log('reset');
   resetGlobalArr();
   resetGlobalObj();
   intialize();
 });
 
 /******************
  * RESET FUNCTION *
  ******************/
 
 
 
 /****************************
  * CLICK HANDLING FUNCTIONS *
 ****************************/
 
 const setSixSidedDieImg = function(die, num){
   die.src = `images/d6/${num}.png`;
 }
 
 const setTwelveAndTwentDieImg = function(die, num){
   die.src = `images/numbers/${num}.png`;
 }
 
 const resetGlobalArr = function(){
   sixes.length = 0;
   doubleSixes.length = 0;
   twelves.length = 0;
   twenties.length = 0;
   resetGlobalObj(sixObj);
   resetGlobalObj(dblSixObj);
   resetGlobalObj(twelveObj);
   resetGlobalObj(twentyObj)
 }
 
 /****************
  * MATH SECTION *
  ****************/
 