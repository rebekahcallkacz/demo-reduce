## Reduce

Reduce is really powerful once you know how to use it. Here is the basic structure:

```
  array.reduce(
    (
      accumulator,
      currentValueFromArray,
      currentIndexFromArray,
      originalArrayProvided
    ) => {
      return whatYouWantToReplaceAccumulator;
    },
    initialValueForTotal
  );
```

- The callback function (required) - has 4 params and returns the new value for the accumulator
  - The accumulator - what will be returned at the end
  - The current value from the array we are looping through
  - The current index from the array we are looping through
  - The original array
- The initial value (optional, the default is the first item in the array)

Great resource for learning reduce: https://andepaulj.medium.com/javascript-reduce-79aab078da23

## This App

To run this app locally, download this code and run `npm install`. Then run `npm start` and open the console to see the results of the different functions.
