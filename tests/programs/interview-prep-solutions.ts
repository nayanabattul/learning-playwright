/* ============================================================
   TYPESCRIPT INTERVIEW PREP — SIMPLE SOLUTIONS
   ============================================================ */

/* ---------------- STRING PROBLEMS ---------------- */

// 1. Reverse a string without using .reverse()
function reverseString(str: string): string {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello")); // "olleh"


// 2. Check if a string is a palindrome
function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === reverseString(cleaned);
}
console.log(isPalindrome("Madam")); // true


// 3. Count vowels and consonants in a string
function countVowelsConsonants(str: string): { vowels: number; consonants: number } {
  let vowels = 0, consonants = 0;
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  for (const ch of str.toLowerCase()) {
    if (/[a-z]/.test(ch)) {
      vowelSet.has(ch) ? vowels++ : consonants++;
    }
  }
  return { vowels, consonants };
}
console.log(countVowelsConsonants("Hello World")); // { vowels: 3, consonants: 7 }


// 4. Find the first non-repeating character in a string
function firstNonRepeatingChar(str: string): string | null {
  const freq: Record<string, number> = {};
  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (const ch of str) if (freq[ch] === 1) return ch;
  return null;
}
console.log(firstNonRepeatingChar("swiss")); // "w"


// 5. Check if two strings are anagrams
function isAnagram(a: string, b: string): boolean {
  const normalize = (s: string) => s.toLowerCase().split("").sort().join("");
  return normalize(a) === normalize(b);
}
console.log(isAnagram("listen", "silent")); // true


// 6. Capitalize the first letter of every word
function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("the quick brown fox")); // "The Quick Brown Fox"


// 7. Remove duplicate characters from a string
function removeDuplicateChars(str: string): string {
  return [...new Set(str)].join("");
}
console.log(removeDuplicateChars("programming")); // "progamin"


/* ---------------- ARRAY PROBLEMS ---------------- */

// 8. Find the largest and smallest number in an array
function findMinMax(arr: number[]): { min: number; max: number } {
  let min = arr[0], max = arr[0];
  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}
console.log(findMinMax([4, 2, 9, 1, 7])); // { min: 1, max: 9 }


// 9. Remove duplicates from an array
function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]


// 10. Find the second largest element in an array
function secondLargest(arr: number[]): number | null {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique.length >= 2 ? unique[1] : null;
}
console.log(secondLargest([5, 1, 9, 9, 3])); // 5


// 11. Flatten a nested array (without using .flat())
function flattenArray(arr: any[]): any[] {
  let result: any[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1,2,3,4,5,6]


// 12. Find the intersection of two arrays
function intersection(a: number[], b: number[]): number[] {
  const setB = new Set(b);
  return [...new Set(a)].filter((x) => setB.has(x));
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5])); // [3, 4]


// 13. Rotate an array by k positions
function rotateArray(arr: number[], k: number): number[] {
  const n = arr.length;
  const shift = k % n;
  return [...arr.slice(n - shift), ...arr.slice(0, n - shift)];
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]


// 14. Find the missing number in an array of 1 to n
function findMissingNumber(arr: number[], n: number): number {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3


/* ---------------- NUMBER / MATH PROBLEMS ---------------- */

// 15. Check if a number is prime
function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17)); // true


// 16. Factorial — using a loop and using recursion
function factorialLoop(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
function factorialRecursive(n: number): number {
  return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}
console.log(factorialLoop(5), factorialRecursive(5)); // 120 120


// 17. Generate Fibonacci series up to n terms
function fibonacci(n: number): number[] {
  const series: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, n);
}
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]


// 18. Check if a number is an Armstrong number
function isArmstrong(num: number): boolean {
  const digits = String(num).split("");
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
  return sum === num;
}
console.log(isArmstrong(153)); // true


// 19. Swap two numbers without a temporary variable
function swapNumbers(a: number, b: number): [number, number] {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
console.log(swapNumbers(5, 10)); // [10, 5]


// 20. FizzBuzz
function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}
console.log(fizzBuzz(15));


/* ---------------- OBJECT / MAP-BASED PROBLEMS ---------------- */

// 21. Count frequency of each character using an object
function charFrequency(str: string): Record<string, number> {
  const freq: Record<string, number> = {};
  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return freq;
}
console.log(charFrequency("apple")); // { a:1, p:2, l:1, e:1 }


// 22. Group an array of objects by a property
interface Person {
  name: string;
  age: number;
}
function groupByAge(people: Person[]): Record<number, Person[]> {
  return people.reduce((groups, person) => {
    (groups[person.age] = groups[person.age] || []).push(person);
    return groups;
  }, {} as Record<number, Person[]>);
}
console.log(
  groupByAge([
    { name: "Amit", age: 25 },
    { name: "Riya", age: 25 },
    { name: "Sam", age: 30 },
  ])
);


// 23. Find duplicate values in an array of objects by key
function findDuplicatesByKey<T>(arr: T[], key: keyof T): T[] {
  const seen = new Set();
  const duplicates: T[] = [];
  for (const item of arr) {
    const value = item[key];
    if (seen.has(value)) duplicates.push(item);
    else seen.add(value);
  }
  return duplicates;
}
console.log(
  findDuplicatesByKey(
    [{ id: 1 }, { id: 2 }, { id: 1 }],
    "id"
  )
); // [{ id: 1 }]


/* ---------------- LOGIC / PATTERN PROBLEMS ---------------- */

// 24. Print a pyramid pattern of stars
function printPyramid(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
  }
}
printPyramid(5);


// 25. Check if brackets/parentheses are balanced (uses a stack)
function isBalanced(str: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  for (const ch of str) {
    if (["(", "[", "{"].includes(ch)) {
      stack.push(ch);
    } else if ([")", "]", "}"].includes(ch)) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isBalanced("{[()()]}")); // true
console.log(isBalanced("{[(])}"));   // false


/* ---------------- TYPESCRIPT-SPECIFIC ---------------- */

// 26. Generic function to get the first element of an array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
console.log(getFirst([10, 20, 30])); // 10
console.log(getFirst(["a", "b"]));   // "a"


// 27. Interface for a User + filter by age
interface User {
  name: string;
  age: number;
}
function filterUsersByAge(users: User[], minAge: number): User[] {
  return users.filter((user) => user.age >= minAge);
}
console.log(
  filterUsersByAge(
    [
      { name: "Asha", age: 22 },
      { name: "Vikram", age: 17 },
    ],
    18
  )
); // [{ name: "Asha", age: 22 }]


// 28. Union type — function behaves differently for string vs number
function describeValue(value: string | number): string {
  if (typeof value === "string") {
    return `String of length ${value.length}`;
  } else {
    return `Number doubled is ${value * 2}`;
  }
}
console.log(describeValue("hello")); // "String of length 5"
console.log(describeValue(10));      // "Number doubled is 20"


// 29. Function with optional and default parameters, properly typed
function greet(name: string, greeting: string = "Hello", punctuation?: string): string {
  return `${greeting}, ${name}${punctuation ?? "!"}`;
}
console.log(greet("Sara"));               // "Hello, Sara!"
console.log(greet("Sara", "Hi", "..."));  // "Hi, Sara..."


// 30. Type-safe generic Stack<T> class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // 2
console.log(numberStack.pop());  // 2
