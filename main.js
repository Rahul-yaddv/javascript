//  An algorithm is a set of well defined instructions to solve particular problem.
//   ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ //  ¹²³⁴⁵⁶⁷⁸⁹⁰
//      what is the diference between 2ⁿ vs n²,
//      when n = 5
//      2ⁿ = 2⁵ = 2*2*2*2*2 = 32
//      n² = 5² = 10
//
//  Constant Big-O  : O(1) 1 time per operation.
//  Linear   Big-O  : O(n) number of input time per opertion
//
//  object           Big-O        Arrays                            Big-O
//  Insert            O(1)        Insert/remove at end               O(1)
//  Remove            O(1)        insert/remove at beginning         O(n)
//  Access            O(1)        Access                             O(1)
//  Search            O(n)        Search                             O(n)
//  Object.Keys()     O(n)        Push/ Pop                          O(1)
//  Object.values()   O(n)        shift/unshift/concat/slice/splice  O(n)
//  Object.entries()  O(n)        forEach/map/filter/reduce          ((n)
//
//
//     Math Algorithms
//
//     1.Fibonacci Sequence
//     In mathematics, the Fibonacci sequence is a sequence in which each number is the sum
//     of the two preceding numbers.
//
//
//    Problem : Given a number 'n', find the first 'n' elements of the fibonacci sequence.
//
//
//   --------------------------------- Exercise Section ------------------------------------s
//
//   ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ //  ¹²³⁴⁵⁶⁷⁸⁹⁰
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ------------------------Solution ----------------------------------------------------------------------------------------------------------
//
//
//
//
//    function fabi(val) {
//            let arr = [0, 1];
//            for (let i = 2; i < val; i++) {
//            let arr[i] = arr[i - 1] + arr[i - 2];
//          }
//      return arr
//    }
//    fabi(4);   arr = [0,1,1,2] ;
//
//
//   2. Factorial of a number
//
//   In Mathematics, the factorial of a non-negative integer 'n', denoted n!, is the
//    product of all positve integers less than or equal to 'n'.
//
//     Big-O : O(n)
//
//     Factorial of zero is 1.
//
//     Problem: Given an Interger 'n', find the factorial of that integer
//
//     fac(3) : 3* 2* 1 = 6
//      final =  5
//       final =  final  *   I
//       5     =  5      *   1
//       5     =  5      *   2
//       10    =  10     *   3
//       30    =  30     *   4
//       final = 120;
//
// function fac(int) {
//   let result = 1;
//   for (let i = 2; i <= int; i++) {
//     result = result * i;
//     console.log("value:", result, "loop:", i);
//   }
//   return result;
// }
// console.log(fac(6));
//
//     --------------------------------------------------------------------------
//       fac (3)
//       final = 1
//       final   =  final  *     I
//          1    =   1     *     3
//          3    =   3     *     2
//          6    =   6     *     1
//
//         function fac(int)  {
//           let final = 1;
//             for (let i = int; i >= 1; i--) {
//               final = final * i ;
//             }
//           return final;
//         }
//         console.log(fac(3));
//     --------------------------------------------------------------------------------
//
//       Prime Number
//
//       Definition: A prime number is a natural number greater than 1 .
//         That is not a product of two smaller natural numbers.
//       Defintion 2: For any natural number to be prime,
//                    it cannot be formed by multiplying two smaller natural numbers together.
//                   In other words, a prime number doesn't have any divisors other than 1 and itself.
//
//       integers larger than the square  root do not need to be checked because,
//         whenever 'n= a*b', one of of the two factors 'a' and 'b' is less than or equal
//          to the square root of 'n'
//
//         step 1 : result = 4
//         step 2 : check if number smaller than 4 : 3*2*1 = 4
//
//
//       Problem : Given a Number 'n' determine if the number is prime or not.
//
//
//        function isPrime(n) {
//          if (n < 2) {
//            return false;
//          }
//          for (let i = 2; i <= sqrt(n); i++) {
//            if (n % i === 0) {
//              return false;
//            }
//          }
//          return true;
//        }
//        console.log(isPrime(2));
//
//    Power  of Two : An Integer is a power of two if there exists an integer 'x' such that 'n' === 2ˣ
//
//    ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ //  ¹²³⁴⁵⁶⁷⁸⁹⁰
//
//    isPowerOfTwo(1) = true (2⁰)
//    isPowerOfTwo(1) = true (2¹)
//    isPowerOfTwo(5) = false
//
//    problem: Given a positive integer 'n' determine if the number is a power of 2 or not.
//
//    function twoPower(val) {
//      if (val < 1) {
//        return false;
//      }
//      while (val > 1) {
//        if (val % 2 !== 0) {
//          return false;
//        }
//        val = val / 2;
//        console.log(val);
//      }
//      return true;
//    }
//    console.log(twoPower(6));
//    function twoPowerBitwise(val) {
//      if (val < 1) {
//        return false;
//      }
//      return (n & (n - 1)) === 0;
//    }
//
//   Recursion : Recursion is a problem sovling technique where the solution depends on solutions
//               to smaller instances of the same problem.
//               Recursion is when a function calls itself
//
//               If you find yourself breaking down your problem into smaller version of the same
//               problem, recursion is very useful.
//
//                 A few points about recursion
//
//                 a. Every recursive solution needs to have a base case - a condition to terminate
//                   the recursion.
//                 b. Recursion might simplify a problem but it does not always translate to a fastecdr
//                    solution. A recursive solution may be far  worse compared to an iteratie
//                    solution.
//
//
//    1. Recursive Fibonacci Sequence
//    In mathematics, the Fibonacci sequence is a sequence in which each number is the sum
//    of the two preceding numbers.
//
//    Problem : Given a number 'n', find the first 'n' elements of the fibonacci sequence.

// function recfibo(val) {
//   if (val < 2) {
//     return val;
//   }
//   return recfibo(val - 1) + recfibo(val - 2);
// }

// 6  -   6
//  6

// console.log(recfibo(6));

//
//
//    From a list add the counts for those whose name key are same
//   let arr =[
//     {name : "Apple",count:5},
//     {name :"Mango",count:5},
//     {name :"Mango",count:1}
//   ]
//    returns [
//              {name:"Mango",count:6},
//              {name:"Apple",count:5}
//            ]
//   function sumCounts(items) {
//   const result = items.reduce((acc, item) => {
//     // If the name already exists in the accumulator, add to its count.
//     if (acc[item.name]) {
//       acc[item.name].count = acc[item.name] + item.count;
//     } else {
//       // Otherwise, create a new entry in the accumulator.
//       acc[item.name] = { ...item };
//     }
//     return acc;
//   }, {});
//   // Convert the object back into an array.
//   return Object.values(result);
// }
// // Test the function with your data.
// const data = [
//   { name: "Apple", count: 21 },
//   { name: "Mango", count: 5 },
//   { name: "Mango", count: 1 },
// ];
// console.log(sumCounts(data));
//
// Task: Given an array of numbers, write a function that counts how many
//   times each number appears in the array.
// Example Input: [1, 2, 2, 3, 3, 3]
// Expected Output: { 1: 1, 2: 2, 3: 3 }
//   (An object where keys are the numbers and values are their counts)
//

// how to add all values of an array to an object
const values = [2, 5, 6, 78, 8];

function addNumbers(arr) {
  const result = arr.reduce((acc, num) => {
    acc.totalValue = acc.totalValue + num;
    return acc;
  }, {});
  return result;
}
console.log(addNumbers(values));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
