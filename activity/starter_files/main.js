// Rock Paper Scissors Function
function rps (left,right) {
  // write code here
if (left==right) {
  return "It's a tie!";
   }else if (left=='rock' && right== 'paper'){
     return 'Right wins!';
   }else if (left=='scissors' && right=='paper'){
     return 'Left wins!');
   }else if (lef=='paper' && right=='scissors');
         return 'Right wins!';
}





// Don't edit below these lines
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
