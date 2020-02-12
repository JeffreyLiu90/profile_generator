const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let survey = {}

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  survey["name"] = answer;


  rl.question('What is an activity you like doing? ', (answer) => {
    // TODO: Log the answer in a database
    survey["activity"] = answer;


    rl.question('What do you listen to while doing that? ', (answer) => {
      // TODO: Log the answer in a database
      survey["music"] = answer;


      rl.question('Whhich meal is your favourite? (eg: dinner, brunch, etc.) ', (answer) => {
        // TODO: Log the answer in a database
        survey["meal"] = answer;



        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          // TODO: Log the answer in a database
          survey["food"] = answer;


          rl.question('Which sport is your absolute favourite?', (answer) => {
            // TODO: Log the answer in a database
            survey["sport"] = answer;



            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              // TODO: Log the answer in a database
              survey["superpower"] = answer;


              console.log(`Thank you ${survey.name}, I see that you like ${survey.activity}, while listening to ${survey.music}. Your favourite meal is ${survey.meal} and your favourite food is ${survey.food}. Your favourite sport is ${survey.sport} and your superpower is ${survey.superpower}. Ciao!`)
              rl.close();
            });
          });
        });
      });
    });
  });
})


 

