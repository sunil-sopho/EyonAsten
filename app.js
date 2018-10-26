//var TextToSpeech = require("./node_modules/text-to-speech-js/lib/index");
//var TextToSpeech = require("text-to-speech-js");

var say = require('say');

say.speak('Hello, how are you today?',"Cellos",0.75 , (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});


//TextToSpeech.talk("Hello Beautiful World!");
