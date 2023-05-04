import "./App.css";

function App() {
  ////// FIRST EXAMPLE (accumulator is a number) //////
  // The goal is to sum all of the values in the array
  const numArray = [100, 40, 25];

  // The for loop approach
  let forLoopSum = 0;
  numArray.forEach((value) => {
    forLoopSum += value;
  });
  console.log("EXAMPLE 1 - sum from the for loop: ", forLoopSum);

  // The reduce approach
  const reduceSum = numArray.reduce((sum, value) => (sum += value));
  console.log("EXAMPLE 1 - sum from reduce: ", reduceSum);

  ////// EXAMPLE 2 (accumulator is an object) //////
  // Get the number of occurences of each string and return them in an object of the format { word: count }
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
  console.log("EXAMPLE 2 - word count object using a for loop: ", wordCount);

  // The reduce approach
  const wordCountReduce = stringArray.reduce((wordCount, word) => {
    wordCount[word] ? (wordCount[word] += 1) : (wordCount[word] = 1);
    return wordCount;
  }, {});
  console.log(
    "EXAMPLE 2 - the word count object using reduce: ",
    wordCountReduce
  );

  ////// EXAMPLE 3 - (accumulator is an array) //////
  // The goal is to standardize the key names to "title" and "date" and to filter out all objects where the title is "Title C"
  const rawArray = [
    { Title: "Title A", release_date: "11/20/22" },
    { Title: "Title B", release_date: "02/02/23" },
    { Title: "Title C", release_date: "01/30/23" },
  ];
  const filteredArray = rawArray.filter((title) => title.Title !== "Title C");
  const formattedArray = filteredArray.map((title) => {
    return { title: title.Title, date: title.release_date };
  });
  console.log(
    "EXAMPLE 3 - the filtered, formatted array using filter and map: ",
    formattedArray
  );

  // Using reduce
  const filteredArrayReduce = rawArray.reduce((filteredArray, title) => {
    if (title.Title !== "Title C") {
      const formattedTitle = {
        title: title.Title,
        date: title.release_date,
      };
      filteredArray.push(formattedTitle);
    }
    return filteredArray;
  }, []);
  console.log(
    "EXAMPLE 3: the filtered, formatted array using reduce: ",
    filteredArrayReduce
  );

  // TO TRY YOURSELF
  ////// EXAMPLE 4 (accumulator is a string) //////
  // The goal is to turn the array into a single string
  let sentence = "";
  stringArray.forEach((word) => (sentence += `${word} `));
  console.log("EXAMPLE 4 - the string using a for loop: ", sentence);

  // NOW DO THIS WITH REDUCE

  ////// EXAMPLE 5 (accumulator is an array) //////
  // The goal is to combined the keys "firstName" and "lastName" into "name" which is the two strings put together
  const profiles = [
    { firstName: "Rebekah", lastName: "Callari", id: 1, comments: 5 },
    { firstName: "Rachel", lastName: "Callari", id: 2, comments: 10 },
    { firstName: "Micah", lastName: "Callari", id: 3, comments: 1 },
  ];
  const newProfiles = profiles.map((person) => {
    return {
      name: `${person.firstName} ${person.lastName}`,
      id: person.id,
      comments: person.comments,
    };
  });
  console.log("EXAMPLE 5 - the formatted object using map: ", newProfiles);

  // NOW DO THIS USING REDUCE

  // EXAMPLE 6 (accumulator is a number)
  // The goal is to sum the number of comments
  let commentTotal = 0;
  profiles.forEach((person) => (commentTotal += person.comments));
  console.log("EXAMPLE 6 - the total number of comments: ", commentTotal);

  return (
    <div className="App">
      <header className="App-header">
        <p>Open the console to see the outputs.</p>
        <a
          className="App-link"
          href="https://andepaulj.medium.com/javascript-reduce-79aab078da23"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reduce Examples
        </a>
      </header>
    </div>
  );
}

export default App;
