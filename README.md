# Pokemon Match Up

Pokemon match up is a simple single-player memory game which involves the player matching pairs of images in a grid.
The goal of the game is to match pairs of identical images of Pokemon characters, as fast as possible.
The player's skill and memory is tested and the fastest times are added to the leaderboard.
The theme of the game is centered around designs and characters from the Pokemon series of video games.

There are three difficulty levels for the player to choose from, offering a level of flexibility depending on the player's choice.
As difficulty increases, more pairs must be matched.
The game ends when the grid is empty and all matching Pokemon have been found.

## User Experience (UX)

The goal this website aims to achieve is to provide an interactive and fun game for the purpose of entertainment.
The site should be intuitive and easy to use with a focus on allowing the user to play the game.
Initially, the landing page of the site will allow the user to choose from options, including 'Play', 'Help', and 'Leaderboard'.
The game itself utilises three different difficulty settings; Easy, Medium, and Hard.
This allows flexibility for the user to choose a desired difficulty level suitable for their skill level.
This simple layout and minimalist design will allow the player to focus on the game without distractions.
The game will utilise responsive design and will be playable in the browser in large screen as well as mobile devices.

### User Stories

1. As a user, I want a game that is fun to play.

2. As a user, I need to understand the various options of the user interface, in order to effectively navigate the website and choose what I am looking for.

3. As a user, I want to be able to select my difficulty level for the game.

4. As a user, I want to be able to understand how to play the game.

5. As a user, I want to be able to pause or quit the game.

6. As a user, I want to know my game progress and my rank after I have finished the game.

### UX Framework

**1. Strategy**

Pokemon match up is a simple matching pairs game created using HTML, CSS, and JavaScript for the purposes of entertainment.
The goal is to allow users to interact with the website and to be able to complete and play the game, and to know their ranking after.

**2. Scope**

The scope of the website is to provide an easily understandable, interactive, and enjoyable experience for visitors of the website who aim to play the game.
In addition, repeat users will be able to view their previous rankings, so the website will entice users to come back.
The website aims to make use of artwork from the open source PokeAPI to integrate character sprites into the tiles of the matching pairs game.

*** Functional Requirements ***

The functional requirements of the website involve displaying a easy to navigate user interface and a variety of options for the user to choose.
Included in this is multiple difficulty levels which are able to be selected from the landing page.
The different difficulties affect the size of the grid available for the game, with higher difficulties utilising larger grids of more individual tiles.
In addition, the website should function to allow the user to pause the game and also view instructions on how to play at any time.
The menus should allow the user to return to the previous screen or close the dialog box.
A functioning leaderboard should alow the user to input their name alongside their time, which will be cached using the browser.
To mitigate blank screens between content loading, a loading screen will also be displayed.
A timer will be used and must accurately be able to start and stop when needed.
The timer must activate once the user starts playing the game, on their first click.
The final time must display in the modal once the final pair is matched.
The final time should be displayed on the leaderboard if submitted.

*** Content Requirements ***

The content of the website includes various images using the PokeAPI API on github; the sprite artwork is used to make the images for the mathing tiles in the game.
The text is minimal and simple to understand, as is appropriate for the target audience.
The game page will utilise a timer which should be displayed with the game, in full view.


**3. Structure**

The structure of the website is designed to be responsive and interactive, with clear placement of interface buttons and options.
The aim is to have two main pages; the landing page, and the game page.
All other content will be integrated using additional pop-up windows as they are optional and should not require the user to navigate to a different page.
The timer will be visible on the game page to allow the user to keep track of their progress. This will be displayed in different positions in accordance with responsive design techniques.

**4. Skeleton**

The skeleton of the website is a minimalistic presentation of the elements that make up the two main pages of the site.
Firstly, the landing page will display a header image, and the main content menu.
Within the main content menu, several options are clearly displayed to allow the user to select their choice.
Simple language is used to allow the user to quickly and easily understand what the text represents.
The 'Play' option allows the user to play, the 'Instructions' option tells the user how to do this, and the 'Leaderboard' displays the leaderboard.
Various subheadings also will be used to show the user which menu they are currently in.
The options will create pop-up windows that display the information without making the user navigate away from the page.
Return/Close options allow the user to return to their previous point of the interface.

**5. Surface**

The surface of the website will build on the skeleton and make the website visually appealing and fun to interact with for the user.
Fans of Pokemon will immediately recognise the overall theme and imagery used, as well as the sprite artwork from the video game series.
Colours will be thematically appropriate and not distract from the game, as well as allow text to be read easily.
The fonts used are easy to read, and appropriate for the style of the game.
Controls include visual symbols and icons alongside them which allow the user to clearly understand the function of each control.

The font chosen for the website text is 'Press Start 2P' sourced from Google Fonts. This font was chosen as it fits the retro game design which is suitable for the Pokemon theme of the content, as well as being easily legible.
Contrasting colours are used for the text against the backgrounds.
The landing page uses a blue vertical gradient as the background, to be attractive as well as to convey a fun and calm impression of the ga,e.
White text is used to stand out against this.
The content box and menu buttons are rounded as a stylistic choice and make the design look simple and attractive.
Modals are used as a design choice to avoid distracting the user with additional loading screens and complicated layouts.

The main game screen displays the central grid for the game, and the timer, as well as UI buttons for functionality.
The game displays different Pokemon sprites dependingon the selected difficulty of the game.
Once a tile is clicked, a yellow background is displayed which is thematically appropriate and takes cues from the Pokemon logo, as well as providing good contrast to allow the player to easily see the selected Pokemon.

### Wireframe

[Wireframe PDF made in Balsamiq](./wireframe/MS2-wireframe.pdf)

## Features

### Existing Features

1. Landing page

The landing page aims to be simple and easy to navigate, with the main menu in the center of the page with clearly displayed options.
Icons and visual cues provide a first time user with the impression of a retro-inspired game theme.

2. User interface

The user interface uses modals and clear simple buttons that are responsive and allow the user to navigate to the option of their choice.
A close button is integrated into each modal to allow the user to exit if they have clicked the wrong option.
The modal displayed upon completion of the game allows the user to submit their nickname and time to be displayed in the leaderboard, using a text input form.

3. Images

The images used are sourced from PokeAPI. 
Pokemon models from video games are compiled in the API, which I have integrated into the game grid.
Each difficulty has different Pokemon to match.
The card back has a different image for each difficulty level, respectively.

4. Pop up windows - modals

The website uses modals as a tool for navigation and to display options to the user. 
Currently the modals all work as expected except for the close buttons.

5. Main game

The main game was created using a video tutorial and the code was modified to suit design needs as well as certain functions.
The game currently allows cards to be flipped, with non-matching cards being hidden again, and matching cards being displayed permanently.
Several corner cases have been identified, such as rapid succesive clicks causing matching errors and the cards remaining flipped over despite not being matched.
In addition, double clicking the same card causes the game logic to identify this as a match incorrectly.

### Upcoming Features

- Countdown timer
- Leaderboard

## Technologies Used

- HTML5 - This was used to create the base code and structure for the landing page as well as the main game pages.

- CSS3 - This was used to style the elements and position the content of the page, and to make it responsive.

- JavaScript - This was used to create the logic of the game, as well as for the functionality of the modals.

- Bootstrap - Bootstrap was used to format the layout of some of the content elements.

- JQuery - Used to toggle modals.

- Google Fonts - Google Fonts was used to provide open source fonts to style the text of the website.

- FontAwesome - Icons from FontAwesome were used to provide a visual cue for the user interface buttons for navigation.

- Balsamiq - Used to create the wireframe for the initial design of the project.

## Testing

HTML code was validated and edited by using the W3C online code vaidator, which allowed fixes to be made with respect to open tags and incorrect syntax.
CSS code was validated using the Jigsaw W3 online validation service. This allowed incorrect syntax to be fixed.
Google Chrome in-browser developer tools have been used throughout the project to test responsiveness on different device sizes.
JavaScript code was validated using the esprima.org JS syntax validator which confirmed no errors.

## Deployment

The project is deployed using Github Pages.
The IDE used for this project is Gitpod.

## Credits

### Content

The JavaScript code for the game logic was created by following a video tutorial, and edited according to my own project.
The source of the video tutorial from FreeCodeCamp can be found here (https://www.youtube.com/watch?v=ZniVgo8U7ek)

The creation of the Bootstrap modals applied code originally created on the Bootstrap official website, which was adapted for my project.
The source for the modal code can be found here: (https://getbootstrap.com/docs/4.0/components/modal/)

### Media

FontAwesome was used to provide the vector graphic button icons for the UI.
[FontAwesome](https://fontawesome.com/)

Google Fonts was used to obtain the free font 'Press Start 2P'
[Google-Fonts](https://fonts.google.com/specimen/Press+Start+2P?query=press)

PokeAPI was the primary source used for locating and integrating Pokemon character sprites into the project.
[PokeAPI](https://github.com/PokeAPI)

Pokeball image used for easy difficulty
[pokeball.png](https://www.pngkit.com/view/u2w7o0r5r5t4e6w7_pokeball-master-ball-sprite-png/)

Great Ball image used for medium difficulty
[great-ball.png](http://pixelartmaker.com/art/cfc1de4ce952314)

Ultra Ball image used for hard difficulty
[ultra-ball.png](https://toppng.com/ultra-ball-pokeball-pixel-PNG-free-PNG-Images_188906)

### Acknowledgements

-- Code Institute group on slack
-- My mentor, Adegbenga Adeye