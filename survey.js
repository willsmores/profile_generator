const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let string = ''; // Empty string to hold the profile text

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  string += `My name is ${answer} and `;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    string += `I like ${answer} `;
    rl.question('What do you listen to while doing that? ', (answer) => {
      string += `while listening to ${answer}.`;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        string += ` My ultimate favourite meal is ${answer} (the best thing about it is `;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          string += `${answer}). `;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            string += `You can usually find me playing ${answer} (badly). `;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              string += `Oh, and I'm also badass at ${answer}.`;
              console.log(string); // Final online profile!
              rl.close();
            });
          });
        });
      });
    });
  });
});

