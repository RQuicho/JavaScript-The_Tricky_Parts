https://www.toptal.com/javascript/interview-questions

1. What is a potential pitfall with using **typeof bar === "object"** to determine if **bar** is an object? How can this pitfall be avoided?

   - null can also be an "object."
   - Add a statement that checks for null values => console.log((bar !== null) && (typeof bar === "object"))

2. What will the code below output to the console and why?
   (function(){
   var a = b = 3;
   })();
   console.log("a defined? " + (typeof a !== 'undefined'));
   console.log("b defined? " + (typeof b !== 'undefined'));

   - The first log is false and the second log is true.
   - This function reads: b = 3, and var a = b.

3. What will the code below output to the console and why?
   var myObject = {
   foo: "bar",
   func: function() {
   var self = this;
   console.log("outer func: this.foo = " + this.foo);
   console.log("outer func: self.foo = " + self.foo);
   (function() {
   console.log("inner func: this.foo = " + this.foo);
   console.log("inner func: self.foo = " + self.foo);
   }());
   }
   };
   myObject.func();

   - outer func: this.foo = bar
   - outer func: self.foo = bar
   - inner func: this.foo = undefined
   - inner func: self.foo = bar
   - In the outer function, **this** and **self** refer to myObject and have access to foo. In the inner function, **this** no longer refers to myObject and does not have access to foo. **self** in the inner function has access to foo because self is a local variable.

4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

   - You are able to call on that file as one function and keep a consistent naming convention. It helps create more modular code and reusable components.

5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

   - code is executed in "strict mode."
   - voluntarily enforce stricter pasring and error handling.
   - errors that would originally not show now appear (good for debugging)

6. Consider the two functions below. Will they both return the same thing? Why or why not?
   function foo1()
   {
   return {
   bar: "hello"
   };
   }

   function foo2()
   {
   return
   {
   bar: "hello"
   };
   }

   - function foo1 will return an object with bar: "hello"
   - function foo2 will return undefined. The space or extra line after "return" causes the function to stop running at that point. Essentially, it is written as "return;"
   - a semicolon is automatically inserted at return in function foo2

7. What will the code below output? Explain your answer.
   console.log(0.1 + 0.2);
   console.log(0.1 + 0.2 == 0.3);

   - the first log will output 0.30000000000000004.
   - the second log will output false.
   - numbers in JavaScript are treated with floating precision and will not always produce the expcted results.

8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
   (function() {
   console.log(1);
   setTimeout(function(){console.log(2)}, 1000);
   setTimeout(function(){console.log(3)}, 0);
   console.log(4);
   })();

   - 1, 4, 3, 2
   - 1 is logged since it is the first line in the function. Both setTimeouts are added to the queue. 4 is logged right after 1 is logged.
   - the second setTimeout is logged since the delay is 0 ms. Then the first setTimout is logged with a delay of 1000 ms.

9. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.
   const isPalindrome = (str) => {
   simplifiedStr = str.replace(/\W/g, '').toLowerCase();
   return (simplifiedStr === simplifiedStr.split('').reverse().join(''));
   }

10. Write a sum method which will work properly when invoked using either syntax below.
    console.log(sum(2,3)); // Outputs 5
    console.log(sum(2)(3)); // Outputs 5

    const sum = (num1, num2) => {
    if (num2 !== undefined) {
    return num1 + num2;
    } else {
    return function(num2) {
    return num1 + num2;
    }
    }
    }

11. Consider the following code snippet:
    for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
    }

(a) What gets logged to the console when the user clicks on “Button 4” and why?

- 5 will be logged.
- var is setting "i" to a globally scoped variable.
- by the time the button is clicked, the value of i is already 5.

(b) Provide one or more alternate implementations that will work as expected.

- instead of var, use let.
- let will be block scoped within each loop.

12. Assuming d is an “empty” object in scope, say:
    var d = {};
    ... what is accomplished using the following code?
    [ 'zebra', 'horse' ].forEach(function(k) {
    d[k] = undefined;
    });
    …what is accomplished using the following code?

- the items in the array are set as keys in the empty object
- those items are also given the value "undefined"
- the resulting object d = {'zebra': undefined, 'horse': undefined}

13. What will the code below output to the console and why?
    var arr1 = "john".split('');
    var arr2 = arr1.reverse();
    var arr3 = "jones".split('');
    arr2.push(arr3);
    console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
    console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

    - array 1: length= 5 last= j,o,n,e,s'
    - array 2: length= 5 last= j,o,n,e,s'
    - arr1 and arr2 are the same. arr2 references arr1. ['n,'h','o','j', ['j','o','n','e','s']]

14. What will the code below output to the console and why ?
    console.log(1 + "2" + "2");
    console.log(1 + +"2" + "2");
    console.log(1 + -"1" + "2");
    console.log(+"1" + "1" + "2");
    console.log( "A" - "B" + "2");
    console.log( "A" - "B" + 2);

    - 122
    - 32
    - 02
    - 112
    - NaN2
    - NaN

15. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
    var list = readHugeList();

    var nextListItem = function() {
    var item = list.pop();

    if (item) {
    // process the list item...
    nextListItem();
    }

};

- var list = readHugeList();

  var nextListItem = function() {
  var item = list.pop();

  if (item) {
  // process the list item...
  setTimeout(nextListItem, 0);
  }

};

- setTimeout pushes nexListItem to the event queue and the function exits, leaving the call stack clear.

16. What is a “closure” in JavaScript? Provide an example.

    - the ability for inner functions to remember variables defined in outer functions, long after the outer function has returned.
    - usefule for creating private vairables

    const idGenerator = () => {
    let start = 0;
    return function generate() {
    start++;
    return start
    };
    };

17. What would the following lines of code output to the console? Explain your answer.
    console.log("0 || 1 = "+(0 || 1));
    console.log("1 || 2 = "+(1 || 2));
    console.log("0 && 1 = "+(0 && 1));
    console.log("1 && 2 = "+(1 && 2));

    0 || 1 = 1 // the || operator is first evaluated and interpreted as a boolean value. 1 is true so that is logged.
    1 || 2 = 1 // the || operator is first evaluated and interpreted as a boolean value. 1 is true so that is logged.
    0 && 1 = 0 // the && operator also evaluates and interprets a boolean value. Since 0 is false, the && already failed. The next value is not evaluated.
    1 && 2 = 2 // the && operator evaluates and interprets a boolean value. Since 1 is true, the next value is evaluated and returned.

18. What will be the output when the following code is executed? Explain.
    console.log(false == '0')
    console.log(false === '0')

    - First log is true. The == operator compares for equality after doing type conversions.
    - Second log is false. The === operator has to be the same value and type.

19. What is the output out of the following code? Explain your answer.
    var a={},
    b={key:'b'},
    c={key:'c'};

    a[b]=123;
    a[c]=456;

    console.log(a[b]);
