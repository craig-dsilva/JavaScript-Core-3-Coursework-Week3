# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

Line 4 is a variable defined within the function (local) scope. Line 7 is a global variable defined in line 1

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

This code will give us an error 'y is not defined' because the last line's variable is defined locally within this function and has no access to it

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

The output of this code is :
9
{ x: 10 }

The first line returns a number 9 because y is declared with the number 9. Even though the function is executed and number is incremented in the function, the console logger is still referring to the original value and not the value executed by the function.

The second line return an object with key x and value 10. Here the function increments the value by 1. Objects are mutable data types. In this case the function incremented the value of the original object.
