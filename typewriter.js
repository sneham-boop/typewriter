const typewriter = (sentence, delay) => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
};

const sentence = "hello there from lighthouse labs";
const delay = 50;
// Calculate delay for \n character based on length of
// "sentence" string
const newLineDelay = sentence.length * delay;

// Call type writer function
typewriter(sentence, delay);

// Print newline after the sentence is done printing.
setTimeout(() => {
  process.stdout.write("\n");
}, newLineDelay);
