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
          "name":    "Test Your Knowledge With a Quiz!",
          "main":    "<p>Think you've learned all there is to know? Find out!</p>",
          "results": "<h5>Learn More</h5><p>Keep scrolling to view a National Geographic video of axolotls. They're astounding animals and also pretty cute!</p>",
          "level1":  "Ready for an Axie!",
          "level2":  "Could use a little more research, but you're almost there!",
          "level3":  "Fill those gaps in your knowledge!",
          "level4":  "You did read everything, right?",
          "level5":  "Please don't try to get an axolotl as a pet ever." // no comma here
      },
        "questions": [
            { // Question 1 - Multiple Choice, Single True Answer
                "q": "What lake are axolotls from?",
                "a": [
                    {"option": "<p>Tenochtitlan</p>",      "correct": false},
                    {"option": "<p>Xochimilco</p>",     "correct": true},
                    {"option": "<p>Chicxulub</p>",      "correct": false},
                    {"option": "<p>Atitlan</p>",     "correct": false} // no comma here
                ],
                "correct": "<p><span>That's right!</span> Axolotls are found in Lake Xochimilco.</p>",
                "incorrect": "<p>No, they are not from there... They're from Xochimilco.</p>" // no comma here
            },
            { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
                "q": "Why should you keep young axolotls by themselves?",
                "a": [
                    {"option": "<p>They are really shy and would hide all the time</p>",               "correct": false},
                    {"option": "<p>They are solitary when they are young</p>",   "correct": false},
                    {"option": "<p>False, you don't need to keep them by themselves</p>",               "correct": false},
                    {"option": "<p>They are cannibalistic and opportunistic </p>", "correct": true} // no comma here
                ],
                "select_any": true,
                "correct": "<p><span>Nice!</span> The babies need to be separated until they're large enough not to swallow one another.</p>",
                "incorrect": "<p><span>Hmmm.</span> Please don't keep young axolotls.</p>" // no comma here
            },
            { // Question 3 - Multiple Choice, Multiple True Answers, Select All
                "q": "Which of these isn’t appropriate to feed an axolotl?",
                "a": [
                    {"option": "<p>Larvae</p>",           "correct": false},
                    {"option": "<p>Duckweed</p>",                  "correct": true},
                    {"option": "<p>Bloodworms</p>",  "correct": false},
                    {"option": "<p>Earthworms</p>",          "correct": false} // no comma here
                ],
                "correct": "<p><span>Brilliant!</span> Axolotls are obligate carnivores.</p>",
                "incorrect": "<p><span>Not Quite.</span> Nope... axolotls love their worms and bugs.</p>" // no comma here
            },
            { // Question 4
                "q": "What is the smallest tank size an axolotl should have?",
                "a": [
                    {"option": "<p>5 gallons</p>",    "correct": false},
                    {"option": "<p>10 gallons</p>",     "correct": false},
                    {"option": "<p>20 gallons</p>",      "correct": true},
                    {"option": "<p>30 gallons</p>",   "correct": false} // no comma here
                ],
                "correct": "<p><span>Holy bananas!</span> 20 gallons is correct!</p>",
                "incorrect": "<p><span>Fail.</span> A single axolotl's MINIMUM tank requirement is 20 gallons.</p>" // no comma here
            }
        ]
    };
