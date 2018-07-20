// Code your solution here!
function printString(string){
  let subString
  console.log(string[0])
  if (string.length > 1) {
    subString = string.substring(1, string.length)
    printString(subString)
  } else {
    return true
  }
}

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

// function isPalindrome(str){
//   let reversedString = reverseString(str)
//   if (str === reversedString){
//     console.log("yay")
//     return true
//   } else {
//     console.log("nope")
//     return false
//   }
// }

function isPalindrome(str){
  let strLen = str.length
  if (strLen === 0 || strLen ===1){
    return true
  }
  if (str[0] === str[strLen - 1]){
    return isPalindrome(str.slice(1, strLen - 1))
  }
  return false
}

// function addUpTo(arr, index){
//   if(num > 1){
//     addUpTo(num - 1) + num
//   } else {
//     return 1
//   }
// }
// addUpTo(5)

function maxOf(arr){
  let num = 0
  arr.map(function(index){
    if (index > num){
      num = index
    }
  })
  console.log(num)
}

maxOf([1,2,3,4,5,4556,565,3])

function includesNumber(arr, num){
    arr.map(function(index){
      if (index === num){
        console.log(true)
        return true
      }
    })
    console.log(false)
    return false
}
includesNumber([1,2,3,4,5,5], 3)
