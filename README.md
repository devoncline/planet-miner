# Planet Miner

Planet Miner is a small pixel-style space mining game that I built as my Module 2 final project for CodeCrew.

The goal of this project was to create a frontend website using HTML, CSS, and JavaScript while putting together many of the concepts I have learned throughout the module.

## About the Game

In Planet Miner, asteroids crash into a planet and the player can mine the impact site to discover different items.

Items are divided into four rarities:

- Common
- Uncommon
- Rare
- Legendary

Discovered items are saved in the player's collection using localStorage, so progress stays saved after refreshing or leaving the page.

## Design Process

I started by planning Planet Miner as a simple JavaScript-powered game with three pages: a home page, a game page, and a collection page.

I first built the basic HTML structure and navigation, then added the game logic with JavaScript. After the main mining system was working, I added localStorage so discoveries could be saved between pages.

I then focused on the visual design by adding a pixel-style space theme, animations, rarity effects, and responsive mobile styling. I continued testing and adjusting the project as new features were added, including the collection categories and reset confirmation modal.

## Features

- Animated pixel-style space environment
- Random asteroid crash directions
- Mining and randomized item drops
- Four item rarity levels
- Collection page with discovered and undiscovered items
- localStorage progress saving
- Reset progress confirmation modal
- Responsive layout for desktop and mobile
- CSS animations and visual rarity effects
- GitHub Pages deployment

## What I Practiced

This project gave me a chance to combine many of the things I learned during Module 2, including:

- HTML page structure
- CSS styling and responsive design
- CSS Grid and Flexbox
- CSS animations and keyframes
- JavaScript arrays
- Functions
- If/else statements
- For loops
- DOM manipulation
- `getElementById`
- `createElement`
- `appendChild`
- `classList`
- Event listeners
- `Math.random()`
- localStorage
- `JSON.stringify()` and `JSON.parse()`

One of the biggest parts of this project for me was learning how HTML, CSS, and JavaScript work together. HTML creates the structure, CSS controls how the game looks and animates, and JavaScript controls the game logic and player interactions.

## Pages

The project contains three main pages:

- **Home** - Introduction and animated preview of the game
- **Game** - Main asteroid mining gameplay
- **Collection** - Displays the items the player has discovered

## Built With

- HTML
- CSS
- JavaScript
- GitHub Pages

## Assets

Pixel art assets used in this project came from the [MemoryBlock Galactic Pack](https://theseusinteractivestudio.itch.io/memoryblock-galactic-pack-first-release) by Theseus Interactive Studio.

The starfield background image was created with ChatGPT.

## Live Site

[Play Planet Miner](https://devoncline.github.io/planet-miner/)