# Pre-work - **Light and Sound Memory Game**

**Light and Sound Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Haris Redzic**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/glossy-tabby-root

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Basic Gameplay
![](https://cdn.glitch.global/cb286591-95ba-42b0-a7be-881bff619210/Basic%20Gameplay.gif?v=1648747190282)
Losing Game & Unique Pattern
![](https://cdn.glitch.global/cb286591-95ba-42b0-a7be-881bff619210/Lose%20Game.gif?v=1648747194469)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   I used prior knowledge from a freeCodeCamp course on CSS/HTML, then I also looked at w3schools.com, javatpoint.com, 
   and developer.mozilla.org for CSS & javascript info.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   One specific issue was getting the colored border around the game buttons, because I didn't understand that the default styling for buttons
   isn't solid, but some kind of gradient where one half of the border is lighter/darker than the other half. I was confused for a bit on why
   my white border was appearing as white and gray, but a visit to w3schools.com clarified the issue. 
   Overall, the approach to constructing the program was a little weird for me, because we declared many variables, gave structure to the program,
   and defined most of the game logic without actually defining the guessing system, so I was slightly confused on when/where we were going to increment
   guessCounter and progress. After working on the guess logic for a bit everything made sense, and it would've been easier if I had just committed to the
   workshop from the start, instead of taking a rest for spring break. Otherwise, the workshop was fairly straightforward and a good intro to website development.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   I'm interested in how/if web development languages like JS can be used in backend operations, or as a backend interface.
   I'm also curious on the CSS aspect of web development, because I feel as if it requires some graphic design knowledge
   and a different type of creativity than traditional code, but I'm not a graphic designer nor am I very artistic. In a
   professional setting, would a web developer or UI developer be assisted by a graphic design artist, or are you expected
   to pick up some artistic creativity along the way? I'm also interested in the long-term lifecycle of front-end work, 
   because if you're working as a front-end engineer for one company for many years, wouldn't there just not be 
   much front-end work left to do after a certain point, or am I just underestimating the scope of front-end work?
   In my eyes front-end work primarily includes user-interfaces and websites, but I feel like you can only optimize those so much,
   so what else is included in the scope of front-end work outside of UI and website design?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   I would've liked to implement a start menu with two modes as options: the traditional mode specified in the prework,
   and an endless mode which would simply continue looping until the user runs out of mistakes/lives, but there would be an accompanying leaderboard for the endless mode.
   There's other features I'd like to add from the optional features list and my own thoughts, but due to the time-frame of a few hours, I would probably stick to the above.
   

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/a801b378556e4f0896f56af314b403fc)

## License

    Copyright Haris Redzic

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
