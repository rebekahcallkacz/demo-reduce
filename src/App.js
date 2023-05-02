import logo from "./logo.svg";
import "./App.css";

function App() {
  // Reduce
  // array.reduce(
  //   (
  //     accumulator,
  //     currentValueFromArray,
  //     currentIndexFromArray,
  //     originalArrayProvided
  //   ) => {
  //     return whatYouWantToReplaceAccumulator;
  //   },
  //   initialValueForTotal
  // );

  // FIRST EXAMPLE (accumulator is a number)
  // Sum values in an array
  const numArray = [100, 40, 25];

  // The for loop approach
  let forLoopSum = 0;
  numArray.forEach((value) => {
    forLoopSum += value;
  });
  console.log("The sum from the for loop: ", forLoopSum);

  // The reduce approach
  const reduceSum = numArray.reduce(
    (sum, currentArrayValue) => (sum += currentArrayValue)
  );
  console.log("This is the sum from reduce: ", reduceSum);

  // SECOND EXAMPLE (accumulator is an object)
  // Get number of occurences of each string
  const stringArray = [
    "I",
    "feel",
    "happy",
    "because",
    "I",
    "see",
    "others",
    "are",
    "happy",
    "and",
    "that",
    "makes",
    "me",
    "feel",
    "happy",
  ];
  // The for loop approach
  const wordCount = {};
  stringArray.forEach((word) => {
    wordCount[word] ? (wordCount[word] += 1) : (wordCount[word] = 1);
  });
  console.log("This is the word count object using a for loop: ", wordCount);
  // The reduce approach

  // THIRD EXAMPLE (accumulator is an array)
  const rawArray = [
    { Title: "Title A", release_date: "11/20/22" },
    { Title: "Title B", release_date: "02/02/23" },
    { Title: "Title C", release_date: "01/30/23" },
  ];
  const formattedArray = rawArray.map((title) => {
    return { title: title.Title, date: title.release_date };
  });
  const filteredArray = formattedArray.filter(
    (title) => title.title !== "Title C"
  );
  console.log("This is the final array using map and filter: ", filteredArray);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
