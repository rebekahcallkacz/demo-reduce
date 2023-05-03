import "./App.css";

function App() {
  // FIRST EXAMPLE (accumulator is a number)
  // Sum values in an array
  const numArray = [100, 40, 25];

  // The for loop approach
  let forLoopSum = 0;
  numArray.forEach((value) => {
    forLoopSum += value;
  });
  // console.log("The sum from the for loop: ", forLoopSum);

  // The reduce approach
  const reduceSum = numArray.reduce(
    (sum, currentArrayValue) => (sum += currentArrayValue)
  );
  // console.log("This is the sum from reduce: ", reduceSum);

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
  // console.log(wordCount["I"]);
  stringArray.forEach((word) => {
    wordCount[word] ? (wordCount[word] += 1) : (wordCount[word] = 1);
  });
  // console.log("This is the word count object using a for loop: ", wordCount);
  // The reduce approach
  const wordCountReduce = stringArray.reduce((reduceWordCount, currentWord) => {
    reduceWordCount[currentWord]
      ? (reduceWordCount[currentWord] += 1)
      : (reduceWordCount[currentWord] = 1);
    return reduceWordCount;
  }, {});
  // console.log("This is the word count object using reduce: ", wordCountReduce);

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
  // console.log("This is the filtered, formatted array: ", filteredArray);

  // Using reduce
  const filteredArrayReduce = rawArray.reduce((filteredArray, currentTitle) => {
    console.log(
      "WE ARE REDUCING. This is the current accumulator",
      filteredArray
    );
    console.log("WE ARE REDUCING. This is the currentTitle", currentTitle);
    if (currentTitle.Title !== "Title C") {
      console.log("This title is NOT Title C: ", currentTitle);
      const formattedTitle = {
        title: currentTitle.Title,
        date: currentTitle.release_date,
      };
      console.log(
        "This is the newly formatted title we will add to our accumulator",
        formattedTitle
      );
      filteredArray.push(formattedTitle);
    }
    return filteredArray;
  }, []);
  console.log(
    "This is the filtered, formatted array using reduce: ",
    filteredArrayReduce
  );

  // TO TRY YOURSELF
  let sentence = "";
  stringArray.forEach((word) => (sentence += `${word} `));
  console.log("This is your sentence", sentence);

  // NOW TRY TO DO THIS WITH REDUCE INSTEAD

  // Convert these objects to a name field instead of firstName and lastName
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
  console.log("These are the profiles with the name key", newProfiles);

  // NOW DO THIS USING REDUCE

  // Sum the number of comments
  let commentTotal = 0;
  profiles.forEach((profile) => (commentTotal += profile.comments));
  console.log("This is the total number of comments: ", commentTotal);

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
