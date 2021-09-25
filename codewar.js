
// LIMIT HOW MANY CODEWAR
// function deleteNth(arr,n){
//   let counts = {}
//   let newArr = []
//   for(let i = 0; i < arr.length; i++){
//     let num = arr[i];
//     counts[num] ? counts[num] += 1 : counts[num] = 1;
//     if(counts[num] <= n){
//       newArr.push(num);
//     }
//   }
//   console.log(counts)
//   return newArr
// }
// console.log(deleteNth([20,37,20,21], 1));

//UNIQUE ORDER CODEWAR CHALLENGE
// var uniqueInOrder=function(iterable){
//   let newArr = []
//   let i = 0
//   if(typeof(iterable) === "string"){
//     console.log("im in");
//     let arr = iterable.split("")
//     console.log(arr)
//     size = arr.length
//     while(i < size){
//       if(arr[i] === arr[0] && newArr[0] === undefined ){
//         newArr.push(arr[i]);
//         console.log(`${arr[i]}first condition met`);
//         i+= 1;
//       }
//       else if(arr[i] === arr[i-1]){
//         i+= 1;
//         console.log(`${arr[i]}second condition met`);
//       } else if(arr[i] !== arr[i-1]) {
//         newArr.push(arr[i]);
//         console.log(`${arr[i]}third condition met`);
//         i+= 1;
//       }
//     }
//   } else {
//     let arr = iterable
//     size = arr.length
//     while(i < size){
//       if(arr[i] === arr[0] && newArr[0] === undefined ){
//         newArr.push(arr[i]);
//         console.log(`${arr[i]}first condition met`);
//         i+= 1;
//       }
//       else if(arr[i] === arr[i-1]){
//         i+= 1;
//         console.log(`${arr[i]}second condition met`);
//       } else if(arr[i] !== arr[i-1]) {
//         newArr.push(arr[i]);
//         console.log(`${arr[i]}third condition met`);
//         i+= 1;
//       }
//     }
//   }
//   return newArr
//   //your code here - remember iterable can be a string or an array
// }
//
// console.log(uniqueInOrder([1,2,2,3,3]));


//
// function toWeirdCase(string){
//   arrList = string.split(" ")
//   newString = ""
//   for(let i = 0; i < arrList.length; i++){
//     let singleArr = arrList[i].split("")
//     for(let j = 0; j < singleArr.length; j++){
//       if(j%2 === 0){
//       newString += singleArr[j].toUpperCase()
//       } else {
//         newString += singleArr[j]
//       }
//     }
//     if(i !== arrList.length-1){newString += " "}
//   }
//   return newString;
// }
// console.log(toWeirdCase("This"))
function readOut(acrostic) {
  let string = ''
  for(let word of acrostic){
    string += word.charAt(0)
  }
  return string
}
console.log(readOut(['Jolly', 'Amazing', 'Courteous', 'Keen']))
