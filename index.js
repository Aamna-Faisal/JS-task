// Amna Faisal   WMA-129492



//QUESTION # 1
let nums = [2, 3, -2, 4];
  console.log(max(nums));
function max(nums) {
    let max= nums[0];
    let min = nums[0];
    let res = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      let num1 = Math.max(nums[i], max* nums[i], min * nums[i]);
      let num2 = Math.min(nums[i], max * nums[i], min * nums[i]);
  
      max = num1;
      min = num2;
  
      res = Math.max(res, max);
    }
  
    return res;
  }

  //QUESTION #2
  function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return null;
}
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3));

 

  //QUESTION # 3 
function reverse(input) {
    return input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
let string = "Welcome to this Javascript Guide!";
let reversedString = reverse(string);
console.log(reversedString);

   //QUESTION #4
  var library = [
         {
           title: "The Road Ahead",
           author: "Bill Gates",
           readingStatus: true
         },
         {
           title: "Walter Isaacson",
           author: "Steve Jobs",
           readingStatus: true
         },
         {
           title: "Mockingjay: The Final Book of The Hunger Games",
           author: "Suzanne Collins",
           readingStatus: false
         }
       ];

       for (var i = 0; i < library.length; i++) {
         var book = library[i];
         if (book.readingStatus) {
           console.log("Already read '" + book.title + "' by " + book.author + ".");
         } else {
           console.log("You still need to read '" + book.title + "' by " + book.author + ".");
         }
}

  //QUESTION #5
 function amountToCoins(amount, coins) {
    const result = []
    for (let coin of coins) {
      while (amount >= coin) {
        amount -= coin;
        result.push(coin);
      }
    }
    return result;
  }
  let amount = 46;
  let coins = [25, 10, 5, 1];
  let coinBreakdown = amountToCoins(amount, coins);
  console.log(coinBreakdown)