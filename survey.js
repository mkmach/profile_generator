const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite ', (answer4) => {
        rl.question('Which sport is your absolute favourite ', (answer5) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
            console.log(`Your name is ${answer1}, and your favourite activity to do is ${answer2}, while listening to ${answer3}. Your fave meal is ${answer4}. Your favourite sport is ${answer5}. Your secret super power is to ${answer6}`);

            rl.close();
          });
        });
      });
    });
  });
});