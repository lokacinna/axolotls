$(function() {
      $.scrollify({
        section : ".panel",
      });
    });

    $(function () {
        $('#slickQuiz').slickQuiz();
    });


    // trying to get the quiz

    var quizJSON = {
        "info": {
            "name":    "What did you learn?",
            "main":    "<p>Do you love axolotls yet? Do you at least know a little more about them?</p>",
            "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
            "level1":  "Jeopardy Ready",
            "level2":  "Jeopardy Contender",
            "level3":  "Jeopardy Amateur",
            "level4":  "Jeopardy Newb",
            "level5":  "Stay in school, kid..." // no comma here
        },
        "questions": [
            { // Question 1 - Multiple Choice, Single True Answer
                "q": "Where are axolotls from?",
                "a": [
                    {"option": "Tenochtitlan",      "correct": false},
                    {"option": "Xochimilco",     "correct": true},
                    {"option": "Chicxulub",      "correct": false},
                    {"option": "Atitlán",     "correct": false} // no comma here
                ],
                "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
                "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
            },
            { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
                "q": "Why should you keep young axolotls by themselves?",
                "a": [
                    {"option": "They’re really shy and would hide all the time",               "correct": false},
                    {"option": "They’re solitary when they are young",   "correct": false},
                    {"option": "FALSE: You don't need to keep them by themselves",               "correct": false},
                    {"option": "They’re cannibalistic and opportunistic", "correct": true} // no comma here
                ],
                "select_any": true,
                "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
                "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
            },
            { // Question 3 - Multiple Choice, Multiple True Answers, Select All
                "q": "Which of these isn’t appropriate to feed an axolotl?",
                "a": [
                    {"option": "Larvae",           "correct": true},
                    {"option": "Duckweed",                  "correct": false},
                    {"option": "Bloodworms",  "correct": false},
                    {"option": "Earthworms",          "correct": false} // no comma here
                ],
                "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
                "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
            },
            { // Question 4
                "q": "What is the smallest tank size an axolotl should have?",
                "a": [
                    {"option": "5 gallons",    "correct": false},
                    {"option": "10 gallons",     "correct": false},
                    {"option": "20 gallons",      "correct": true},
                    {"option": "30 gallons",   "correct": false} // no comma here
                ],
                "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
                "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
            },
            { // Question 5
                "q": "Is Earth bigger than a basketball?",
                "a": [
                    {"option": "Yes",    "correct": true},
                    {"option": "No",     "correct": false} // no comma here
                ],
                "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
                "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
            } // no comma here
        ]
    };
